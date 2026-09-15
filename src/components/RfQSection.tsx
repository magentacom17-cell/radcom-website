import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  Copy, 
  Check, 
  RotateCcw, 
  MessageSquare, 
  Mail, 
  Sparkles,
  Building,
  Layers,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { RfqFormState } from '../types';

interface RfQSectionProps {
  prefilledCategory?: string;
}

export const RfQSection: React.FC<RfQSectionProps> = ({ prefilledCategory }) => {
  const [formData, setFormData] = useState<RfqFormState>({
    companyOrName: '',
    contact: '',
    category: prefilledCategory || 'IT & Hardware Komputer',
    itemName: '',
    quantity: '',
    notes: ''
  });

  const [copied, setCopied] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Update category if passed from props
  React.useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, category: prefilledCategory }));
    }
  }, [prefilledCategory]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formattedText = `Yth. Tim Sales & Procurement PT RADCOM Solusindo Informatika,

Saya ingin mengajukan permintaan penawaran harga (RFQ) dengan rincian sebagai berikut:

• Nama / Instansi: ${formData.companyOrName || '-'}
• Kontak WhatsApp / Email: ${formData.contact || '-'}
• Kategori Barang: ${formData.category}
• Spesifikasi / Nama Barang: ${formData.itemName || '-'}
• Estimasi Kebutuhan / Volume: ${formData.quantity || '-'}

Catatan & Persyaratan Tambahan:
${formData.notes || 'Mohon kirimkan Surat Penawaran Harga (SPH) resmi beserta ketersediaan stok, masa garansi, dan faktur pajak.'}

Terima kasih.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyOrName || !formData.contact) {
      alert('Silakan isi Nama/Perusahaan dan No. Kontak terlebih dahulu.');
      return;
    }
    const encoded = encodeURIComponent(formattedText);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setSubmittedSuccess(true);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyOrName || !formData.contact) {
      alert('Silakan isi Nama/Perusahaan dan No. Kontak terlebih dahulu.');
      return;
    }
    const subject = encodeURIComponent(`Permintaan Penawaran Harga - ${formData.companyOrName}`);
    const body = encodeURIComponent(formattedText);
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      companyOrName: '',
      contact: '',
      category: 'IT & Hardware Komputer',
      itemName: '',
      quantity: '',
      notes: ''
    });
    setSubmittedSuccess(false);
  };

  return (
    <section id="rfq" className="py-20 lg:py-28 bg-slate-100 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Request for Quotation (RFQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Minta Penawaran Harga Resmi.
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Isi formulir di bawah ini untuk mendapatkan Surat Penawaran Harga (SPH) resmi, estimasi stok, 
            dan kelengkapan dokumen perpajakan langsung ke WhatsApp atau email Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-md">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Formulir Rincian Pengadaan</h3>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                title="Reset formulir"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <form className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyOrName" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Pemohon / Instansi / PT <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="companyOrName"
                    name="companyOrName"
                    type="text"
                    required
                    placeholder="Contoh: PT Sumber Makmur / SMPN 1"
                    value={formData.companyOrName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-xs font-bold text-slate-700 mb-1.5">
                    No. WhatsApp / Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    placeholder="0812xxxx / email@perusahaan.com"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kategori Pengadaan
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Kebutuhan Khusus / Lain-lain (Palugada)">
                      Kebutuhan Khusus / Lain-lain (Palugada)
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Estimasi Volume / Jumlah
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    placeholder="Contoh: 15 unit / 50 rim / 10 pcs"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="itemName" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Spesifikasi Teknis / Merek / Tipe Barang
                </label>
                <input
                  id="itemName"
                  name="itemName"
                  type="text"
                  placeholder="Contoh: Laptop Core i7 RAM 16GB / Toner HP 85A Original / Kertas PaperOne A4 75gr"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Catatan Tambahan, Lokasi Pengiriman & Tenggat Waktu
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Contoh: Pengiriman ke area Cilandak Jakarta Selatan, dibutuhkan minggu depan, mohon rincian faktur pajak resmi."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim via WhatsApp (Respon Cepat)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Kirim via Email</span>
                </button>
              </div>

              {submittedSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Permintaan Anda sedang dialihkan. Tim kami akan segera menanggapi penawaran harga Anda.</span>
                </div>
              )}

            </form>

          </div>

          {/* Right Column: Live Document Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-slate-200 rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-xl">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Format Ringkasan RFQ</h4>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Salin rincian pesan"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Format</span>
                    </>
                  )}
                </button>
              </div>

              {/* Monospace/Formal text preview */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                {formattedText}
              </div>

              {/* Guarantees */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Penerbitan SPH resmi dalam 1 x 24 jam kerja</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Siap Faktur Pajak elektronik (e-Faktur PKP)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dukungan transaksi melalui PaDi UMKM & SIPLah</span>
                </div>
              </div>

            </div>

            {/* Direct Telephone assistance card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Perlu diskusi teknis via telepon kantor?</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Hubungi kantor kami pada jam kerja operasional.</p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
