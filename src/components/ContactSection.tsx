import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  ChevronDown, 
  HelpCircle,
  Building,
  Check
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Hubungi Tim Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Talk Business.
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Kunjungi kantor kami, hubungi melalui telepon kantor, atau diskusikan kebutuhan pengadaan 
            perusahaan Anda secara langsung dengan tim marketing kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <strong className="block text-sm font-bold text-slate-900">Alamat Kantor Resmi</strong>
                <p className="text-slate-600 leading-relaxed">{COMPANY_INFO.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline pt-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <strong className="block text-sm font-bold text-slate-900">Telepon Kantor</strong>
                <p className="text-slate-600">Layanan telepon untuk kebutuhan pengadaan & administrasi.</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="inline-block text-base font-extrabold text-blue-600 hover:underline pt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <strong className="block text-sm font-bold text-slate-900">Email Marketing & Penawaran</strong>
                <p className="text-slate-600">Kirimkan berkas KAK, Rincian Anggaran, atau dokumen tender.</p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-block text-sm font-extrabold text-blue-600 hover:underline pt-1 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-xs w-full">
                <strong className="block text-sm font-bold text-slate-900">Jam Operasional & WhatsApp</strong>
                <p className="text-slate-600">{COMPANY_INFO.businessHours}</p>
                
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20RADCOM,%20saya%20ingin%20berkonsultasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Procurement FAQs */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Pertanyaan yang Sering Diajukan (FAQ)</h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`} 
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Extra reassurance box */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Semua transaksi pengadaan barang dan jasa dengan PT RADCOM Solusindo Informatika terikat dengan perjanjian resmi, transparansi harga, dan garansi pemenuhan barang.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
