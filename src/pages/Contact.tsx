
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-blue mb-2">{t("contact")}</h1>
        <div className="h-1 w-24 bg-gov-blue rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gov-blue mb-6">{t("get_in_touch")}</h2>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gov-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">{t("office_address")}</h3>
                    <p className="text-gray-600">Panchayat Samiti Office, Main Road,<br/>Pombhurna, Chandrapur,<br/>Maharashtra - 442918</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gov-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">{t("phone")}</h3>
                    <p className="text-gray-600">+91 07172-285678</p>
                    <p className="text-gray-600">+91 07172-285679</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gov-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">{t("email")}</h3>
                    <p className="text-gray-600">pspombhurna@maharashtra.gov.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gov-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">{t("office_hours")}</h3>
                    <p className="text-gray-600">{t("monday_to_friday")}: 10:00 AM - 5:30 PM</p>
                    <p className="text-gray-600">{t("saturday")}: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">{t("sunday_closed")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14964.027682258322!2d79.48582545!3d20.2870507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd31ce72f2b1721%3A0xbec8168f3ab209bd!2sPombhurna%2C%20Maharashtra%20442918!5e0!3m2!1sen!2sin!4v1716747143174!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "300px" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pombhurna Panchayat Samiti, Chandrapur, Maharashtra"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gov-blue mb-6">{t("contact_form")}</h2>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("full_name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("subject")} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("message")} *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue focus:outline-none"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-gov-blue hover:bg-blue-800">
                  <Send className="h-4 w-4 mr-2" />
                  {t("send_message")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
