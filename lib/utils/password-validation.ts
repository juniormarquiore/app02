export const passwordValidation = {
  minLength: 8,
  maxLength: 50,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
};

export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (password.length < passwordValidation.minLength) {
    errors.push(`A senha deve ter no mínimo ${passwordValidation.minLength} caracteres`);
  }

  if (password.length > passwordValidation.maxLength) {
    errors.push(`A senha deve ter no máximo ${passwordValidation.maxLength} caracteres`);
  }

  if (passwordValidation.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula');
  }

  if (passwordValidation.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula');
  }

  if (passwordValidation.requireNumbers && !/\d/.test(password)) {
    errors.push('A senha deve conter pelo menos um número');
  }

  if (passwordValidation.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('A senha deve conter pelo menos um caractere especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
} 