
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { 
  Users, FileText, Landmark, Home, Info, Download, ExternalLink 
} from "lucide-react";
import { cn } from "@/lib/utils";

const QuickLinks: React.FC = () => {
  const { t } = useLanguage();
  
  const links = [
    {
      title: t("citizen_services"),
      icon: Users,
      url: "/services",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: t("tender_notices"),
      icon: FileText,
      url: "/notices/tenders",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: t("government_schemes"),
      icon: Landmark,
      url: "/schemes",
      color: "bg-green-50 text-green-600"
    },
    {
      title: t("rural_development"),
      icon: Home,
      url: "/development",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: t("right_to_information"),
      icon: Info,
      url: "/rti",
      color: "bg-red-50 text-red-600"
    },
    {
      title: t("digitized_services"),
      icon: ExternalLink,
      url: "https://www.digitalgov.in/",
      external: true,
      color: "bg-teal-50 text-teal-600"
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 text-gov-blue border-b pb-3">
        {t("quick_links")}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <div 
            key={index} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {link.external ? (
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full card-hover"
              >
                <div className="border rounded-md p-4 h-full flex flex-col items-center text-center">
                  <div className={cn("p-3 rounded-full mb-3", link.color)}>
                    <link.icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{link.title}</span>
                </div>
              </a>
            ) : (
              <Link to={link.url} className="block h-full card-hover">
                <div className="border rounded-md p-4 h-full flex flex-col items-center text-center">
                  <div className={cn("p-3 rounded-full mb-3", link.color)}>
                    <link.icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{link.title}</span>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
