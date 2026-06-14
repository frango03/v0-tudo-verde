import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PrivacidadePage() {
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
          POLÍTICA DE PRIVACIDADE — UNIVERSO AMIGURUMI
        </h1>
        
        <p className="text-white/70 mb-8 leading-relaxed">
          Sua privacidade é importante para nós.
        </p>
        
        <div className="space-y-8">
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">1. COLETA DE DADOS</h2>
            <p className="text-white/70 leading-relaxed">
              Coletamos nome, e-mail e dados necessários para pagamento.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">2. USO</h2>
            <p className="text-white/70 leading-relaxed">
              Utilizamos os dados para entrega do produto, comunicação e melhorias.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">3. SEGURANÇA</h2>
            <p className="text-white/70 leading-relaxed">
              Seus dados são protegidos e não vendidos a terceiros.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">4. COOKIES</h2>
            <p className="text-white/70 leading-relaxed">
              Utilizamos cookies para melhorar a experiência.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">5. DIREITOS</h2>
            <p className="text-white/70 leading-relaxed">
              O usuário pode solicitar alteração ou exclusão dos dados.
            </p>
          </section>
        </div>
        
        <div className="flex gap-4 mt-10">
          <Link 
            href="/termos" 
            className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm"
          >
            Termos
          </Link>
          <Link 
            href="/contato" 
            className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm"
          >
            Contato
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
