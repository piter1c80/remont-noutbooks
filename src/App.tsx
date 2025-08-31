
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ScreenRepair from "./pages/ScreenRepair";
import KeyboardRepair from "./pages/KeyboardRepair";
import BatteryReplacement from "./pages/BatteryReplacement";
import DataRecovery from "./pages/DataRecovery";
import VirusRemoval from "./pages/VirusRemoval";
import Diagnostics from "./pages/Diagnostics";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Repair from "./pages/Repair";
import StorageRepair from "./pages/StorageRepair";
import MotherboardRepair from "./pages/MotherboardRepair";
import WifiRepair from "./pages/WifiRepair";
import AudioRepair from "./pages/AudioRepair";
import PowerRepair from "./pages/PowerRepair";
import Maintenance from "./pages/Maintenance";
import Prices from "./pages/Prices";
import Warranty from "./pages/Warranty";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Emergency from "./pages/Emergency";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/screen-repair" element={<ScreenRepair />} />
          <Route path="/keyboard-repair" element={<KeyboardRepair />} />
          <Route path="/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/virus-removal" element={<VirusRemoval />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<Order />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/storage-repair" element={<StorageRepair />} />
          <Route path="/motherboard-repair" element={<MotherboardRepair />} />
          <Route path="/wifi-repair" element={<WifiRepair />} />
          <Route path="/audio-repair" element={<AudioRepair />} />
          <Route path="/power-repair" element={<PowerRepair />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/subscription" element={<Subscription />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
