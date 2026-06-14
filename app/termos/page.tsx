import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export default function TermosPage() {
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
          TERMOS DE USO — UNIVERSO AMIGURUMI
        </h1>
        
        <p className="text-white/70 mb-8 leading-relaxed">
          Ao acessar e adquirir qualquer produto do Universo Amigurumi, você concorda com os termos abaixo:
        </p>
        
        <div className="space-y-8">
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">1. PRODUTO DIGITAL</h2>
            <p className="text-white/70 leading-relaxed">
              Todos os produtos são digitais (PDF), enviados automaticamente após a confirmação do pagamento.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">2. ACESSO</h2>
            <p className="text-white/70 leading-relaxed">
              O acesso é pessoal e intransferível. É proibido compartilhar, revender ou distribuir o material.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">3. PROPRIEDADE INTELECTUAL</h2>
            <p className="text-white/70 leading-relaxed">
              Todo o conteúdo pertence ao Universo Amigurumi e é protegido por direitos autorais.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">4. PAGAMENTO</h2>
            <p className="text-white/70 leading-relaxed">
              Os pagamentos são processados por plataformas seguras. Não armazenamos dados financeiros.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">5. REEMBOLSO</h2>
            <p className="text-white/70 leading-relaxed">
              Por se tratar de produto digital, não realizamos reembolso após o acesso, salvo exceções legais.
            </p>
          </section>
          
          <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-[#FF6A00] mb-3">6. ALTERAÇÕES</h2>
            <p className="text-white/70 leading-relaxed">
              Os termos podem ser atualizados sem aviso prévio.
            </p>
          </section>
        </div>
        
        <div className="flex gap-4 mt-10">
          <Link 
            href="/privacidade" 
            className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm"
          >
            Privacidade
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
