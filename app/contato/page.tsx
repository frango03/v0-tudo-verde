import Link from "next/link"
import { ArrowLeft, Mail, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#FF6A00] hover:text-[#FF6A00]/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          CONTATO — UNIVERSO AMIGURUMI
        </h1>
        
        <p className="text-white/70 mb-8 leading-relaxed">
          Precisa de ajuda? Fale com a gente:
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a 
                href="mailto:suporte@universoamigurumi.com" 
                className="text-[#FF6A00] hover:text-[#FF6A00]/80 transition-colors text-sm"
              >
                suporte@universoamigurumi.com
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Atendimento</h3>
              <p className="text-white/60 text-sm">Segunda a Sexta, 9h às 18h</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-10">
          <Link 
            href="/termos" 
            className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm"
          >
            Termos
          </Link>
          <Link 
            href="/privacidade" 
            className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm"
          >
            Privacidade
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
