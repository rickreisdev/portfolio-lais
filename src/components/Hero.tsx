import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import profilePhoto from "@/assets/lais-crop.jpg";

const Hero = () => {
  const contactInfo = {
    phone: "(16) 98204-6504",
    email: "laisamoroso02@gmail.com",
    location: "Ribeirão Preto - SP"
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5516982046504`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(`https://www.linkedin.com/in/laisamoroso`, '_blank');
  };

  const handleDownloadCV = () => {
    window.open(`https://drive.google.com/file/d/1W5nanG_WWCUGgRaW7CVSZOfqCOwK4_tD/view?usp=sharing`, '_blank');
  }

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary-glow/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-professional-light/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Laís Amoroso"
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-glow animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-professional/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            Laís Amoroso
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Estruturação de Crédito & Análise de Dados
          </h2>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleEmail}
              variant="outline"
              size="lg"
              className="bg-white text-professional hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar E-mail
            </Button>
            <Button
              onClick={handleLinkedIn}
              variant="outline"
              size="lg"
              className="bg-white text-professional hover:bg-white/90 transition-all duration-300"
            >
              <LuLinkedin className="w-5 h-5 mr-2" />
              Conectar no LinkedIn
            </Button>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className="bg-white text-professional hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;