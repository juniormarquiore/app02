import { NextResponse } from 'next/server';
import { AuthService, RegisterData } from '@/lib/auth/auth-service';
import { validatePassword } from '@/lib/utils/password-validation';
import { sendVerificationEmail } from '@/lib/email/email-service';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validar dados obrigatórios
    if (!data.name || !data.email || !data.password || !data.phone || !data.cpf) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar senha
    const passwordValidation = validatePassword(data.password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: passwordValidation.errors.join(', ') },
        { status: 400 }
      );
    }

    // Validar CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(data.cpf)) {
      return NextResponse.json(
        { error: 'CPF inválido' },
        { status: 400 }
      );
    }

    // Validar telefone
    const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Telefone inválido' },
        { status: 400 }
      );
    }

    // Registrar usuário
    const result = await AuthService.register(data as RegisterData);

    // Enviar email de verificação
    await sendVerificationEmail(
      result.user.email,
      result.user.name,
      result.verificationToken
    );

    return NextResponse.json({
      message: 'Cadastro realizado com sucesso! Por favor, verifique seu email.',
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 