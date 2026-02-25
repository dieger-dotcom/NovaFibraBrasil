import { Wifi, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Nova Fibra <span className="text-brand-400">Brasil</span>
              </span>
            </a>
            <p className="text-sm max-w-sm">
              A internet fibra óptica que acompanha o seu ritmo. Mais velocidade, estabilidade e suporte humano 24 horas por dia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#planos" className="hover:text-brand-400 transition-colors">Nossos Planos</a></li>
              <li><a href="#viabilidade" className="hover:text-brand-400 transition-colors">Consultar Viabilidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Atendimento</h4>
            
            <div className="space-y-4 text-sm">
              <a 
                href="https://wa.me/554550000000?text=Olá%20Nova%20Fibra%20Brasil%2C%20gostaria%20de%20falar%20com%20um%20atendente." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-brand-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com Atendente (WhatsApp)</span>
              </a>

              <div className="pt-3 border-t border-white/10">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Suporte e Geral</p>
                <p className="text-base font-bold text-white">0800 001 1000</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Ouvidoria</p>
                <p className="text-base font-bold text-white mb-0.5">0800 001 0646</p>
                <p className="text-xs text-slate-400">
                  Segunda a sexta, das 8h às 18h<br />
                  (exceto feriados)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Nova Fibra Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
