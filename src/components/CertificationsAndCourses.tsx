import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Brain, TrendingUp } from "lucide-react";

const CertificationsAndCourses = () => {
  const certifications = [
    {
      title: "CEA - Especialista em Investimentos",
      institution: "ANBIMA",
      type: "Certificação",
      status: "Ativo",
      icon: Award,
      description: "Certificação que comprova conhecimento especializado em produtos de investimento e análise de mercado financeiro."
    }
  ];

  const courses = [
    {
      title: "Treinamento de Crédito",
      instructor: "Ricardo Peruffo",
      type: "Curso Especializado",
      icon: TrendingUp,
      description: "Treinamento avançado em crédito com Ricardo Peruffo (CFA), voltado à análise de empresas de médio e grande porte. Integra conceitos de crédito corporativo, modelagem financeira, valuation e Excel avançado aplicados à estruturação de operações."
    },
    {
      title: "Formação em Data Science",
      instructor: "Alura",
      type: "Formação Técnica",
      icon: Brain,
      description: "Formação em Data Science com foco em análise de dados, estatística aplicada e inteligência artificial. Desenvolve visão analítica integrada à tecnologia, fortalecendo a capacidade de interpretar dados complexos e apoiar decisões estratégicas."
    },
    {
      title: "Análise de Crédito",
      instructor: "Capital Escola de Finanças",
      type: "Curso Especializado",
      icon: BookOpen,
      description: "Curso intensivo com foco em análise de balanços, estruturação de crédito, elaboração de defesas, comunicação estratégica e tomada de decisão em operações PJ. Ênfase prática na leitura de demonstrativos e construção de argumentos técnicos."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-4">
            Certificações & Formação Continuada
          </h2>

          {/* Certificações */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-elegant mb-8 text-center">
              Certificações Profissionais
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-elegant">
                            {cert.title}
                          </h4>
                          <Badge className="bg-success text-white">
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-lg text-professional font-semibold mb-2">
                          {cert.institution}
                        </p>
                        <p className="text-muted-foreground">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Cursos de Especialização */}
          <div>
            <h3 className="text-2xl font-bold text-elegant mb-8 text-center">
              Cursos de Especialização
            </h3>
            <div className="grid lg:grid-cols-1 gap-6">
              {courses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 hover:shadow-card transition-all duration-300 border-l-4 border-l-professional"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-elegant">
                            {course.title}
                          </h4>
                          <Badge variant="secondary">
                            {course.type}
                          </Badge>
                        </div>
                        <p className="text-lg text-professional font-semibold mb-3">
                          {course.instructor}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndCourses;