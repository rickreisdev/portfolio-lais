import Hero from "@/components/Hero";
import PersonalSummary from "@/components/PersonalSummary";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import StrategicDifferentials from "@/components/StrategicDifferentials";
import ImpactNumbers from "@/components/ImpactNumbers";
import CertificationsAndCourses from "@/components/CertificationsAndCourses";
import SectorialAnalyses from "@/components/SectorialAnalyses";
import TechnologiesTools from "@/components/TechnologiesTools";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PersonalSummary />
      <ProfessionalJourney />
      <StrategicDifferentials />
      <ImpactNumbers />
      <SectorialAnalyses />
      <TechnologiesTools />
      <CertificationsAndCourses />
      <ContactSection />
    </div>
  );
};

export default Index;
