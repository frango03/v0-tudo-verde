import Link from "next/link"

export function Footer() {
  return (
    <>
      <div className="bg-[#0D0D0D] border-t border-white/5 py-5 px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/80 text-sm font-bold text-center sm:text-left">
            Universo Amigurumi
            <small className="block text-xs font-normal text-white/40">Transformando seu pet em amor feito à mão.</small>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/termos" className="text-white/50 no-underline text-[13px] hover:text-[#FF6A00] transition-colors">
              Termos
            </Link>
            <Link href="/privacidade" className="text-white/50 no-underline text-[13px] hover:text-[#FF6A00] transition-colors">
              Privacidade
            </Link>
            <Link href="/contato" className="text-white/50 no-underline text-[13px] hover:text-[#FF6A00] transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0D0D0D] text-center py-2.5 pb-20 sm:pb-6 px-4 sm:px-6 text-xs text-white/30">
        <p>© 2026 Universo Amigurumi. Todos os direitos reservados.</p>
        <p className="text-white/20 mt-1">Amigurumis de Pets — Padrões por raça em PDF</p>
      </div>
    </>
  )
}
