import React from 'react';
import { 
  Laptop, 
  Printer, 
  Package, 
  Wrench, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet,
  Building2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory }) => {
  const quickCategories = [
    {
      id: 'it',
      icon: Laptop,
      title: 'IT & Hardware',
      subtitle: 'Komputer, PC, laptop, server & networking',
      tag: 'Garansi Resmi',
      color: 'blue'
    },
    {
      id: 'printing',
      icon: Printer,
      title: 'Printing Supplies',
      subtitle: 'Printer, tinta, toner OEM & cartridge',
      tag: '100% Original',
      color: 'indigo'
    },
    {
      id: 'atk',
      icon: Package,
      title: 'ATK & Kantor',
      subtitle: 'Kertas HVS, continuous form & stationery',
      tag: 'Stok Rutin',
      color: 'emerald'
    },
    {
      id: 'engineering',
      icon: Wrench,
      title: 'Engineering & Jasa',
      subtitle: 'Perkakas industri, APD/K3 & perawatan',
      tag: 'SLA Profesional',
      color: 'amber'
    }
  ];

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>PENGADAAN BISNIS, BUMN & INSTITUSI RESMI</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Satu Partner untuk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Berbagai Kebutuhan Bisnis.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>RADCOM</strong> mempermudah tim procurement, instansi pendidikan, BUMN, dan korporasi 
              dalam pengadaan IT, ATK, office supplies, engineering tools, serta perbaikan perangkat dengan 
              alur administratif yang transparan, akuntabel, dan efisien.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-cta-rfq"
                type="button"
                onClick={() => scrollTo('#rfq')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Minta Penawaran Harga</span>
              </button>

              <button
                id="hero-cta-layanan"
                type="button"
                onClick={() => scrollTo('#layanan')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:text-white active:scale-95"
              >
                <span>Lihat 6 Layanan Kami</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>

              <a
                id="hero-cta-wa"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20konsultasi%20pengadaan%20barang/jasa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Konsultasi Cepat via WA</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Legalitas PT & PKP</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Produk Bergaransi</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mitra PaDi & SIPLah</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Response Cepat</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Solutions Interactive Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Kategori Pengadaan Utama</span>
                  </h3>
                  <p className="text-xs text-slate-400">Klik sektor untuk eksplorasi spesifikasi & harga</p>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Ready Sourcing
                </span>
              </div>

              {/* Grid of 4 Core Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickCategories.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(item.id);
                        scrollTo('#layanan');
                      }}
                      className="group p-3.5 rounded-xl bg-slate-900/70 hover:bg-blue-900/30 border border-slate-700/60 hover:border-blue-500/40 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center text-blue-400 group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {item.tag}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* General Procurement Notice Footer */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Butuh item lain? Kami carikan (Palugada).</span>
                </span>
                <button
                  type="button"
                  onClick={() => scrollTo('#rfq')}
                  className="text-blue-400 hover:text-blue-300 font-bold underline underline-offset-2"
                >
                  Request Disini →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
