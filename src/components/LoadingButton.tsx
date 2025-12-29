import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  spinnerColor?: "white" | "black" | "purple";
  disabled?: boolean;
}

const LoadingButton = ({
  isLoading = false,
  loadingText = "Loading...",
  children,
  variant = "primary",
  size = "md",
  spinnerColor = "white",
  className = "",
  disabled,
  ...props
}: LoadingButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold shadow-lg shadow-purple-500/20";
      case "secondary":
        return "bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 border border-black text-black font-semibold hover:from-slate-200 hover:to-gray-200 shadow-lg hover:shadow-xl";
      case "outline":
        return "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm";
      default:
        return "bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold shadow-lg shadow-purple-500/20";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm rounded-lg";
      case "md":
        return "px-6 py-3 text-base rounded-xl";
      case "lg":
        return "px-8 py-4 text-lg rounded-full";
      default:
        return "px-6 py-3 text-base rounded-xl";
    }
  };

  return (
    <motion.button
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        transition-all duration-300 
        flex items-center justify-center gap-3
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -2 }}
      whileTap={{ scale: isLoading ? 1 : 0.98 }}
      disabled={disabled || isLoading}
      {...(props as any)}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color={spinnerColor} />
          {loadingText}
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default LoadingButton;
