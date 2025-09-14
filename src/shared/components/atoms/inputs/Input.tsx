import type { InputProps } from "../../../types/types";

const Input = ({ hasError, className, ...props }: InputProps) => {
  const base = "p-2 rounded-md w-full outline-none transition-all border-2 focus:caret-[var(--primary)]";
  const style = hasError
    ? "bg-[#FDEEEE] border-[var(--danger)]"
    : "bg-[var(--off-white)] focus:bg-white border-gray-300 focus:border-[var(--primary)]";

  return <input className={`${base} ${style} ${className || ""}`} {...props} />;
};

export default Input;
