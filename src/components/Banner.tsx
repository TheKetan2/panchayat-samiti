
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Announcement {
  id: number;
  title_en: string;
  title_mr: string;
  content_en: string;
  content_mr: string;
  link?: string;
  important?: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title_en: "Important Notice",
    title_mr: "महत्वाची सूचना",
    content_en: "New COVID-19 vaccination drive starting from 15th May 2023",
    content_mr: "१५ मे २०२३ पासून नवीन कोविड-१९ लसीकरण मोहीम सुरू",
    important: true
  },
  {
    id: 2,
    title_en: "Gram Sabha Meeting",
    title_mr: "ग्रामसभा बैठक",
    content_en: "Upcoming Gram Sabha meeting on 20th May 2023",
    content_mr: "२० मे २०२३ रोजी आगामी ग्रामसभा बैठक",
    link: "/notices/gram-sabha"
  },
  {
    id: 3,
    title_en: "New Pension Scheme",
    title_mr: "नवीन पेन्शन योजना",
    content_en: "Applications for the new pension scheme are now open",
    content_mr: "नवीन पेन्शन योजनेसाठी अर्ज आता सुरू आहेत",
    link: "/schemes/pension"
  }
];

const Banner: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);
  
  const filteredAnnouncements = announcements.filter(a => !dismissed.includes(a.id));
  
  useEffect(() => {
    if (filteredAnnouncements.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredAnnouncements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredAnnouncements.length]);
  
  if (filteredAnnouncements.length === 0) return null;
  
  const current = filteredAnnouncements[currentIndex];
  const title = language === "en" ? current.title_en : current.title_mr;
  const content = language === "en" ? current.content_en : current.content_mr;
  
  return (
    <div 
      className={cn(
        "relative py-3 px-4 border-l-4 transition-all duration-300 animate-slide-down",
        current.important 
          ? "bg-red-50 border-red-500 text-red-700" 
          : "bg-blue-50 border-gov-blue text-gov-blue"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <span className="font-semibold mr-2">{title}:</span>
          <span>{content}</span>
          {current.link && (
            <Button 
              variant="link" 
              size="sm" 
              className="ml-2 p-0 h-auto text-current underline font-medium"
            >
              {t("read_more")}
            </Button>
          )}
        </div>
        
        <button 
          onClick={() => setDismissed([...dismissed, current.id])}
          className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
      
      {/* Indicator dots */}
      {filteredAnnouncements.length > 1 && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {filteredAnnouncements.map((_, index) => (
            <span 
              key={index} 
              className={cn(
                "inline-block h-1.5 w-1.5 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? current.important ? "bg-red-500" : "bg-gov-blue" 
                  : current.important ? "bg-red-300" : "bg-gov-lightBlue bg-opacity-50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
