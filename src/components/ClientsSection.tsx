import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Landmark, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { CLIENT_PARTNERS, COMPANY_INFO } from '../data/companyData';

export const ClientsSection: React.FC = () => {
  const [activeSector, setActiveSector] = useState<'Semua' | 'Pemerintah' | 'BUMN' | 'Pendidikan' | 'Swasta'>('Semua');

  const sectorIcons = {
    Pemerintah: Landmark,
    BUMN: Building2,
    Pendidikan: GraduationCap,
    Swasta: Briefcase
  };

  const sectorFilters: Array<'Semua' | 'Pemerintah' | 'BUMN' | 'Pendidikan' | 'Swasta'> = [
    'Semua',
    'Pemerintah',
    'BUMN',
    'Pendidikan',
    'Swasta'
  ];

  const filteredPartners = CLIENT_PARTNERS.filter((p) => {
    if (activeSector === 'Semua') return true;
    return p.sector === activeSector;
  });

  const caseStudies = [
    {
      title: 'Pengadaan Lab Komputer & Laptop Satuan Pendidikan',
      category: 'Pendidikan (SIPLah)',
      desc: 'Penyediaan 45 unit PC dan laptop bergaransi resmi untuk kebutuhan ANBK sekolah dengan pembayaran menggunakan dana BOS via SIPLah.',
      badge: 'Sesuai Juknis BOS'
    },
    {
      title: 'Peremajaan Toner & Consumable BUMN Logistik',
      category: 'BUMN (PaDi UMKM)',
      desc: 'Kontrak penyediaan bulanan cartridge toner laserjet original dan kertas continuous form untuk kelancaran operasional gudang dan kantor cabang.',
      badge: 'Faktur Pajak Elektronik'
    },
    {
      title: 'Pengadaan APD & Perkakas Proyek Engineering EPC',
      category: 'Swasta / Industri',
      desc: 'Penyediaan perlengkapan keselamatan kerja (APD K3), power tools, dan material instalasi listrik untuk kontraktor pelaksana proyek.',
      badge: 'Standar K3 Industri'
    }
  ];

  return (
    <section id="klien" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Kepercayaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dipercaya Berbagai Institusi & Perusahaan.
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Mulai dari satuan pendidikan dasar hingga kementerian, BUMN dan perusahaan swasta multinasional 
            telah bermitra dengan RADCOM untuk memenuhi kebutuhan pengadaan mereka.
          </p>
        </div>

        {/* Sector Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {sectorFilters.map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => setActiveSector(sec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSector === sec
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {sec === 'Semua' ? 'Semua Rekanan' : `Sektor ${sec}`}
            </button>
          ))}
        </div>

        {/* Partner Badges / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-16">
          {filteredPartners.map((partner, idx) => {
            const IconComponent = sectorIcons[partner.sector] || Building2;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase">
                    {partner.sector}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Verified Partner</span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Procurement Case Highlights */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Contoh Pengadaan Nyata</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Kesesuaian Pengadaan Berdasarkan Kebutuhan Lapangan
              </h3>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20berdiskusi%20mengenai%20pengadaan%20seperti%20studi%20kasus%20di%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Konsultasikan Kebutuhan Serupa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-blue-50/30 hover:border-blue-200 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                      {cs.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {cs.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Status: Selesai & BAST Terbit</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
