
import React from "react";
import Banner from "@/components/Banner";
import QuickLinks from "@/components/QuickLinks";
import RecentUpdates from "@/components/RecentUpdates";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Banner for announcements */}
      <Banner />
      
      {/* Hero section */}
      <section className="relative bg-gov-blue py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              {t("welcome_message")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Empowering rural communities through sustainable development and effective governance
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/services">
                <Button className="bg-white text-gov-blue hover:bg-gray-100 hover:text-gov-blue">
                  Citizen Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/schemes">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gov-blue">
                  View Schemes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center animate-fade-in">
              <p className="text-3xl md:text-4xl font-bold text-gov-blue">52</p>
              <p className="text-sm md:text-base text-gray-600">Gram Panchayats</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-3xl md:text-4xl font-bold text-gov-blue">124</p>
              <p className="text-sm md:text-base text-gray-600">Villages</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-3xl md:text-4xl font-bold text-gov-blue">285k</p>
              <p className="text-sm md:text-base text-gray-600">Population</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-3xl md:text-4xl font-bold text-gov-blue">32</p>
              <p className="text-sm md:text-base text-gray-600">Projects</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick links and Recent Updates */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuickLinks />
            <RecentUpdates />
          </div>
        </div>
      </section>
      
      {/* Featured project/initiative section */}
      <section className="py-12 bg-gov-grey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                  alt="Development Project" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
                  Featured Project
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gov-darkGrey">
                  Sustainable Water Resource Management
                </h2>
                <p className="text-gray-700 mb-6">
                  We're working on providing clean water access to all villages in our Panchayat Samiti. 
                  This initiative has already benefited over 15,000 residents by implementing rainwater 
                  harvesting systems and renovating existing water infrastructure.
                </p>
                <Link to="/projects/water-management">
                  <Button className="w-fit bg-gov-blue hover:bg-gov-blue hover:opacity-90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
