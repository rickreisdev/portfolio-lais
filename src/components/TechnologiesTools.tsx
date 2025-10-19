import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, FileSpreadsheet, Cog, Database, Code } from "lucide-react";

const TechnologiesTools = () => {
  const categories = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      tools: ["ChatGPT/GPT-4", "Claude", "Machine Learning", "Análise Preditiva", "Automação Inteligente"]
    },
    {
      icon: FileSpreadsheet,
      title: "Análise & Modelagem",
      tools: ["Excel Avançado", "VBA", "Modelagem Financeira", "Análise de Sensibilidade", "Monte Carlo"]
    },
    {
      icon: BarChart3,
      title: "Visualização de Dados",
      tools: ["Power BI", "Dashboards Executivos", "KPI Tracking", "Business Intelligence", "Data Storytelling"]
    },
    {
      icon: Cog,
      title: "Automação & Processos",
      tools: ["Process Mining", "RPA", "Workflow Automation", "Otimização Operacional", "Lean Six Sigma"]
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      tools: ["SQL", "Data Analysis", "ETL Processes", "Data Quality", "Database Management"]
    },
    {
      icon: Code,
      title: "Ferramentas Técnicas",
      tools: ["Python Básico", "R", "API Integration", "Web Scraping", "Documentation Tools"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-4">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Stack tecnológico especializado para análise de crédito e automação
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-border/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-elegant">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 border-border/50"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Professional Certifications Preview */}
          <Card className="mt-16 p-8 bg-gradient-card text-center">
            <h3 className="text-2xl font-bold text-elegant mb-4">
              Certificações & Aprendizado Contínuo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Investimento constante em capacitação técnica e atualização com as mais 
              recentes tendências em IA, análise de dados e automação de processos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-professional text-white">Power BI Certified</Badge>
              <Badge className="bg-professional text-white">Excel Expert</Badge>
              <Badge className="bg-professional text-white">IA Generativa</Badge>
              <Badge className="bg-professional text-white">Process Automation</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesTools;