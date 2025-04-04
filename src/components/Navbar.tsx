
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("about_us"), path: "/about" },
    { name: t("administration"), path: "/administration" },
    { name: t("schemes"), path: "/schemes" },
    { name: t("notices"), path: "/notices" },
    { name: t("projects"), path: "/projects" },
    { name: t("downloads"), path: "/downloads" },
    { name: t("contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header>
      {/* Top bar with logo and language switcher */}
      <div className="bg-gov-blue text-white py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-3 md:mb-0">
            <div className="mr-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government Emblem" 
                className="h-14 w-auto"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t("site_title")}</h1>
              <p className="text-sm opacity-90">पंचायत समिती पोंभुर्णा</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Navigation menu */}
      <nav 
        className={cn(
          "bg-white py-3 shadow-sm sticky top-0 z-50 transition-all duration-300",
          scrolled && "shadow-md"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-between items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gov-blue"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex justify-between items-center">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "nav-link",
                      location.pathname === link.path && "nav-link-active"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile navigation */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0"
            )}
          >
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block py-2 px-3 rounded-md transition-colors",
                      location.pathname === link.path
                        ? "bg-gov-grey text-gov-blue font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
