import type { ErrorMessageProps } from "../../types/types";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  return <span className="text-[var(--danger)] font-semibold">{message}</span>;
};

export default ErrorMessage;
