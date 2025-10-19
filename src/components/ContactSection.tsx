import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = {
    phone: "(16) 98204-6504",
    email: "laisamoroso02@gmail.com",
    location: "Ribeirão Preto - SP"
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5516982046504?text=Olá%20Laís!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}?subject=Contato%20via%20Portfólio&body=Olá%20Laís,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.%0A%0AAtenciosamente,`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(`https://www.linkedin.com/in/laisamoroso`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Estou sempre aberta a novas oportunidades e desafios estratégicos
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm mb-4">{contactInfo.phone}</p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-white text-professional hover:bg-white/90 w-full"
              >
                Enviar Mensagem
              </Button>
            </Card>

            {/* Email */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
              <p className="text-white/80 text-sm mb-4">{contactInfo.email}</p>
              <Button 
                onClick={handleEmail}
                className="bg-white text-professional hover:bg-white/90 w-full"
              >
                Enviar E-mail
              </Button>
            </Card>

            {/* LinkedIn */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuLinkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-white/80 text-sm mb-4">Networking Profissional</p>
              <Button 
                onClick={handleLinkedIn}
                className="bg-white text-professional hover:bg-white/90 w-full"
              >
                Conectar
              </Button>
            </Card>
          </div>

          {/* Localização */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{contactInfo.location}</span>
            </div>
            <p className="text-white/80 text-sm mt-2">
              Disponível para oportunidades locais e remotas
            </p>
          </Card>

          {/* CTA Principal */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronta para Novos Desafios
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Se você busca um profissional estratégico, orientado por dados e 
              comprometido com resultados excepcionais, vamos conversar sobre 
              como posso contribuir para o crescimento da sua organização.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-white text-professional hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Contato Imediato
              </Button>
              <Button 
                onClick={handleEmail}
                variant="outline"
                size="lg"
                className="bg-white text-professional hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Proposta Formal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;