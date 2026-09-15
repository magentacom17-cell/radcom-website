import React, { useState } from 'react';
import { 
  Laptop, 
  Printer, 
  FolderOpen, 
  Settings2, 
  Wrench, 
  PackageCheck, 
  Check, 
  ArrowUpRight,
  Search,
  Filter
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectForRfq?: (categoryTitle: string) => void;
  selectedCategoryFilter?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectForRfq,
  selectedCategoryFilter: initialCategory
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-indigo-600" />;
      case 'FolderOpen':
        return <FolderOpen className="w-6 h-6 text-emerald-600" />;
      case 'Settings2':
        return <Settings2 className="w-6 h-6 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-rose-600" />;
      default:
        return <PackageCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  const tabs = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'it', label: 'IT & Komputer' },
    { id: 'printing', label: 'Printer & Toner' },
    { id: 'atk', label: 'ATK & Kantor' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'service', label: 'Service & Maint.' },
    { id: 'general', label: 'General / Custom' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.details.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleRequestQuote = (service: ServiceItem) => {
    if (onSelectForRfq) {
      onSelectForRfq(service.title);
    }
    const rfqEl = document.querySelector('#rfq');
    if (rfqEl) {
      rfqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Katalog & Solusi Pengadaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Berbagai Kebutuhan, Cukup Satu Pintu.
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Konsep pengadaan terpadu yang memangkas waktu kerja procurement. Anda tidak perlu lagi mencari 
            banyak vendor berbeda untuk kebutuhan IT, alat tulis, perawatan teknis, maupun perlengkapan khusus.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari barang / layanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all shadow-sm"
            />
          </div>

        </div>

        {/* Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold">Tidak menemukan barang yang cocok dengan pencarian.</p>
            <p className="text-xs text-slate-400 mt-1">Kami dapat mencarikan barang sesuai spesifikasi khusus Anda melalui form RFQ.</p>
            <button
              type="button"
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                id={`card-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Item Bullet Points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cakupan Pengadaan:</p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Specs / Highlights */}
                  {service.popularSpecs && service.popularSpecs.length > 0 && (
                    <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Standar Jaminan:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.popularSpecs.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => handleRequestQuote(service)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 bg-blue-50/80 hover:bg-blue-600 hover:text-white border border-blue-200/80 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-md"
                >
                  <span>Minta Penawaran {service.title.split('&')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
