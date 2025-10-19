import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const PersonalSummary = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-12">
            Sobre Mim
          </h2>

          <Card className="p-8 mb-12 bg-gradient-card shadow-elegant border-0">
            <p className="text-lg leading-relaxed text-foreground/90 text-center">
              Carrego do esporte a disciplina e o foco que aplico diariamente no
              mercado financeiro. Atuo com crédito empresarial e estratégia
              comercial para empresas do Middle Market, unindo visão contábil,
              dados e tecnologia para apoiar decisões mais precisas e
              eficientes. Minha atuação envolve análise de balanços, avaliação
              de indicadores e garantias, além de operações estruturadas de
              acordo com o perfil e o potencial de cada empresa. Tenho uma
              trajetória marcada por entregas consistentes, evolução acelerada e
              compromisso com a excelência em cada projeto.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalSummary;
