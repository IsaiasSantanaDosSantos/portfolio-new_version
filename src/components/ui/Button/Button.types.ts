import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  variant?: 'primary' | 'secondary';

  fullWidth?: boolean;
}
