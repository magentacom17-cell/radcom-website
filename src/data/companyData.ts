import { ServiceItem, PlatformLink, ClientPartner } from '../types';

export const COMPANY_INFO = {
  name: 'PT RADCOM Solusindo Informatika',
  shortName: 'RADCOM',
  tagline: 'Solusi Kebutuhan Bisnis & Pengadaan Terpadu',
  description:
    'Satu partner terpercaya untuk pengadaan IT, ATK & stationery, printing supplies, engineering tools, perawatan & maintenance, hingga general procurement untuk korporasi, BUMN, dan institusi pemerintahan.',
  address: 'Jl. Mampang Prapatan X No. 36, Jakarta Selatan 12790',
  phone: '(021) 79182182',
  phoneClean: '02179182182',
  email: 'marketing@radcomsolusindo.com',
  whatsappNumber: '6287778115881',
  whatsappDisplay: '+62 877-7811-5881',
  businessHours: 'Senin – Jumat : 09:00 – 17:00 WIB',
  yearEstablished: 2012,
  legalStatus: 'PT (Perseroan Terbatas)',
  taxStatus: 'PKP (Faktur Pajak Tersedia)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'it-computer',
    title: 'IT & Hardware Komputer',
    category: 'it',
    iconName: 'Laptop',
    shortDesc: 'Pengadaan perangkat komputasi, infrastruktur jaringan, server, dan aksesoris kantor bergaransi resmi.',
    details: [
      'PC Desktop, All-in-One, dan Workstation',
      'Laptop Bisnis, Ultrabook & Rugged Device',
      'Networking: Switch, Router, Access Point, Perkabelan UTP/FO',
      'Storage, SSD/HDD Server, RAM & Komponen Upgrade',
      'Monitor, UPS, Docking Station & Periferal'
    ],
    popularSpecs: ['Intel Core i5/i7/i9 / AMD Ryzen Pro', 'RAM 8GB - 64GB DDR4/DDR5', 'Garansi Resmi 1-3 Tahun Onsite'],
    badge: 'Kebutuhan Utama'
  },
  {
    id: 'printer-toner',
    title: 'Printer, Tinta & Toner',
    category: 'printing',
    iconName: 'Printer',
    shortDesc: 'Solusi cetak dokumen skala kecil hingga volume tinggi dengan jaminan kualitas tinta dan toner original.',
    details: [
      'Printer Laserjet Monochrome & Color',
      'InkTank & EcoTank Multiguna (Print, Scan, Copy)',
      'Toner Original & Tinta Botol Resmi (HP, Canon, Epson, Brother)',
      'Drum Unit, Fuser Kit & Sparepart Printer',
      'Plotter & Printer Format Lebar (A0/A1)'
    ],
    popularSpecs: ['Original OEM Cartridge', 'Hemat Cost Per Page', 'Support Heavy Duty Printing']
  },
  {
    id: 'atk-stationery',
    title: 'ATK & Office Supplies',
    category: 'atk',
    iconName: 'FolderOpen',
    shortDesc: 'Perlengkapan alat tulis kantor, media arsip, dan consumable harian untuk kelancaran operasional kerja.',
    details: [
      'Kertas HVS A4/F4 (70gsm, 75gsm, 80gsm) & Continuous Form',
      'Map, Binder, Ordner & Sistem Pengarsipan',
      'Pulpen, Spidol Board/Permanent, Highlighter, Stapler & Pelubang',
      'Pita Mesin Kasir, Thermal Paper & Label Barcode',
      'Whiteboard, Papan Informasi & Display Kantor'
    ],
    popularSpecs: ['Pilihan Brand Terkemuka (PaperOne, Sinar Dunia, Joyko, Kenko)', 'Penyediaan Rutin Bulanan']
  },
  {
    id: 'engineering-tools',
    title: 'Engineering & Peralatan Teknis',
    category: 'engineering',
    iconName: 'Settings2',
    shortDesc: 'Pengadaan perkakas teknik, safety equipment, measuring tools, dan material proyek teknis industri.',
    details: [
      'Hand Tools & Power Tools Industri (Cordless Drill, Grinder)',
      'Peralatan Ukur & Instrumen Pengujian (Multimeter, Caliper, Laser Distance)',
      'Alat Pelindung Diri (APD/K3): Helm Safety, Rompi, Sepatu Safety, Kacamata',
      'Material Elektrikal, Kabel Industri, Breaker & Aksesoris Panel',
      'Perlengkapan Workshop & Maintenance Mekanikal'
    ],
    popularSpecs: ['Standar SNI / Internasional', 'Sertifikasi Keamanan Kerja (K3)']
  },
  {
    id: 'service-maintenance',
    title: 'Service & Maintenance Perangkat',
    category: 'service',
    iconName: 'Wrench',
    shortDesc: 'Layanan pemeliharaan berkala, troubleshooting perangkat keras, perbaikan printer, dan asistensi teknisi.',
    details: [
      'Perawatan & Pembersihan Rutin Komputer & Laptop',
      'Servis & Refill Maintenance Printer & Penggantian Roller/Head',
      'Pengecekan & Optimasi Jaringan LAN / Wi-Fi Kantor',
      'Instalasi Sistem Operasi Legal, Driver & Konfigurasi Perangkat',
      'Kontrak Pemeliharaan (SLA Berkala untuk Perusahaan)'
    ],
    popularSpecs: ['Teknisi Berpengalaman', 'Response Time Cepat', 'Laporan Kerja Transparan']
  },
  {
    id: 'general-procurement',
    title: 'General Procurement (Palugada)',
    category: 'general',
    iconName: 'PackageCheck',
    shortDesc: 'Layanan custom sourcing untuk barang dan kebutuhan spesifik yang tidak tersedia di katalog umum.',
    details: [
      'Pencarian Barang Sesuai Kerangka Acuan Kerja (KAK) / Spesifikasi Teknis',
      'Pengadaan Furniture Kantor, Meja, Kursi Ergonomis & Filing Cabinet',
      'Peralatan Presentasi, Proyektor, Sound System & Smart TV',
      'Peralatan Kebersihan, Pantry, dan Logistik Kantor',
      'Pengadaan Souvenir Acara & Merchandise Perusahaan'
    ],
    popularSpecs: ['Sourcing Cepat & Fleksibel', 'Legalitas & Pajak Lengkap', 'Term of Payment Sesuai Kesepakatan'],
    badge: 'Paling Fleksibel'
  }
];

export const PLATFORMS: PlatformLink[] = [
  {
    id: 'padi-umkm',
    name: 'PaDi UMKM',
    code: 'B2B BUMN & Korporasi',
    category: 'Marketplace BUMN',
    description:
      'Toko resmi RADCOM di platform Pasar Digital BUMN untuk memudahkan transaksi pengadaan bagi anak usaha BUMN dan korporat.',
    url: 'https://padiumkm.id/store/64522d4732b80a6e395122fa',
    badge: 'Toko Terverifikasi',
    color: 'emerald'
  },
  {
    id: 'siplah-gramedia',
    name: 'SIPLah Gramedia',
    code: 'Mitra Pengadaan Sekolah',
    category: 'Ekosistem Pendidikan',
    description:
      'Penyedia resmi pengadaan barang dan jasa satuan pendidikan menggunakan dana BOS/BOP dengan alur pemesanan mudah dan aman.',
    url: 'https://siplahgramedia.id/main/penyedia/f697a45c9edb4b6da128bb006b7b898e',
    badge: 'Penyedia Resmi SIPLah',
    color: 'blue'
  },
  {
    id: 'lpse-eproc',
    name: 'LPSE / eProc LKPP',
    code: 'Layanan Pengadaan Elektronik',
    category: 'Pemerintah',
    description:
      'Partisipasi dalam lelang elektronik dan pengadaan barang/jasa instansi pemerintah pusat maupun daerah via sistem e-Procurement LKPP.',
    url: 'https://eproc.lkpp.go.id/lpse/index/0/indonesia',
    badge: 'Mitra eProcurement',
    color: 'amber'
  },
  {
    id: 'e-katalog',
    name: 'e-Katalog LKPP',
    code: 'Katalog Elektronik Nasional',
    category: 'Pemerintah',
    description:
      'Referensi belanja daring pemerintah dengan jaminan transparansi harga, spesifikasi jelas, dan kepatuhan regulasi pengadaan negara.',
    url: 'https://e-katalog.lkpp.go.id/',
    badge: 'Standar LKPP',
    color: 'rose'
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'Kementerian & Lembaga Negara', sector: 'Pemerintah' },
  { name: 'Dinas Pendidikan & Satuan Sekolah (BOS/BOP)', sector: 'Pendidikan' },
  { name: 'BUMN Sektor Logistik & Transportasi', sector: 'BUMN' },
  { name: 'Perbankan & Lembaga Keuangan', sector: 'Swasta' },
  { name: 'Rumah Sakit & Fasilitas Kesehatan', sector: 'Pemerintah' },
  { name: 'Perusahaan Kontraktor & Engineering EPC', sector: 'Swasta' },
  { name: 'BUMN Perkebunan & Manufaktur', sector: 'BUMN' },
  { name: 'Universitas & Lembaga Riset', sector: 'Pendidikan' },
  { name: 'Distributor & Perusahaan FMCG', sector: 'Swasta' },
  { name: 'Perusahaan Jasa Konsultasi & Hukum', sector: 'Swasta' }
];

export const PROCUREMENT_BENEFITS = [
  {
    title: 'Satu Pintu (One-Stop Solution)',
    desc: 'Cukup koordinasi dengan satu tim representatif untuk beragam kebutuhan dari IT, alat tulis, perbaikan, hingga perkakas kerja.'
  },
  {
    title: 'Legalitas & Faktur Pajak Lengkap',
    desc: 'Berstatus badan usaha resmi (PT) dengan NPWP dan PKP, siap menerbitkan Faktur Pajak resmi dan kwitansi bermaterai.'
  },
  {
    title: 'Fleksibel Mengikuti KAK & Anggaran',
    desc: 'Dapat menyesuaikan spesifikasi teknis dan ketersediaan stok barang sesuai standar Kerangka Acuan Kerja perusahaan Anda.'
  },
  {
    title: 'Siap Transaksi di Platform Pemerintah & B2B',
    desc: 'Terdaftar aktif di PaDi UMKM, SIPLah Gramedia, dan terbiasa dengan prosedur tata kelola pengadaan LKPP.'
  }
];

export const FAQS = [
  {
    q: 'Apakah RADCOM bisa mencarikan barang yang tidak tertera di katalog?',
    a: 'Bisa. Konsep layanan kami adalah general procurement (palugada). Silakan lampirkan spesifikasi, merek, tipe, atau foto referensi barang yang Anda cari melalui form RFQ atau WhatsApp kami.'
  },
  {
    q: 'Apakah pembelian di RADCOM sudah dilengkapi Faktur Pajak resmi?',
    a: 'Ya, PT RADCOM Solusindo Informatika adalah Pengusaha Kena Pajak (PKP). Semua transaksi resmi dapat diterbitkan Faktur Pajak elektronik (e-Faktur) sesuai ketentuan perpajakan di Indonesia.'
  },
  {
    q: 'Bagaimana alur pemesanan pengadaan untuk sekolah melalui SIPLah?',
    a: 'Untuk satuan pendidikan, Anda dapat langsung mengunjungi toko resmi kami di SIPLah Gramedia atau menghubungi tim kami terlebih dahulu agar tautan paket barang disiapkan sesuai kebutuhan dana BOS/BOP sekolah Anda.'
  },
  {
    q: 'Berapa lama estimasi pengiriman barang?',
    a: 'Untuk area Jabodetabek barang ready stock dapat dikirim dalam 1–2 hari kerja setelah PO/SPK diterbitkan. Untuk barang inden atau luar kota, jadwal pengiriman disesuaikan dengan ketersediaan vendor dan ekspedisi kargo terpercaya.'
  }
];
