import type { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface StyleProps {
  className?: string
  style?: React.CSSProperties
}

export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  isDisabled?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export interface PasswordFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ErrorMessageProps {
  message?: string;
}