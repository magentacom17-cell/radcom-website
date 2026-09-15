import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ClientsSection } from './components/ClientsSection';
import { PlatformsSection } from './components/PlatformsSection';
import { RfQSection } from './components/RfQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, FileSpreadsheet, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [selectedRfqCategory, setSelectedRfqCategory] = useState<string>('IT & Hardware Komputer');
  const [activeFilterCategory, setActiveFilterCategory] = useState<string>('all');

  const handleHeroCategorySelect = (categoryKey: string) => {
    setActiveFilterCategory(categoryKey);
    // Find service title
    const categoryMap: Record<string, string> = {
      it: 'IT & Hardware Komputer',
      printing: 'Printer, Tinta & Toner',
      atk: 'ATK & Office Supplies',
      engineering: 'Engineering & Peralatan Teknis',
      service: 'Service & Maintenance Perangkat',
      general: 'General Procurement (Palugada)'
    };
    if (categoryMap[categoryKey]) {
      setSelectedRfqCategory(categoryMap[categoryKey]);
    }
  };

  const handleServiceSelectForRfq = (serviceTitle: string) => {
    setSelectedRfqCategory(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Header & Navigation */}
      <Navbar onOpenRfqModal={() => {
        const el = document.querySelector('#rfq');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectCategory={handleHeroCategorySelect} />

        {/* Services & Catalog Section */}
        <ServicesSection 
          selectedCategoryFilter={activeFilterCategory}
          onSelectForRfq={handleServiceSelectForRfq} 
        />

        {/* About & Corporate Profile Section */}
        <AboutSection />

        {/* Clients & Trusted Partners Section */}
        <ClientsSection />

        {/* Official e-Procurement Platforms (PaDi UMKM, SIPLah, LPSE, e-Katalog) */}
        <PlatformsSection />

        {/* Mid-Page Call to Action Strip */}
        <section className="py-12 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-200">
                PENAWARAN RESMI & FAKTUR PAJAK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                Punya Kebutuhan Pengadaan Barang Khusus?
              </h3>
              <p className="text-sm text-blue-100 max-w-xl mt-1 leading-relaxed">
                Kirim spesifikasi teknis atau berkas KAK Anda. Tim RADCOM siap memberikan penawaran harga 
                yang paling rasional, terukur, dan transparan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector('#rfq');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-blue-900 bg-white hover:bg-blue-50 shadow-lg shadow-black/10 transition-all active:scale-95"
              >
                Buat Permintaan Harga (RFQ) →
              </button>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20meminta%20penawaran%20harga.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-700/30 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Sales</span>
              </a>
            </div>
          </div>
        </section>

        {/* Interactive RFQ (Request for Quotation) Generator */}
        <RfQSection prefilledCategory={selectedRfqCategory} />

        {/* Contact Info, Office Map & FAQs */}
        <ContactSection />
      </main>

      {/* Floating Action Button (Quick WhatsApp Assistance) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          type="button"
          onClick={() => {
            const el = document.querySelector('#rfq');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-lg hover:bg-slate-800 backdrop-blur-sm border border-slate-700 transition-all hover:scale-105"
          title="Buka form penawaran harga"
        >
          <FileSpreadsheet className="w-4 h-4 text-blue-400" />
          <span>Form RFQ</span>
        </button>

        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20berkonsultasi%20pengadaan%20barang/jasa.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-600/50 hover:shadow-emerald-500/60 transition-all hover:scale-105 active:scale-95 border border-emerald-400/30"
          aria-label="Konsultasi WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"></span>
          </div>
          <span className="hidden sm:inline font-bold">Konsultasi Pengadaan</span>
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
