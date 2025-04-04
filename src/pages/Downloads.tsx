
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, FileText, FilePlus, FileArchive } from "lucide-react";

const Downloads = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      id: "forms",
      title: t("application_forms"),
      icon: FilePlus,
      files: [
        { name: t("income_certificate_form"), size: "120KB", date: "2023-05-15" },
        { name: t("residence_certificate_form"), size: "85KB", date: "2023-04-20" },
        { name: t("birth_certificate_form"), size: "110KB", date: "2023-03-10" }
      ]
    },
    {
      id: "policies",
      title: t("policy_documents"),
      icon: FileText,
      files: [
        { name: t("water_policy"), size: "250KB", date: "2023-02-18" },
        { name: t("education_policy"), size: "320KB", date: "2023-01-25" },
        { name: t("health_policy"), size: "180KB", date: "2022-12-05" }
      ]
    },
    {
      id: "reports",
      title: t("annual_reports"),
      icon: FileArchive,
      files: [
        { name: t("annual_report_2022"), size: "1.2MB", date: "2023-06-10" },
        { name: t("annual_report_2021"), size: "980KB", date: "2022-06-15" },
        { name: t("annual_report_2020"), size: "850KB", date: "2021-06-20" }
      ]
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("downloads")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
        <p className="mt-4 text-gray-600 max-w-3xl">{t("downloads_intro")}</p>
      </div>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center mb-4">
              <category.icon className="h-6 w-6 text-gov-blue mr-2" />
              <h2 className="text-xl font-bold text-gov-blue">{category.title}</h2>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-gov-grey">
                    <tr>
                      <th className="text-left p-4">{t("document_name")}</th>
                      <th className="text-left p-4 hidden md:table-cell">{t("file_size")}</th>
                      <th className="text-left p-4 hidden md:table-cell">{t("upload_date")}</th>
                      <th className="text-right p-4">{t("action")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {category.files.map((file, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{file.name}</td>
                        <td className="p-4 text-gray-500 hidden md:table-cell">{file.size}</td>
                        <td className="p-4 text-gray-500 hidden md:table-cell">{file.date}</td>
                        <td className="p-4 text-right">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-gov-blue hover:underline"
                          >
                            <FileDown className="h-4 w-4 mr-1" />
                            {t("download")}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
