import { motion } from "motion/react";
import { Clock, Headset, ShieldCheck, Wifi } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Tecnologia Wi-Fi 6",
    description: "Mais velocidade, menor latência e capacidade para conectar dezenas de dispositivos simultaneamente sem perder qualidade.",
  },
  {
    icon: Headset,
    title: "Suporte Local 24h",
    description: "Atendimento humanizado via WhatsApp a qualquer hora do dia ou da noite. Sem robôs, direto com nossa equipe.",
  },
  {
    icon: Clock,
    title: "Instalação em 24h",
    description: "Agilidade é nosso forte. Assinou hoje, instalamos em até 24 horas para você não ficar desconectado.",
  },
  {
    icon: ShieldCheck,
    title: "Valor Fixo até 2028",
    description: "Sem surpresas na sua fatura. Garantimos o valor da sua mensalidade fixo até o ano de 2028.",
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Por que escolher a Nova Fibra?
          </h2>
          <p className="text-lg text-slate-600">
            Diferenciais pensados para entregar a melhor experiência de conexão para você e sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
                <feature.icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
