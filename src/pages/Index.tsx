import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import InsuranceCalculator from "@/components/insurance/InsuranceCalculator";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <HeroSection />
    <InsuranceCalculator />
    <div className="mt-auto">
      <SiteFooter />
    </div>
  </div>
);

export default Index;
