import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhySection from "@/components/WhySection/WhySection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProgramsSection from "@/components/ProgramsSection/ProgramsSection";
import ScheduleSection from "@/components/ScheduleSection/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection/RegistrationSection";
import RulesSection from "@/components/RulesSection/RulesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Wave: hero → why */}
      <div style={{ lineHeight: 0, background: "#FFFBF3", marginTop: -2 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,40 C120,80 360,10 600,50 C840,90 1080,20 1440,60 L1440,80 L0,80 Z" fill="#FFFBF3" />
        </svg>
      </div>

      <WhySection />

      {/* Wave: why → about */}
      <div style={{ lineHeight: 0, background: "#FFFBF3" }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,0 C360,80 1080,0 1440,50 L1440,0 Z" fill="#FFFBF3" />
          <path d="M0,0 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="#FFF8F0" />
        </svg>
      </div>

      <AboutSection />

      {/* Wave: about → programs */}
      <div style={{ lineHeight: 0, background: "#FFF8F0" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 L0,60 Z" fill="#FFFBF3" />
        </svg>
      </div>

      <ProgramsSection />

      {/* Wave: programs → schedule */}
      <div style={{ lineHeight: 0, background: "#FFFBF3", marginBottom: "-1px"}}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,35 C200,0 400,70 600,35 C800,0 1000,70 1200,35 C1300,17 1380,50 1440,35 L1440,70 L0,70 Z" fill="#E8F5FD" />
        </svg>
      </div>

      <ScheduleSection />

      {/* Wave: schedule → registration */}
      <div style={{ lineHeight: 0, background: "#F0FAFF", transform: "rotate(180deg)"}}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,0 L1440,0 L1440,60 Q720,20 0,60 Z" fill="#FFFBF3" />
        </svg>
      </div>

      <RegistrationSection />

      {/* Wave: registration → rules */}
      <div style={{ lineHeight: 0, background: "#FFFBF3" }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,70 Q360,0 720,50 Q1080,100 1440,20 L1440,70 Z" fill="#FFF8F0" />
        </svg>
      </div>

      <RulesSection />

      {/* Wave: rules → contact */}
      <div style={{ lineHeight: 0, background: "#FFF0E0", marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C480,70 960,0 1440,40 L1440,60 L0,60 Z" fill="#FF6B1A" />
        </svg>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
