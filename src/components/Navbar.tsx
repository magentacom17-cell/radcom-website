import React, { useState, useEffect } from 'react';
import navbarLogo from '../assets/images/regenerated_image_1789459236162.jpg';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, PLATFORMS } from '../data/companyData';

interface NavbarProps {
  onOpenRfqModal?: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfqModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Klien & Rekanan', href: '#klien' },
    { label: 'Platform e-Proc', href: '#platform' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div id="top-bar" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">Status Vendor:</span>
              <strong className="text-slate-200">Terdaftar PKP & PaDi UMKM BUMN</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="hidden lg:inline">{COMPANY_INFO.businessHours}</span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pengadaan%20barang/jasa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Cepat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 py-3'
            : 'bg-white border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="RADCOM Solusindo Informatika"
          >
            {/* Visual Logo Mark */}
            <div
              id="navbar-brand-logo-container"
              className="h-10 sm:h-12 w-auto flex items-center justify-center shrink-0"
            >
              <img
                id="navbar-brand-logo-img"
                src={navbarLogo}
                alt="Logo PT RADCOM Solusindo Informatika"
                className="h-10 sm:h-12 w-auto max-w-[160px] object-contain transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  RAD<span className="text-red-600">COM</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                  B2B
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-tight -mt-0.5 hidden sm:block">
                PT RADCOM Solusindo Informatika
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-rfq-button"
              type="button"
              onClick={() => {
                const target = document.querySelector('#rfq');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else if (onOpenRfqModal) {
                  onOpenRfqModal();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Minta Penawaran</span>
            </button>

            <a
              id="header-whatsapp-cta"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20meminta%20informasi%20penawaran%20harga%20untuk%20kebutuhan%20perusahaan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="absolute top-[108px] left-0 right-0 bg-white border-b border-slate-200 p-6 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col gap-3 pb-4 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-semibold text-slate-800 py-2.5 px-3 rounded-lg hover:bg-slate-50 active:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Akses Langsung</p>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const target = document.querySelector('#rfq');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Formulir Permintaan Penawaran (RFQ)</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20butuh%20bantuan%20pengadaan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp Marketing</span>
              </a>

              <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p className="font-bold text-slate-800 mb-1">Kanal Pengadaan Resmi:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {PLATFORMS.map((plat) => (
                    <a
                      key={plat.id}
                      href={plat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium hover:text-blue-600"
                    >
                      <span>{plat.name}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
