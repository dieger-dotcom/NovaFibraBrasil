import { motion } from "motion/react";
import { Check, Info, Star, Tv, Wifi } from "lucide-react";

const plans = [
  {
    id: "essencial",
    name: "Pacote Essencial",
    speed: "500",
    unit: "Mega",
    price: 100,
    features: [
      "1 Roteador Wi-Fi 5",
      "Instalação GRÁTIS",
      "Instalação em até 24h",
      "Suporte 24h no WhatsApp",
      "Valor fixo até 2028",
    ],
    highlight: false,
  },
  {
    id: "super",
    name: "Pacote Super",
    speed: "700",
    unit: "Mega",
    price: 130,
    features: [
      "1 Roteador Wi-Fi 6",
      "GloboPlay incluso",
      "Instalação GRÁTIS",
      "Instalação em até 24h",
      "Suporte 24h no WhatsApp",
      "Valor fixo até 2028",
    ],
    highlight: true,
    badge: "Mais Escolhido",
  },
  {
    id: "ultra",
    name: "Pacote Ultra",
    speed: "1",
    unit: "GIGA",
    price: 160,
    features: [
      "2 Roteadores Wi-Fi 6",
      "GloboPlay incluso",
      "Instalação GRÁTIS",
      "Instalação em até 24h",
      "Suporte 24h no WhatsApp",
      "Valor fixo até 2028",
    ],
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Escolha a velocidade ideal
          </h2>
          <p className="text-lg text-slate-600">
            Planos com desconto especial de R$10 para pagamento via cartão de crédito.
            Sem surpresas na fatura até 2028!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 ${
                plan.highlight
                  ? "border-2 border-brand-500 shadow-brand-500/20 md:scale-105 z-10"
                  : "border border-slate-100"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <Star className="w-4 h-4 fill-current" />
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">
                    {plan.speed}
                  </span>
                  <span className="text-2xl font-bold text-brand-500">{plan.unit}</span>
                </div>
              </div>

              <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-slate-500">No cartão de crédito</span>
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                    -R$10
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">R$</span>
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price - 10}</span>
                  <span className="text-sm text-slate-500">/mês</span>
                </div>
                <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  No boleto: R${plan.price}/mês
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-600 font-bold" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">
                      {feature.includes("Wi-Fi 6") ? (
                        <span className="flex items-center gap-1">
                          {feature} <Wifi className="w-4 h-4 text-brand-500" />
                        </span>
                      ) : feature.includes("GloboPlay") ? (
                        <span className="flex items-center gap-1">
                          {feature} <Tv className="w-4 h-4 text-brand-500" />
                        </span>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#viabilidade"
                className={`block w-full py-4 rounded-xl text-center font-bold text-lg transition-all ${
                  plan.highlight
                    ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                Assinar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
