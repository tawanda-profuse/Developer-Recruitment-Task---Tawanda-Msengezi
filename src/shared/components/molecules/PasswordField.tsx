import { useState } from "react";
import Input from "../atoms/inputs/Input";
import Label from "../atoms/Label";
import ErrorMessage from "../atoms/ErrorMessage";
import ICON_SRC_MAPPING from "../../constants/iconSrcMapping";
import type { PasswordFieldProps } from "../../types/types";

const PasswordField = ({ label, name, placeholder, value, error, onChange }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex gap-8 relative w-full md:w-[80%] md:items-center flex-col md:flex-row">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex flex-col w-full gap-1">
        <div className="relative">
          <Input
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            hasError={!!error}
          />
          <button
            type="button"
            className="absolute top-2/4 right-4 -translate-y-2/4 cursor-pointer transition-all hover:scale-110"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={ICON_SRC_MAPPING["eye"]} alt="Toggle password visibility" />
          </button>
        </div>
        <ErrorMessage message={error} />
      </div>
    </div>
  );
};

export default PasswordField;
