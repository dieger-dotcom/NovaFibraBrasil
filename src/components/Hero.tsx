import { motion } from "motion/react";
import { ArrowRight, Wifi, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-900 text-white pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-brand-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <Zap className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-brand-100">A internet que acompanha o seu ritmo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Conexão <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Ultra Rápida</span><br />
            para a sua casa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Navegue, jogue e assista seus filmes favoritos sem travamentos. 
            A Nova Fibra Brasil traz a tecnologia Wi-Fi 6 e suporte local 24h.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#planos"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,200,83,0.4)] hover:shadow-[0_0_30px_rgba(0,200,83,0.6)]"
            >
              Ver Planos
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#viabilidade"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all border border-white/10 backdrop-blur-sm"
            >
              Consultar Viabilidade
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-8 text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-brand-400" />
              <span>Wi-Fi 6 Incluso</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-400" />
              <span>Instalação Grátis</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
