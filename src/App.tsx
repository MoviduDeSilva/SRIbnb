
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetail from "./pages/PropertyDetail";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import NotFound from "./pages/NotFound";
import {
  HelpCenter, AirCover, Safety, Accessibility, Cancellation,
  DisasterRelief, NonDiscrimination, Sustainability,
  HostHome, HostAirCover, HostResources, HostCommunity, HostResponsibility,
  Newsroom, NewFeatures, Careers, Investors, GiftCards,
  Privacy, Terms, Sitemap, Language, Currency
} from "./pages/FooterPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
          
          {/* Footer Routes - Support */}
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/aircover" element={<AirCover />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cancellation" element={<Cancellation />} />
          
          {/* Footer Routes - Community */}
          <Route path="/disaster-relief" element={<DisasterRelief />} />
          <Route path="/non-discrimination" element={<NonDiscrimination />} />
          <Route path="/sustainability" element={<Sustainability />} />
          
          {/* Footer Routes - Hosting */}
          <Route path="/host" element={<HostHome />} />
          <Route path="/host/aircover" element={<HostAirCover />} />
          <Route path="/host/resources" element={<HostResources />} />
          <Route path="/host/community" element={<HostCommunity />} />
          <Route path="/host/responsible" element={<HostResponsibility />} />
          
          {/* Footer Routes - Airbnb */}
          <Route path="/news" element={<Newsroom />} />
          <Route path="/features" element={<NewFeatures />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          
          {/* Footer Routes - Legal & Settings */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/language" element={<Language />} />
          <Route path="/currency" element={<Currency />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
