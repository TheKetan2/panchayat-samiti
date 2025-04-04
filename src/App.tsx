import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Administration from "./pages/Administration";
import Schemes from "./pages/Schemes";
import Notices from "./pages/Notices";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename="/panchayat-samiti">
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/projects" element={<NotFound />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
