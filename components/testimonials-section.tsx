"use client"

import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    text: '"Fiz o padrão do Golden Retriever para o aniversário da minha irmã. Quando ela viu, chorou. Nunca imaginei que um padrão fosse gerar isso."',
    name: "Carolina M.",
    role: "Mãe de um Golden",
    initial: "C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-img-266999359-1755634798-e8894e3fe1b17a203e0121420654b3d71755634799-1920-1920-6bJbhKsjTuAO9ddvcgPeEM9gSbi2SE.webp",
  },
  {
    text: '"Minhas clientes enlouqueceram quando comecei a oferecer pets personalizados. Esse ebook se pagou sozinho com o primeiro pedido."',
    name: "Sofia R.",
    role: "Empreendedora de Crochê",
    initial: "S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/person04-300x300-bDajBElWXMP3LnXFBKJYmHy3rtcSx7.jpg",
  },
  {
    text: '"As instruções são claríssimas. Faço amigurumis há anos, mas nunca tinha encontrado padrões tão detalhados com os traços reais da raça."',
    name: "Elena V.",
    role: "Apaixonada por gatos",
    initial: "E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7b3cad5f5499ca2d4e6d83ce95-5GvBwUC0WCR931s7lf6XHk0qTyDnA9.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <div className="bg-[#F5F5F5] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-[700px] mx-auto">
        <p className="text-center text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2">
          O QUE DIZEM QUEM JÁ FEZ CROCHÊ
        </p>
        <h2 className="font-serif text-[clamp(22px,4.5vw,34px)] font-black text-center text-[#0D0D0D] mb-5">
          Amigurumis que emocionam de verdade
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: {
    text: string
    name: string
    role: string
    initial: string
    image?: string
  }
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-5 border border-[rgba(255,106,0,.12)] shadow-[0_4px_16px_rgba(13,13,13,.06)] flex flex-col gap-2.5 transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-[#FF6A00] text-[15px] tracking-widest">★★★★★</div>
      <p className="text-sm italic text-[#0D0D0D] leading-relaxed flex-grow">{testimonial.text}</p>
      <div className="flex items-center gap-2.5 pt-2.5 border-t border-[#0D0D0D]/5">
        {testimonial.image ? (
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-[#FF6A00] text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">
            {testimonial.initial}
          </div>
        )}
        <div>
          <div className="text-[13px] font-bold text-[#0D0D0D]">{testimonial.name}</div>
          <div className="text-xs text-[#4A4A4A]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
