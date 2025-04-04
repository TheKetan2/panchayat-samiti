
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User } from "lucide-react";
import { Link } from "react-router-dom";

const Administration = () => {
  const { t } = useLanguage();
  
  const officials = [
    {
      name: "Dr. Rajesh Deshmukh",
      position: t("chief_executive_officer"),
      photo: "/placeholder.svg",
      contact: "020-26123456"
    },
    {
      name: "Smt. Priya Patil",
      position: t("additional_ceo"),
      photo: "/placeholder.svg",
      contact: "020-26123457"
    },
    {
      name: "Shri. Vijay Jadhav",
      position: t("deputy_ceo"),
      photo: "/placeholder.svg",
      contact: "020-26123458"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("administration")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-gov-blue mr-2" />
          <h2 className="text-2xl font-bold text-gov-blue">{t("key_officials")}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officials.map((official, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-4 bg-gov-grey">
                <img 
                  src={official.photo} 
                  alt={official.name} 
                  className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-white" 
                />
              </div>
              <CardHeader className="text-center pt-2 pb-0">
                <CardTitle className="text-xl">{official.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-medium">{official.position}</p>
                <p className="text-gray-500 text-sm mt-1">{official.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-gov-blue mr-2" />
          <h2 className="text-2xl font-bold text-gov-blue">{t("departments")}</h2>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-gray-700">{t("departments_intro")}</p>
            
            <Link to="/departments" className="text-gov-blue hover:underline font-medium">
              {t("view_all_departments")} →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Administration;
