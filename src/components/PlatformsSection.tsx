import React from 'react';
import { 
  ExternalLink, 
  ShoppingBag, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PLATFORMS, COMPANY_INFO } from '../data/companyData';

export const PlatformsSection: React.FC = () => {
  return (
    <section id="platform" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Kanal Pengadaan Digital Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Temukan RADCOM di Platform Resmi Pengadaan.
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Untuk mempermudah kepatuhan audit dan pelaporan anggaran, Anda dapat bertransaksi langsung dengan 
            toko resmi RADCOM melalui marketplace BUMN, ekosistem sekolah Kemendikbudristek, dan katalog pemerintah.
          </p>
        </div>

        {/* 4 Official Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                {/* Platform Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-xl text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                    {platform.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100/70 text-blue-800">
                    {platform.badge}
                  </span>
                </div>

                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                  {platform.category}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {platform.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              <div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Buka {platform.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Ordering Guidance Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 text-xs font-bold">
              <Info className="w-4 h-4" />
              <span>PANDUAN TRANSAKSI CEPAT</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold">
              Butuh paket barang khusus di PaDi UMKM atau SIPLah?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Tim kami dapat membuatkan tautan paket belanja kustom (custom bundle SKU) di platform PaDi UMKM atau SIPLah Gramedia 
              agar sesuai dengan rincian anggaran dan Kerangka Acuan Kerja (KAK) Anda.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20membuat%20paket%20belanja%20kustom%20di%20PaDi%20UMKM/SIPLah.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-blue-50 shadow-md transition-all active:scale-95"
          >
            Minta Dibuatkan Paket SKU →
          </a>
        </div>

      </div>
    </section>
  );
};
