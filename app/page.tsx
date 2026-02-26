import Hero from "@/components/hero/Hero";
import Comprohensive from "@/components/Comprohensive";
import About from "@/components/About";
import FindHealth from "@/components/FindHealth";
import ModernVendor from "@/components/ModernVendor";
import HealthyChoice from "@/components/HealthyChoice";
import PropertyOweners from "@/components/PropertyOweners";
import PartnerBenefits from "@/components/PartnerBenefits";
import PartnershipOptions from "@/components/PartnershipOptions";
import PartnersCarousel from "@/components/PartnersCarousel";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Comprohensive />
      <About />
      <FindHealth />
      <ModernVendor />
      <HealthyChoice />
      <PropertyOweners />
      <PartnerBenefits />
      <PartnershipOptions />
      <PartnersCarousel />
      <ContactSection />
    </main>
  );
}
