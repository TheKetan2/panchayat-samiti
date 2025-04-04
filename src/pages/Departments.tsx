
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User, Phone, Mail } from "lucide-react";

const Departments = () => {
  const { t } = useLanguage();
  
  const departments = [
    {
      id: "agriculture",
      name: t("agriculture_dept"),
      head: "Dr. Sanjeev Patil",
      description: t("agriculture_dept_desc"),
      contact: "07172-285680",
      email: "agri.pombhurna@gov.in"
    },
    {
      id: "health",
      name: t("health_dept"),
      head: "Dr. Priya Sharma",
      description: t("health_dept_desc"),
      contact: "07172-285681",
      email: "health.pombhurna@gov.in"
    },
    {
      id: "education",
      name: t("education_dept"),
      head: "Shri. Rajendra Gupta",
      description: t("education_dept_desc"),
      contact: "07172-285682",
      email: "education.pombhurna@gov.in"
    },
    {
      id: "water",
      name: t("water_dept"),
      head: "Smt. Kavita Mane",
      description: t("water_dept_desc"),
      contact: "07172-285683",
      email: "water.pombhurna@gov.in"
    },
    {
      id: "engineering",
      name: t("engineering_dept"),
      head: "Shri. Prakash Jadhav",
      description: t("engineering_dept_desc"),
      contact: "07172-285684",
      email: "engineering.pombhurna@gov.in"
    },
    {
      id: "social",
      name: t("social_welfare_dept"),
      head: "Smt. Lata Deshmukh",
      description: t("social_welfare_dept_desc"),
      contact: "07172-285685",
      email: "welfare.pombhurna@gov.in"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("departments")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
        <p className="mt-4 text-gray-600 max-w-3xl">{t("departments_page_desc")}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Card key={dept.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-gov-blue" />
                <CardTitle>{dept.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 line-clamp-3">{dept.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{dept.head}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{dept.contact}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{dept.email}</span>
                </div>
              </div>
              
              <Link 
                to={`/departments/${dept.id}`}
                className="text-gov-blue hover:underline font-medium text-sm inline-block"
              >
                {t("view_details")} →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Departments;
