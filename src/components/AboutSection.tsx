import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  ClipboardCheck, 
  CheckCircle2, 
  FileText,
  BadgePercent
} from 'lucide-react';
import { COMPANY_INFO, PROCUREMENT_BENEFITS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi & Pengajuan Kebutuhan',
      desc: 'Kirimkan daftar barang, Kerangka Acuan Kerja (KAK), atau spesifikasi teknis yang Anda butuhkan melalui email, WA, atau form RFQ.'
    },
    {
      step: '02',
      title: 'Penawaran Harga Resmi (SPH)',
      desc: 'Tim kami menyiapkan Surat Penawaran Harga kompetitif lengkap dengan kepastian ketersediaan stok, garansi, dan termin pembayaran.'
    },
    {
      step: '03',
      title: 'Penerbitan PO/SPK & Quality Check',
      desc: 'Setelah kesepakatan PO atau SPK ditandatangani, barang disiapkan dan diperiksa secara teliti untuk menjamin kesesuaian spesifikasi.'
    },
    {
      step: '04',
      title: 'Pengiriman & Dokumen BAST',
      desc: 'Barang dikirim tepat waktu ke lokasi Anda disertai Berita Acara Serah Terima (BAST), kwitansi resmi, dan e-Faktur Pajak.'
    }
  ];

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: About Copy & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
              {/* Decorative Watermark */}
              <div className="absolute -right-6 -bottom-10 text-white/10 font-black text-9xl select-none pointer-events-none">
                R
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-extrabold uppercase tracking-wider mb-6">
                  Profil Perusahaan
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                  PT RADCOM Solusindo Informatika
                </h3>
                <p className="text-blue-100 text-sm mt-3 leading-relaxed">
                  Mitra strategis terpercaya yang menjembatani kebutuhan logistik operasional perusahaan, 
                  satuan pendidikan, dan instansi pemerintah dengan proses yang lebih efisien dan akuntabel.
                </p>
              </div>

              {/* Status Points */}
              <div className="pt-6 border-t border-white/20 space-y-3 mt-8">
                <div className="flex items-center gap-3 text-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Badan Usaha Resmi: <strong>PT (Perseroan Terbatas)</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <BadgePercent className="w-5 h-5 text-amber-300 shrink-0" />
                  <span>Kepatuhan Pajak: <strong>PKP (Faktur Pajak Resmi)</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <FileCheck className="w-5 h-5 text-sky-300 shrink-0" />
                  <span>Kanal Belanja: <strong>PaDi UMKM, SIPLah, e-Katalog</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Fleksibel & Profesional
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Menghilangkan Kerumitan Pengadaan dengan Layanan Terkoordinasi.
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Di banyak perusahaan dan institusi, tim pengadaan sering kali terbebani oleh administrasi yang rumit karena harus menghubungi vendor yang berbeda-beda untuk komputer, tinta printer, alat tulis kantor, perlengkapan teknis, dan perbaikan perangkat.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>RADCOM</strong> hadir untuk menyederhanakan alur tersebut. Dengan kapabilitas sourcing yang luas dan legalitas berbadan hukum yang lengkap, kami menjadi titik kontak tunggal yang siap memenuhi kebutuhan Anda sesuai spesifikasi, anggaran, dan tenggat waktu yang ditetapkan.
            </p>

            {/* Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PROCUREMENT_BENEFITS.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-center">
                <strong className="block text-2xl sm:text-3xl font-black text-blue-700">1 Pintu</strong>
                <span className="text-[11px] text-slate-600 font-medium">Semua Kebutuhan</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-center">
                <strong className="block text-2xl sm:text-3xl font-black text-emerald-700">6+</strong>
                <span className="text-[11px] text-slate-600 font-medium">Kategori Solusi</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-center">
                <strong className="block text-2xl sm:text-3xl font-black text-amber-700">100%</strong>
                <span className="text-[11px] text-slate-600 font-medium">Legal & e-Faktur</span>
              </div>
            </div>

          </div>

        </div>

        {/* Workflow: Alur Pengadaan 4 Langkah */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Prosedur Kerja</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Alur Transaksi Mudah & Akuntabel</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dari pengajuan awal hingga serah terima barang, proses dilakukan dengan kepatuhan administratif penuh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg hover:border-blue-300 transition-all relative group"
              >
                <span className="inline-block text-2xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors mb-3">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
