
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gov-grey py-16 px-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-sm max-w-md w-full animate-scale-in">
        <h1 className="text-6xl font-bold text-gov-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">{t("page_not_found_message")}</p>
        <Link to="/">
          <Button className="bg-gov-blue hover:bg-gov-blue hover:opacity-90">
            <Home className="mr-2 h-4 w-4" />
            {t("back_to_home")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
