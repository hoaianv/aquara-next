import { Eye, EyeClosed } from "lucide-react";
import React, { forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  error?: FieldError;
  value?: string;
  classProps?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// forwardRef để có thể dùng với register của react-hook-form
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type = "text", error, onChange, value, classProps }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === "password";

    const inputType = isPasswordType && showPassword ? "text" : type;

    const toggleVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={` ${classProps} relative group mb-6`}>
        <span
          className={` text-sm absolute left-[15px] top-1/2 transform -translate-y-1/2 transition-all duration-200
           ${error ? "text-red-600" : "text-[#999]"}
           group-focus-within:text-xs group-focus-within:top-[15px] group-focus-within:text-[#666]
           ${value && value.length > 0 ? "text-xs top-[15px]" : ""}`}
        >
          {label}
        </span>
        <input
          value={value}
          id={id}
          type={inputType}
          ref={ref}
          onChange={onChange}
          className={`peer w-full h-[52px] px-[15px] pt-[20px] pb-[8px] rounded-lg border-[1px]
           ${isPasswordType ? "pr-[50px]" : ""}
           ${
             error
               ? "border-red-600 focus:outline-red-600"
               : "border-[#b8b8b8] focus:outline-[#b0b0b0]"
           }`}
        />

        {value && value.length > 0 && isPasswordType && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-[#666] hover:text-[#333] transition-colors duration-200 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}

        {error && (
          <p className="mt-1 absolute top-full text-red-600 text-sm">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
