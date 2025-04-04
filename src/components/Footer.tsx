
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gov-darkGrey text-white">
      {/* Main footer content */}
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">{t("contact_info")}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gov-orange" />
                <div>
                  <p className="font-medium">{t("address")}:</p>
                  <p>Panchayat Samiti Office,</p>
                  <p>Pombhurna, District Chandrapur,</p>
                  <p>Maharashtra, 442918</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gov-orange" />
                <div>
                  <p className="font-medium">{t("phone")}:</p>
                  <p>+91 7172 266228</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gov-orange" />
                <div>
                  <p className="font-medium">{t("email")}:</p>
                  <p>ps.pombhurna@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: Useful Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4">{t("useful_links")}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.maharashtra.gov.in/" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Maharashtra Government
                </a>
              </li>
              <li>
                <a 
                  href="https://www.india.gov.in/" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  National Portal of India
                </a>
              </li>
              <li>
                <a 
                  href="https://chandrapur.gov.in/" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  District Chandrapur
                </a>
              </li>
              <li>
                <a 
                  href="https://rural.maharashtra.gov.in/" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Rural Development Department
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                >
                  {t("privacy_policy")}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="inline-block hover:text-gov-orange transition-colors duration-200"
                >
                  {t("terms_of_use")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Connect with Us */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="mb-3">Get updates on important announcements and events.</p>
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gov-orange text-white placeholder-gray-300"
                />
              </div>
              <button className="w-full bg-gov-orange text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black bg-opacity-30 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
