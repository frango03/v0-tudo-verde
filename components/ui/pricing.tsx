"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCheck, Eye, Flame, AlertTriangle } from "lucide-react"
import { useCountdown } from "@/hooks/use-countdown"

const plans = [
  {
    name: "Coleção",
    description:
      "Perfeito para quem quer começar com a coleção principal de pets amigurumi por raça",
    price: "17,90",
    oldPrice: "69,90",
    discount: "74%",
    savings: "52,00",
    buttonText: "Quero a coleção",
    href: "https://go.pepperpay.com.br/iazwm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PACK-39-br-drfK796myXaMuDT6Q2fcKuL26A2o0d.webp",
    includes: [
      "+60 padrões de pets por raça",
      "Instruções passo a passo",
      "Fotos detalhadas de cada etapa",
      "5 bônus exclusivos",
      "Acesso imediato por email",
      "Garantia de 7 dias",
    ],
  },
  {
    name: "Mega Pack",
    description:
      "A melhor opção para quem quer levar 4 coleções completas pelo preço de 2",
    price: "47,00",
    oldPrice: "233,00",
    discount: "80%",
    savings: "186,00",
    buttonText: "Quero o Mega Pack",
    popular: true,
    href: "https://go.pepperpay.com.br/1fbar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PACK-69-br-zhcbUa9ZEGj5ydhzqAbw9bYLuxXzHs.webp",
    includes: [
      "Tudo da Coleção, mais:",
      "Pets Amigurumi por Raça",
      "+100 Padrões de Personagens",
      "Mini Chaveiros Amigurumis",
      "Roupas de Crochê para Pets",
      "Todos os 5 bônus incluídos",
      "Como Vender Amigurumis e Cobrar Preço Premium",
      "Pack Amigos da Kitty",
      "Padrões Gatinhos Halloween",
      "Gatinhos Cactos",
    ],
  },
]

interface PricingSectionProps {
  viewers?: number
}

export default function PricingSection({ viewers }: PricingSectionProps) {
  const { timeLeft, formatTime } = useCountdown()

  return (
    <div
      id="precos"
      className="px-4 py-12 md:py-20 max-w-5xl mx-auto relative bg-[#FAFAFA]"
    >
      {/* Header */}
      <div className="text-center mb-10 space-y-4 max-w-2xl mx-auto">
        <p className="text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00]">
          ESCOLHA SEU PLANO
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D]">
          Comece a criar seus amigurumis hoje
        </h2>
        <p className="text-sm md:text-base text-[#4A4A4A]">
          Aproveite a oferta especial com desconto por tempo limitado
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            id={plan.popular ? "mega-pack" : undefined}
            className={cn(
              "relative border-2 overflow-hidden h-full flex flex-col",
              plan.popular
                ? "border-[#FF6A00] bg-gradient-to-b from-orange-50 to-white shadow-[0_8px_40px_rgba(255,106,0,.15)]"
                : "border-[#E5E5E5] bg-white shadow-[0_4px_20px_rgba(0,0,0,.06)]"
            )}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-[#FF6A00] text-white px-4 py-1.5 text-xs font-bold rounded-bl-xl">
                  MAIS POPULAR
                </div>
              </div>
            )}

            {/* Image */}
            <div className="relative w-full overflow-hidden bg-[#F5F5F5]">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-auto object-cover"
              />
            </div>

            <CardHeader className="text-left pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A4A4A]">
                    <span className="text-[#FF6A00]">★★★★★</span>
                    <span>4,9/5 (520+ avaliações)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#4A4A4A] mt-2">
                {plan.description}
              </p>

              {/* Card de Escassez Premium */}
              <div className="mt-4 p-4 rounded-2xl bg-[#fff7ed] border-2 border-[#fb923c] shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-[#ea580c] animate-pulse" />
                  <span className="text-sm font-bold text-[#ea580c]">Ultimas horas com desconto</span>
                </div>
                <div className="flex justify-center mb-3">
                  <div className="flex items-center gap-1 bg-[#0D0D0D] rounded-xl px-4 py-3 shadow-lg animate-pulse">
                    <span className="text-2xl md:text-3xl font-bold text-white font-mono tracking-wider">
                      {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#78350f] text-center font-medium">
                  Restam apenas <span className="font-bold text-[#ea580c]">8 vagas</span> com preco promocional
                </p>
              </div>

              {/* Pricing Block - Glassmorphism Card */}
              <div className="mt-4 p-6 rounded-[20px] bg-white/75 backdrop-blur-[12px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] text-[#6b7280] tracking-[1px] uppercase">OFERTA EXCLUSIVA</span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                    {plan.discount} OFF
                  </span>
                </div>
                <div className="text-base text-[#9ca3af] line-through text-center">
                  R$ {plan.oldPrice}
                </div>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-xl text-[#111827]">R$</span>
                  <span className="text-[52px] font-extrabold text-[#111827]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-[#16a34a] font-semibold mb-5 text-center">
                  Você economiza R$ {plan.savings}
                </p>
              </div>
            </CardHeader>

            <CardContent className="pt-0 flex-1 flex flex-col">
              {/* Urgency Block */}
              <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] border border-[#FDBA74] space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#0D0D0D]">
                  <Eye className="h-4 w-4 text-[#FF6A00]" />
                  <span className="font-medium">{viewers || 18} pessoas vendo esta pagina</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#0D0D0D]">
                  <Flame className="h-4 w-4 text-[#EF4444]" />
                  <span className="font-bold text-[#EF4444]">So restam 8 vagas com desconto!</span>
                </div>
                <div className="text-xs text-[#4A4A4A] pt-1 border-t border-[#FDBA74]/50">
                  17 pessoas adquiriram a Mega Colecao hoje
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full mb-3 py-4 text-base md:text-lg font-bold rounded-xl text-center block transition-all",
                  plan.popular
                    ? "bg-gradient-to-b from-[#FF8533] to-[#FF6A00] shadow-lg shadow-orange-500/30 text-white hover:shadow-orange-500/50 hover:scale-[1.02]"
                    : "bg-gradient-to-b from-[#333] to-[#0D0D0D] shadow-lg shadow-neutral-900/20 text-white hover:shadow-neutral-900/40 hover:scale-[1.02]"
                )}
              >
                {plan.buttonText} →
              </a>

              {/* Payment Methods Image */}
              <div className="mb-4">
                <img
                  src="/payment-methods.webp"
                  alt="Compra Segura - Pix, Visa, Mastercard, Elo"
                  className="mx-auto opacity-70 w-full max-w-[280px] h-auto"
                />
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-4 border-t border-[#E5E5E5] flex-1">
                <h4 className="text-xs font-bold uppercase text-[#0D0D0D]/60 tracking-wider">
                  O que está incluído:
                </h4>
                <ul className="space-y-2.5">
                  {plan.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="h-5 w-5 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full grid place-content-center flex-shrink-0 mt-0.5">
                        <CheckCheck className="h-3 w-3 text-[#FF6A00]" />
                      </span>
                      <span className="text-sm text-[#4A4A4A]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-10 bg-white rounded-xl p-6 border border-[#E5E5E5] shadow-sm max-w-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl">🔒</span>
            <span className="text-xs font-medium text-[#4A4A4A]">Pagamento Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl">⚡</span>
            <span className="text-xs font-medium text-[#4A4A4A]">Acesso Imediato</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl">✅</span>
            <span className="text-xs font-medium text-[#4A4A4A]">Garantia 7 Dias</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl">💬</span>
            <span className="text-xs font-medium text-[#4A4A4A]">Suporte Dedicado</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#4A4A4A] font-medium mb-3">Pagamento seguro garantido</p>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formasdepagamentocartoes%20%281%29-3YvGSii9qNMNxQPK7rGoVJ89HdIElF.webp"
            alt="Métodos de pagamento"
            className="mx-auto rounded-lg w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}
