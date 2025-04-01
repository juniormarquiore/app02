import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true,
});

export async function sendVerificationEmail(
  email: string,
  name: string,
  token: string
) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verificar-email?token=${token}`;

  const mailOptions = {
    from: `"Marquiore Films" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Verifique seu email - Marquiore Films',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Bem-vindo à Marquiore Films!</h1>
        <p>Olá ${name},</p>
        <p>Obrigado por se cadastrar em nosso portal. Para ativar sua conta, por favor clique no botão abaixo:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
            Verificar Email
          </a>
        </div>
        <p>Se você não solicitou este cadastro, por favor ignore este email.</p>
        <p>Este link expira em 24 horas.</p>
        <hr style="border: 1px solid #eee; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">
          Este é um email automático, por favor não responda.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendPasswordResetEmail(
  email: string,
  name: string,
  token: string
) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/redefinir-senha?token=${token}`;

  const mailOptions = {
    from: `"Marquiore Films" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Redefinição de Senha - Marquiore Films',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Redefinição de Senha</h1>
        <p>Olá ${name},</p>
        <p>Recebemos uma solicitação para redefinir sua senha. Se você não fez esta solicitação, por favor ignore este email.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
            Redefinir Senha
          </a>
        </div>
        <p>Este link expira em 1 hora.</p>
        <hr style="border: 1px solid #eee; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">
          Este é um email automático, por favor não responda.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
} 