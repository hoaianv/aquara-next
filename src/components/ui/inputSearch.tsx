import { Search } from "lucide-react";
import React, { forwardRef } from "react";

interface InputSearchProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: string) => void;
  className?: string;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      id = "search",
      placeholder = "Tìm kiếm",
      value,
      onChange,
      className = "",
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500" />
        </div>
        <input
          ref={ref}
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 border border-gray-300   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${className}`}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
