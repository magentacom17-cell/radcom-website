import React from 'react';
import footerLogo from '../assets/images/regenerated_image_1789459237171.jpg';
import { ArrowUp, ExternalLink, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, PLATFORMS } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div
                id="footer-brand-logo-container"
                className="h-10 w-auto flex items-center justify-center shrink-0"
              >
                <img
                  id="footer-brand-logo-img"
                  src={footerLogo}
                  alt="PT RADCOM Solusindo Informatika Logo"
                  className="h-9 sm:h-10 w-auto max-w-[150px] object-contain rounded-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                RAD<span className="text-red-500">COM</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              PT RADCOM Solusindo Informatika — Satu partner terintegrasi untuk pengadaan IT, 
              printing supplies, ATK, perkakas teknik, dan perawatan fasilitas kantor.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Pengusaha Kena Pajak (PKP) Resmi</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Navigasi</p>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan Pengadaan</a></li>
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang RADCOM</a></li>
              <li><a href="#klien" className="hover:text-white transition-colors">Klien & Rekanan</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Platform Resmi</a></li>
              <li><a href="#rfq" className="hover:text-white transition-colors">Minta Penawaran (RFQ)</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Kontak Kami</a></li>
            </ul>
          </div>

          {/* Col 3: Platforms */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Kanal Pengadaan Digital</p>
            <ul className="space-y-2">
              {PLATFORMS.map((plat) => (
                <li key={plat.id}>
                  <a
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>{plat.name} ({plat.code.split(' ')[0]})</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office info */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Kantor Operasional</p>
            <div className="space-y-2 text-[11px] leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} PT RADCOM Solusindo Informatika. Hak Cipta Dilindungi Undang-Undang.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
