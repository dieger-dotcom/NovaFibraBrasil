import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { InputMask } from "@react-input/mask";
import { CheckCircle2, Loader2, MapPin, Send } from "lucide-react";

// Esquema de validação dos dados
const formSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  cpf: z.string().min(14, "CPF inválido"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(15, "Celular inválido"),
  cep: z.string().min(9, "CEP inválido"),
  street: z.string().min(3, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  city: z.string().min(2, "Cidade é obrigatória"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // FUNÇÃO QUE ENVIA PARA O WHATSAPP
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // FORMATAÇÃO DA MENSAGEM
    const numeroWhatsApp = "5545984040464"; // <--- COLOQUE O SEU NÚMERO AQUI (com 55 + DDD)
    const mensagem = `*Novo Pedido de Viabilidade - Nova Fibra Brasil*
---------------------------------------
*Nome:* ${data.fullName}
*CPF:* ${data.cpf}
*E-mail:* ${data.email}
*Telefone:* ${data.phone}
*Endereço:* ${data.street}, nº ${data.number}
*Complemento:* ${data.complement || "N/A"}
*CEP:* ${data.cep}
*Cidade:* ${data.city}
---------------------------------------`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Simula um carregamento de 1 segundo para feedback visual
    setTimeout(() => {
      window.open(url, "_blank");
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <section id="viabilidade" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl text-center border border-brand-100"
          >
            <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-brand-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solicitação Enviada!</h2>
            <p className="text-lg text-slate-600 mb-8">
              Obrigado, **{isSuccess}**. Já abrimos o seu WhatsApp para concluir o atendimento. Nossa equipa entrará em contacto em breve.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-brand-600 font-bold hover:underline"
            >
              Enviar outra solicitação
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="viabilidade" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Verifique a <span className="text-brand-500">viabilidade</span> técnica agora
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Preencha os dados abaixo para consultarmos a cobertura na sua rua e prepararmos a melhor oferta.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Cobertura Imediata</h4>
                  <p className="text-slate-500">Instalação prioritária para novos cadastros via site.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input
                    {...register("fullName")}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/50 outline-none"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CPF</label>
                  <InputMask
                    {...register("cpf")}
                    mask="000.000.000-00"
                    replacement={{ 0: /\d/ }}
                    placeholder="000.000.000-00"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/50 outline-none"
                  />
                  {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Celular / WhatsApp</label>
                  <InputMask
                    {...register("phone")}
                    mask="(00) 00000-0000"
                    replacement={{ 0: /\d/ }}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/50 outline-none"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                  <input
                    {...register("email")}
                    placeholder="joao@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/50 outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="md:col-span-2 grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">CEP</label>
                    <InputMask
                      {...register("cep")}
                      mask="00000-000"
                      replacement={{ 0: /\d/ }}
                      placeholder="00000-000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/50 outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Rua</label>
                    <input {...register("street")} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Número da residência</label>
                  <input {...register("number")} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cidade</label>
                  <input {...register("city")} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Falar com Atendente no WhatsApp"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}