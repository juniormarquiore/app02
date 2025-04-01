import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { validatePassword } from '../utils/password-validation';

const prisma = new PrismaClient();

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export class AuthService {
  private static readonly SALT_ROUNDS = 12;

  static async register(data: RegisterData) {
    // Validar email único
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new Error('Este email já está cadastrado');
    }

    // Validar CPF único
    const existingCPF = await prisma.user.findFirst({
      where: { cpf: data.cpf }
    });

    if (existingCPF) {
      throw new Error('Este CPF já está cadastrado');
    }

    // Validar senha
    const passwordValidation = validatePassword(data.password);
    if (!passwordValidation.isValid) {
      throw new Error(passwordValidation.errors.join(', '));
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(data.password, this.SALT_ROUNDS);

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        phone: data.phone,
        cpf: data.cpf,
        role: 'CLIENT',
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    // Gerar token de verificação de email
    const verificationToken = await prisma.verificationToken.create({
      data: {
        identifier: user.email,
        token: crypto.randomUUID(),
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 horas
      }
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      verificationToken: verificationToken.token,
    };
  }

  static async login({ email, password }: LoginData) {
    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Credenciais inválidas');
    }

    // Verificar se email foi confirmado
    if (!user.emailVerified) {
      throw new Error('Por favor, verifique seu email antes de fazer login');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  static async verifyEmail(token: string) {
    // Buscar token
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token }
    });

    if (!verificationToken) {
      throw new Error('Token inválido');
    }

    if (verificationToken.expires < new Date()) {
      throw new Error('Token expirado');
    }

    // Atualizar usuário
    await prisma.user.update({
      where: { email: verificationToken.identifier },
      data: { emailVerified: true }
    });

    // Deletar token usado
    await prisma.verificationToken.delete({
      where: { token }
    });

    return true;
  }

  static async resetPasswordRequest(email: string) {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      // Retornar sucesso mesmo se o usuário não existir para evitar enumeração
      return true;
    }

    // Criar token de reset
    const resetToken = await prisma.passwordResetToken.create({
      data: {
        identifier: email,
        token: crypto.randomUUID(),
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hora
      }
    });

    return resetToken.token;
  }

  static async resetPassword(token: string, newPassword: string) {
    // Validar nova senha
    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.isValid) {
      throw new Error(passwordValidation.errors.join(', '));
    }

    // Buscar token
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token }
    });

    if (!resetToken) {
      throw new Error('Token inválido');
    }

    if (resetToken.expires < new Date()) {
      throw new Error('Token expirado');
    }

    // Hash da nova senha
    const hashedPassword = await bcrypt.hash(newPassword, this.SALT_ROUNDS);

    // Atualizar senha
    await prisma.user.update({
      where: { email: resetToken.identifier },
      data: { password: hashedPassword }
    });

    // Deletar token usado
    await prisma.passwordResetToken.delete({
      where: { token }
    });

    return true;
  }
} 