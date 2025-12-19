import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext"; // <--- Import the Language Provider

import Index from "./pages/Index";
import Chatbot from "./pages/Chatbot";
import Features from "./pages/Features";
import Business from "./pages/Business";
import Research from "./pages/Research";
import About from "./pages/About";
import Experts from "./pages/Experts";
import ExerciseDrill from "./pages/ExerciseDrill";
import Auth from "./pages/Auth";
import ApiDemo from "./pages/ApiDemo";
import CorporateDemo from "./pages/CorporateDemo";
import B2BDashboardDemo from "./pages/B2BDashboardDemo";
import FreemiumDemo from "./pages/FreemiumDemo";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Wrap the app with LanguageProvider so the language state 
        is shared between the Navigation bar and the Chatbot 
      */}
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/features" element={<Features />} />
            <Route path="/business" element={<Business />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/exercise" element={<ExerciseDrill />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/api-demo" element={<ApiDemo />} />
            <Route path="/corporate-demo" element={<CorporateDemo />} />
            <Route path="/B2B-Dashboard-demo" element={<B2BDashboardDemo />} />
            <Route path="/freemium-demo" element={<FreemiumDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
