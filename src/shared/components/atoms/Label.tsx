import { type LabelHTMLAttributes } from "react";

const Label = ({ children, className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={`font-medium ${className || ""}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
