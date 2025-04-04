
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, Briefcase, HeartPulse, GraduationCap } from "lucide-react";

const Schemes = () => {
  const { t } = useLanguage();
  
  const schemes = [
    {
      id: "mgnrega",
      title: "MGNREGA",
      description: t("mgnrega_desc"),
      icon: Briefcase,
      color: "bg-amber-100 text-amber-700"
    },
    {
      id: "pmay",
      title: "PMAY-G",
      description: t("pmay_desc"),
      icon: Home,
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: "nrlm",
      title: "NRLM",
      description: t("nrlm_desc"),
      icon: Users,
      color: "bg-green-100 text-green-700"
    },
    {
      id: "nhm",
      title: "NHM",
      description: t("nhm_desc"),
      icon: HeartPulse,
      color: "bg-red-100 text-red-700"
    },
    {
      id: "rmsa",
      title: "RMSA",
      description: t("rmsa_desc"),
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-700"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("schemes")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
        <p className="mt-4 text-gray-600 max-w-3xl">{t("schemes_intro")}</p>
      </div>
      
      <div className="space-y-6">
        {schemes.map((scheme) => (
          <Card key={scheme.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={`p-2 rounded-md ${scheme.color}`}>
                <scheme.icon className="h-6 w-6" />
              </div>
              <CardTitle>{scheme.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{scheme.description}</p>
              
              <div className="mt-4 space-y-3">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium text-gray-800">{t("eligibility")}:</h4>
                  <p className="text-sm text-gray-600">{t(`${scheme.id}_eligibility`)}</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium text-gray-800">{t("benefits")}:</h4>
                  <p className="text-sm text-gray-600">{t(`${scheme.id}_benefits`)}</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium text-gray-800">{t("application_process")}:</h4>
                  <p className="text-sm text-gray-600">{t(`${scheme.id}_process`)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
