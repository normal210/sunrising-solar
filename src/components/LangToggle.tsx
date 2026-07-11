import { Languages } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

interface LangToggleProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function LangToggle({ variant = "default", size = "md" }: LangToggleProps) {
  const { language, toggleLanguage } = useLanguageStore();

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const variantClasses = {
    default: "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg",
    outline: "border border-primary-200 bg-white/90 text-primary-700 hover:bg-primary-50",
    ghost: "text-primary-100 hover:text-white hover:bg-white/10",
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center font-medium rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]}`}
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{language === "zh" ? "EN" : "中"}</span>
    </button>
  );
}
