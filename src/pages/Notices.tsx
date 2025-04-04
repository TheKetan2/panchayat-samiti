
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, FileText, AlertTriangle, FileCheck } from "lucide-react";

const Notices = () => {
  const { t } = useLanguage();
  
  const notices = [
    {
      id: 1,
      title: t("tender_notice"),
      category: "tender",
      date: "2023-07-15",
      description: t("tender_notice_desc"),
      icon: FileText
    },
    {
      id: 2,
      title: t("meeting_notice"),
      category: "meeting",
      date: "2023-07-10",
      description: t("meeting_notice_desc"),
      icon: Bell
    },
    {
      id: 3,
      title: t("emergency_notice"),
      category: "emergency",
      date: "2023-07-05",
      description: t("emergency_notice_desc"),
      icon: AlertTriangle
    },
    {
      id: 4,
      title: t("resolution_notice"),
      category: "resolution",
      date: "2023-06-28",
      description: t("resolution_notice_desc"),
      icon: FileCheck
    }
  ];
  
  const getNoticeTypeClass = (category: string) => {
    switch (category) {
      case "tender": return "bg-blue-100 text-blue-700";
      case "meeting": return "bg-green-100 text-green-700";
      case "emergency": return "bg-red-100 text-red-700";
      case "resolution": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("notices")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
        <p className="mt-4 text-gray-600 max-w-3xl">{t("notices_intro")}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notices.map((notice) => (
          <Card key={notice.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${getNoticeTypeClass(notice.category)}`}>
                  <notice.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{notice.title}</CardTitle>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(notice.date).toLocaleDateString()}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{notice.description}</p>
              <div className="mt-4">
                <a href="#" className="text-gov-blue hover:underline text-sm font-medium">
                  {t("download_pdf")} →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notices;
