import { ButtonVariant } from "@/interfaces/common";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  propClassName?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  // Icon props
  icon?: ReactNode;
  iconOnly?: boolean;
  iconClassName?: string;
  // Image props
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
}

const Button: FC<ButtonProps> = ({
  text = "Learn More",
  variant = "black",
  onClick,
  propClassName = "",
  disabled = false,
  type = "button",
  icon,
  iconOnly = false,
  iconClassName = "",
  imageSrc,
  imageAlt = "",
  imageClassName = "",
}) => {
  const variants: Record<ButtonVariant, string> = {
    white: "bg-white text-black hover:bg-gray-100 hover:text-gray-800",
    black: "bg-black text-white hover:bg-gray-800 hover:text-gray-100",
    orange: "bg-orange-600/80 text-white hover:bg-orange-600 hover:text-white",
    transparent:
      "bg-transparent text-black border border-white hover:bg-white/20 hover:text-black",
    blue: "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
  };

  const disabledVariants: Record<ButtonVariant, string> = {
    white: "bg-gray-200 text-gray-400 cursor-not-allowed",
    black: "bg-gray-400/60 text-[#03060b] cursor-not-allowed opacity-60",
    orange: "bg-orange-300 text-gray-400 cursor-not-allowed",
    transparent:
      "bg-transparent text-gray-400 border border-gray-400 cursor-not-allowed",
    blue: "bg-blue-300 text-white cursor-not-allowed",
  };

  // Render icon or image with optional custom className
  const renderIcon = () => {
    if (imageSrc) {
      return (
        <Image
          width={30}
          height={30}
          src={imageSrc}
          alt={imageAlt}
          className={`inline-block ${imageClassName || "w-4 h-4 object-cover"}`}
        />
      );
    }

    if (icon) {
      return (
        <span
          className={`inline-flex items-center justify-center ${iconClassName}`}
        >
          {icon}
        </span>
      );
    }

    return null;
  };

  // Render content based on icon/image configuration
  const renderContent = () => {
    const hasIconOrImage = icon || imageSrc;

    if (iconOnly) {
      return renderIcon();
    }

    if (!hasIconOrImage) {
      return text;
    }

    // Icon/Image always on left
    return (
      <div className="flex items-center justify-center w-full gap-2">
        {renderIcon()}
        <span>{text}</span>
      </div>
    );
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${propClassName}
        ${disabled ? disabledVariants[variant] : variants[variant]}
        text-sm 
        font-medium 
        ${iconOnly ? "p-3" : "py-3 px-4"} 
        w-fit 
        rounded-full 
        ${disabled ? "" : "transition-all duration-300 ease-in-out"}
        ${disabled ? "" : "shadow-lg hover:shadow-xl"}
        ${disabled ? "" : "transform hover:scale-105 active:scale-95"}
        backdrop-blur-sm
        ${icon || (imageSrc && !iconOnly) ? "flex items-center gap-2" : ""}
        ${iconOnly ? "flex items-center justify-center" : ""}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
