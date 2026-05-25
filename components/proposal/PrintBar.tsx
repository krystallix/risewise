"use client";

import { MessageCircle, FileDown } from "lucide-react";

export function PrintBar() {
  return (
    <div className="no-print fixed top-0 left-0 right-0 z-[100] bg-[#0f3fa8] flex items-center justify-between px-3 py-2 sm:px-6 sm:py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
        <span className="text-white font-extrabold text-[13px] sm:text-[14px] tracking-tight whitespace-nowrap">
          ✳ Risewise
        </span>
        <span className="text-white/40 text-[12px] hidden sm:inline">|</span>
        <span className="text-white/65 text-[11px] truncate hidden sm:inline">
          Proposal Sistem Manajemen Toko Aki
        </span>
      </div>
      <div className="flex gap-1.5 sm:gap-2.5 shrink-0">
        <button
          onClick={() =>
            window.open(
              "https://wa.me/6281247759998?text=Halo+Aji%2C+saya+tertarik+dengan+proposal+sistem+toko+aki.",
              "_blank"
            )
          }
          className="bg-transparent text-white/75 border border-white/25 px-2.5 py-1.5 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold cursor-pointer tracking-wider rounded flex items-center gap-1.5 hover:bg-white/10 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Chat WhatsApp</span>
          <span className="inline sm:hidden">Whatsapp</span>
        </button>
        <button
          onClick={() => window.print()}
          className="bg-white text-[#1754d4] border-none px-2.5 py-1.5 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-bold cursor-pointer tracking-wider rounded flex items-center gap-1.5 hover:bg-blue-50 transition-colors"
        >
          <FileDown className="w-3.5 h-3.5 " />
          <span className="hidden sm:inline">Simpan PDF</span>
          <span className="inline sm:hidden">PDF</span>
        </button>
      </div>
    </div>
  );
}
