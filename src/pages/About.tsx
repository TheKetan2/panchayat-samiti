
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Users, History, Target } from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("about_us")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Info className="h-6 w-6 text-gov-blue" />
            <CardTitle>{t("overview")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              {t("about_overview_text")}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Target className="h-6 w-6 text-gov-blue" />
            <CardTitle>{t("vision_mission")}</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">{t("vision")}</h3>
            <p className="text-gray-700 mb-4">{t("vision_text")}</p>
            
            <h3 className="font-semibold mb-2">{t("mission")}</h3>
            <p className="text-gray-700">{t("mission_text")}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Users className="h-6 w-6 text-gov-blue" />
            <CardTitle>{t("roles_responsibilities")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("role_1")}</li>
              <li>{t("role_2")}</li>
              <li>{t("role_3")}</li>
              <li>{t("role_4")}</li>
              <li>{t("role_5")}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <History className="h-6 w-6 text-gov-blue" />
            <CardTitle>{t("history")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{t("history_text")}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gov-blue mb-4">{t("organizational_structure")}</h2>
        <img 
          src="/placeholder.svg" 
          alt={t("org_structure")} 
          className="mx-auto max-w-full h-auto border rounded shadow-sm bg-white p-4"
        />
      </div>
    </div>
  );
};

export default About;
