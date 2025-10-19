import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Cpu, Truck, Wheat, Factory } from "lucide-react";

const SectorialAnalyses = () => {
  const analyses = [
    {
      id: 1,
      title: "Setor de Tecnologia",
      sector: "Inovação & Digitalização",
      companies: "15+ empresas",
      icon: Cpu,
      summary:
        "Análise especializada em empresas de tecnologia, considerando ativos intangíveis, modelo de receita recorrente e projeções de crescimento exponencial em mercados digitais.",
      insights: [
        "Avaliação de SaaS e plataformas",
        "Análise de burn rate e runway",
        "Modelagem de crescimento viral",
      ],
      tags: ["Fintech", "Software", "Startups", "SaaS"],
    },
    {
      id: 2,
      title: "Setor de Transporte",
      sector: "Logística & Mobilidade",
      companies: "25+ empresas",
      icon: Truck,
      summary:
        "Expertise em análise de empresas de transporte e logística, avaliando frota, rotas estratégicas, custos operacionais e tendências de sustentabilidade no setor.",
      insights: [
        "Análise de depreciação de frota",
        "Otimização de rotas e custos",
        "Impacto de combustíveis e pedágios",
      ],
      tags: ["Logística", "Transporte Rodoviário", "E-commerce", "Last Mile"],
    },
    {
      id: 3,
      title: "Setor do Agronegócio",
      sector: "Agricultura & Sustentabilidade",
      companies: "30+ empresas",
      icon: Wheat,
      summary:
        "Análise profunda do agronegócio brasileiro, considerando sazonalidade, commodities, sustentabilidade e tecnologia aplicada ao campo para decisões de crédito assertivas.",
      insights: [
        "Análise de safra e produtividade",
        "Gestão de risco climático",
        "Tecnologia agrícola (AgTech)",
      ],
      tags: ["Commodities", "Sustentabilidade", "AgTech", "Exportação"],
    },
    {
      id: 4,
      title: "Setor Industrial",
      sector: "Manufatura & Produção",
      companies: "40+ empresas",
      icon: Factory,
      summary:
        "Experiência sólida na análise de empresas industriais, avaliando cadeia produtiva, eficiência operacional, automação e posicionamento competitivo no mercado nacional e internacional.",
      insights: [
        "Análise de capacidade produtiva",
        "Otimização de processos",
        "Competitividade e margem",
      ],
      tags: ["Manufatura", "Automação", "Exportação", "Indústria 4.0"],
    },
  ];

  const handleKnowMoreAnalysis = (analysisId: number) => {
    const analysis = analyses.find((a) => a.id === analysisId);
    if (!analysis) return;

    const title = encodeURIComponent(analysis.title);
    const sector = encodeURIComponent(analysis.sector);
    const message = `Olá Laís! Vi seu portfólio e gostaria de conversar sobre a Análise Setorial: ${title} no setor de ${sector}.`;
    window.open(
      `https://wa.me/5516982046504?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-4">
            Análises Setoriais
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Expertise especializada em diferentes setores da economia brasileira
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {analyses.map((analysis, index) => {
              const IconComponent = analysis.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs">
                          {analysis.sector}
                        </Badge>
                        <Badge className="bg-professional text-white text-xs">
                          {analysis.companies}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-elegant">
                        {analysis.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {analysis.summary}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-elegant text-sm mb-2">
                      Principais Insights:
                    </h4>
                    <div className="space-y-1">
                      {analysis.insights.map((insight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-professional rounded-full"></div>
                          <span className="text-xs text-muted-foreground">
                            {insight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {analysis.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleKnowMoreAnalysis(analysis.id)}
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-professional hover:text-white transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Saiba mais sobre a Análise
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorialAnalyses;
