
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, User, Phone, Mail, FileText, Users, Target } from "lucide-react";

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  // This would ideally come from an API or data source
  const getDepartmentInfo = (deptId: string) => {
    const departments = {
      agriculture: {
        name: t("agriculture_dept"),
        head: "Dr. Sanjeev Patil",
        description: t("agriculture_dept_desc"),
        fullDescription: t("agriculture_dept_full_desc"),
        contact: "07172-285680",
        email: "agri.pombhurna@gov.in",
        services: [
          t("agriculture_service_1"),
          t("agriculture_service_2"),
          t("agriculture_service_3")
        ],
        projects: [
          {
            name: t("agriculture_project_1"),
            status: t("ongoing"),
            description: t("agriculture_project_1_desc")
          },
          {
            name: t("agriculture_project_2"),
            status: t("completed"),
            description: t("agriculture_project_2_desc")
          }
        ],
        staff: [
          { name: "Dr. Sanjeev Patil", designation: t("department_head") },
          { name: "Shri. Mohan Deshmukh", designation: t("senior_officer") },
          { name: "Smt. Sunita Patil", designation: t("officer") }
        ]
      },
      health: {
        name: t("health_dept"),
        head: "Dr. Priya Sharma",
        description: t("health_dept_desc"),
        fullDescription: t("health_dept_full_desc"),
        contact: "07172-285681",
        email: "health.pombhurna@gov.in",
        services: [
          t("health_service_1"),
          t("health_service_2"),
          t("health_service_3")
        ],
        projects: [
          {
            name: t("health_project_1"),
            status: t("ongoing"),
            description: t("health_project_1_desc")
          },
          {
            name: t("health_project_2"),
            status: t("completed"),
            description: t("health_project_2_desc")
          }
        ],
        staff: [
          { name: "Dr. Priya Sharma", designation: t("department_head") },
          { name: "Dr. Rajesh Kumar", designation: t("senior_medical_officer") },
          { name: "Smt. Anjali Mehta", designation: t("health_worker") }
        ]
      },
      // ... add other departments with similar structure
      // For brevity, I'm only showing two detailed departments
      education: {
        name: t("education_dept"),
        head: "Shri. Rajendra Gupta",
        description: t("education_dept_desc"),
        fullDescription: t("education_dept_desc"),
        contact: "07172-285682",
        email: "education.pombhurna@gov.in",
        services: [], projects: [], staff: []
      },
      water: {
        name: t("water_dept"),
        head: "Smt. Kavita Mane",
        description: t("water_dept_desc"),
        fullDescription: t("water_dept_desc"),
        contact: "07172-285683",
        email: "water.pombhurna@gov.in",
        services: [], projects: [], staff: []
      },
      engineering: {
        name: t("engineering_dept"),
        head: "Shri. Prakash Jadhav",
        description: t("engineering_dept_desc"),
        fullDescription: t("engineering_dept_desc"),
        contact: "07172-285684",
        email: "engineering.pombhurna@gov.in",
        services: [], projects: [], staff: []
      },
      social: {
        name: t("social_welfare_dept"),
        head: "Smt. Lata Deshmukh",
        description: t("social_welfare_dept_desc"),
        fullDescription: t("social_welfare_dept_desc"),
        contact: "07172-285685",
        email: "welfare.pombhurna@gov.in",
        services: [], projects: [], staff: []
      }
    };
    
    return departments[id as keyof typeof departments] || departments.agriculture;
  };
  
  const department = getDepartmentInfo(id || "");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/departments" className="flex items-center text-gov-blue hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          {t("back_to_departments")}
        </Link>
        
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{department.name}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Building className="h-6 w-6 text-gov-blue" />
              <CardTitle>{t("department_overview")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-line">{department.fullDescription}</p>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <FileText className="h-6 w-6 text-gov-blue" />
              <CardTitle>{t("services_provided")}</CardTitle>
            </CardHeader>
            <CardContent>
              {department.services && department.services.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {department.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">{t("information_not_available")}</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Target className="h-6 w-6 text-gov-blue" />
              <CardTitle>{t("ongoing_projects")}</CardTitle>
            </CardHeader>
            <CardContent>
              {department.projects && department.projects.length > 0 ? (
                <div className="space-y-4">
                  {department.projects.map((project, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-800">{project.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === t("ongoing") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">{t("information_not_available")}</p>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <User className="h-6 w-6 text-gov-blue" />
              <CardTitle>{t("contact_information")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">{t("department_head")}</p>
                  <p className="font-medium">{department.head}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t("phone")}</p>
                  <p>{department.contact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t("email")}</p>
                  <p>{department.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Users className="h-6 w-6 text-gov-blue" />
              <CardTitle>{t("staff_directory")}</CardTitle>
            </CardHeader>
            <CardContent>
              {department.staff && department.staff.length > 0 ? (
                <div className="divide-y">
                  {department.staff.map((person, index) => (
                    <div key={index} className="py-3 first:pt-0 last:pb-0">
                      <p className="font-medium text-gray-800">{person.name}</p>
                      <p className="text-sm text-gray-500">{person.designation}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">{t("information_not_available")}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
