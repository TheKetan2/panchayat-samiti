
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <span className="text-sm font-medium">{t("language")}:</span>
      <div className="flex rounded-md overflow-hidden border border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-none px-3 py-1 h-8 text-sm transition-all",
            language === "en" 
              ? "bg-gov-blue text-white" 
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => setLanguage("en")}
        >
          English
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-none px-3 py-1 h-8 text-sm transition-all",
            language === "mr" 
              ? "bg-gov-blue text-white" 
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => setLanguage("mr")}
        >
          मराठी
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
