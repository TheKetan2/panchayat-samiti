
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Update {
  id: number;
  title_en: string;
  title_mr: string;
  date: string;
  category: string;
  url: string;
  featured?: boolean;
}

const updates: Update[] = [
  {
    id: 1,
    title_en: "New Drinking Water Scheme Launched in 5 Villages",
    title_mr: "५ गावांमध्ये नवीन पिण्याच्या पाण्याची योजना सुरू",
    date: "2023-05-10",
    category: "Development",
    url: "/projects/water-scheme",
    featured: true
  },
  {
    id: 2,
    title_en: "Road Construction Work Completed in Chinchpalli",
    title_mr: "चिंचपल्ली येथे रस्ता बांधकाम काम पूर्ण",
    date: "2023-05-05",
    category: "Infrastructure",
    url: "/projects/road-construction"
  },
  {
    id: 3,
    title_en: "Vaccination Camp Schedule for June 2023",
    title_mr: "जून २०२३ साठी लसीकरण शिबिर कार्यक्रम",
    date: "2023-05-01",
    category: "Health",
    url: "/notices/vaccination-camp"
  },
  {
    id: 4,
    title_en: "Applications Invited for Farmer Subsidy Program",
    title_mr: "शेतकरी अनुदान कार्यक्रमासाठी अर्ज आमंत्रित",
    date: "2023-04-28",
    category: "Agriculture",
    url: "/schemes/farmer-subsidy"
  }
];

const RecentUpdates: React.FC = () => {
  const { language, t } = useLanguage();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "en" ? "en-US" : "mr-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <h2 className="text-xl font-bold text-gov-blue">
          {t("recent_updates")}
        </h2>
        <Link to="/notices">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gov-blue hover:text-gov-blue hover:bg-blue-50 font-medium p-2"
          >
            {t("view_all")}
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <Link 
            key={update.id} 
            to={update.url}
            className={cn(
              "block border rounded-md p-4 hover:border-gov-blue transition-all duration-200 animate-fade-in",
              update.featured && "border-l-4 border-l-gov-orange"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col">
              <h3 className="font-medium text-lg mb-2">
                {language === "en" ? update.title_en : update.title_mr}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <CalendarDays size={14} className="mr-1" />
                <span>{formatDate(update.date)}</span>
                <span className="mx-2">•</span>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  update.category === "Development" && "bg-green-100 text-green-800",
                  update.category === "Infrastructure" && "bg-blue-100 text-blue-800",
                  update.category === "Health" && "bg-red-100 text-red-800",
                  update.category === "Agriculture" && "bg-amber-100 text-amber-800"
                )}>
                  {update.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates;
