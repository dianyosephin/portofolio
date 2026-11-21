export type ProjectCategory = 'Event Ops' | 'Community' | 'Innovation' | 'Coding';

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  categoryDisplay: string;
  title: string;
  summary: string;
  imageUrl?: string;
  imageAlt?: string;
  fallbackIcon: 'storefront' | 'bot' | 'event' | 'leaf' | 'trophy' | 'code';
  fallbackLabel?: string;
  modalTag: string;
  modalTitle: string;
  modalPeriod: string;
  tasks: string[];
  outcomes: string[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  caption: string;
  subtitle: string;
  tiltClass: string;
}

export const HERO_PORTRAIT_URL =
  '/src/assets/images/regenerated_image_1795246343262.jpg';

export const EVENT_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrD5vqwlwyy4Ga7H2EtNO7Ey2i1JZy73E2vcCcJ42ZR5fK1AbkvmOEUUumIMyx0IRN5Czto70uHtvD8N4QD4M_fDlw-UVtdwjXKErZpk3IH1XmBSr0Xi7flZTxCJ72ihxIGhA4LYmlFQlekvfu_6N15nUA_C0Ky-XDpVoWE2bSm2HwghmJyMBqYWIHJTJzuTUPfYoW-u6NxP9tG7FemwZWA9Eo0xCOlmN_kTS5lJVChrnG4bT9_qhU2YBg';

export const ECOLOGY_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrC1dFNNmexdHgaueWsOQCRlhopCiArUXHdWkObIVMxUZ-kA9WzDVOI0z_RqgDb301Sm0aBQhSCA6r9taR_d_Yx9zkHAsuoOVwiBSdMe073SlbW8oMujXLHpLBeBnHCvRCL-scdPg4bcF35oMHvQ3z7dw9vKpiLyhDcqRtSztsG1KXO3sPcFJXe0okup-HQykbYei9EAculuUnP6bO8EVlHsGigjo76RS0Qj_AfY3MWi4D5PzONoT-TAPg';

export const BUSINESS_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrAKXlOQQ9rzA_1GCRbuydR14HYwP7qf-s4qSR35p5AOxe23jNPqK6sL3-fp_wZ2bMu0ZggbtA7EycELx7R34wDvhcXq4ZSnAL4EuOfqtDufhHHk2Q6zP3VsHlzhlpjTuPdOqSdnXhrU753TOj5DiALYBfus0Q1gTKHRpkQa4Ox8HeouDoMf1QdbIcx5j7zpf-IXlCPtEIv-f2UQfXu4BhQozl6TwxgVZtiPzhQG2v5ySJjMlYxril4wSRi5cw';

export const CPP_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrC-oiiSleAhLWUsDzx9ueuUqzanoMR3ehL5ZwAtCRRxNEFzWhdw4vQcEA9hc9S9B1HvZ6EtKYcfWRwaOmrq5oKhXu5mm1NlMmBYzEABne-Yl72LVvZtQ4uCvn2V8YsJFzWF6nWrxhM6LOKSnraieQvlZA4AKnB-k4jf2Pi1myqlMGd9EgKcFsuexcugW-g3KfaEBFvFtumFxuxnN3VQ8vZu9P8v8Jt4D5z3AxB272xdhfUPKP2NusWt5uIIvkU';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'event',
    category: 'Event Ops',
    categoryDisplay: 'Event Ops',
    title: 'EVENT LEADERSHIP',
    summary:
      'Event MPLS (14–15 Juli 2025) & Syukuran Natal (13 Jan 2026) SMA Santo Thomas 3. Rundown management, pemateri prep, & live coordination.',
    imageUrl: EVENT_PHOTO_URL,
    imageAlt: 'Event MPLS 2025 & Syukuran Natal 2026',
    fallbackIcon: 'event',
    modalTag: 'Event Ops · SMA Santo Thomas 3 Medan',
    modalTitle: 'Panitia Acara MPLS 2025/2026 & Syukuran Natal',
    modalPeriod: '14–15 Juli 2025 & 13 Januari 2026',
    tasks: [
      'Menyusun rundown acara dan mengatur alur rangkaian kegiatan secara presisi.',
      'Memastikan pemateri, pengisi acara, dan pemberi kata sambutan siap sesuai jadwal.',
      'Memantau jalannya setiap sesi dan penampilan kelas agar berlangsung tertib.',
    ],
    outcomes: ['2 Acara Besar Sekolah', 'Koordinasi Lintas Panitia & Guru'],
  },
  {
    id: 'ecology',
    category: 'Community',
    categoryDisplay: 'Community',
    title: 'ECOLOGY & COMPOST',
    summary:
      'Hari Pangan Sedunia & Program Kompos OSIS. Pengolahan sampah organik menjadi pupuk & peringatan Hari Ekologi.',
    imageUrl: ECOLOGY_PHOTO_URL,
    imageAlt: 'Hari Pangan & Program Kompos OSIS',
    fallbackIcon: 'leaf',
    modalTag: 'Community · OSIS Divisi Lingkungan Hidup',
    modalTitle: 'Program Kompos, Hari Pangan Sedunia & Hari Ekologi',
    modalPeriod: 'Januari 2025 – Januari 2026',
    tasks: [
      'Memimpin pelaksanaan peringatan Hari Pangan Sedunia dan kegiatan Hari Ekologi.',
      'Mengkoordinasikan program kebersihan rutin setiap bulan di lingkungan sekolah.',
      'Melaksanakan pengolahan sampah organik menjadi pupuk kompos berkelanjutan.',
    ],
    outcomes: ['100% Program Bulanan Terlaksana', 'Daur Ulang Limbah Organik Sekolah'],
  },
  {
    id: 'business',
    category: 'Innovation',
    categoryDisplay: 'Innovation',
    title: 'BUSINESS PLAN ULM',
    summary:
      'Juara 2 Universitas Lambung Mangkurat. Perancangan strategi model bisnis inovatif berbasis analisis pasar & presentasi pitching.',
    imageUrl: BUSINESS_PHOTO_URL,
    imageAlt: 'Juara 2 Business Plan Competition ULM',
    fallbackIcon: 'trophy',
    modalTag: 'Innovation · Universitas Lambung Mangkurat',
    modalTitle: 'Juara 2 Business Plan Competition',
    modalPeriod: 'Kompetisi Nasional ULM',
    tasks: [
      'Merancang model bisnis inovatif berbasis analisis pasar dan kelayakan finansial.',
      'Menyusun strategi eksekusi komprehensif dan mempresentasikan pitch deck di hadapan dewan juri.',
    ],
    outcomes: ['Juara 2 Tingkat Nasional', 'Validasi Model Bisnis & Pitching'],
  },
  {
    id: 'bazar',
    category: 'Event Ops',
    categoryDisplay: 'Management',
    title: 'OSIS BAZAR OPS',
    summary:
      'Anggota Divisi Kewirausahaan OSIS (2024–2025). Pengadaan hadiah lomba & manajemen operasional bazar sekolah.',
    fallbackIcon: 'storefront',
    fallbackLabel: 'Divisi Kewirausahaan',
    modalTag: 'Management · OSIS Divisi Kewirausahaan',
    modalTitle: 'Operasional Bazar Sekolah & Pengadaan Hadiah',
    modalPeriod: 'Januari 2024 – Januari 2025',
    tasks: [
      'Mengelola pelaksanaan bazar pada berbagai kegiatan resmi sekolah.',
      'Berpartisipasi aktif dalam perencanaan dan pengadaan hadiah untuk perlombaan sekolah.',
    ],
    outcomes: ['Manajemen Logistik & Tenant Bazar', 'Pengadaan Hadiah Lomba Sekolah'],
  },
  {
    id: 'cpp',
    category: 'Coding',
    categoryDisplay: 'Coding',
    title: 'C++ & ALGORITHMS',
    summary:
      'ITPLN Academic Projects. Pengantar struktur data, logika algoritma, & implementasi pemrograman C++.',
    imageUrl: CPP_PHOTO_URL,
    imageAlt: 'C++ & Algorithm Projects ITPLN',
    fallbackIcon: 'code',
    modalTag: 'Coding · S1 Teknik Informatika ITPLN',
    modalTitle: 'C++ & Algorithm Academic Projects',
    modalPeriod: '2026 – Sekarang',
    tasks: [
      'Implementasi dasar pemrograman C++, struktur data, dan pemecahan masalah algoritmik.',
      'Penerapan logika pemrograman terstruktur dalam tugas kuliah Teknik Informatika.',
    ],
    outcomes: ['Fondasi Algoritma & Struktur Data', 'Problem Solving Berbasis Kode'],
  },
  {
    id: 'ai',
    category: 'Coding',
    categoryDisplay: 'Technology',
    title: 'AI & MULTIMEDIA',
    summary:
      'Webinar "Multimedia: The Human Touch" & eksplorasi AI agent automation serta interaksi manusia-komputer.',
    fallbackIcon: 'bot',
    fallbackLabel: 'AI & Human Touch',
    modalTag: 'Technology · Multimedia & AI Automation',
    modalTitle: 'AI Tools Exploration & Multimedia Webinar',
    modalPeriod: 'Self-Learning & Webinar Nasional',
    tasks: [
      'Mengikuti Webinar Nasional "Multimedia: The Human Touch" tentang interaksi manusia-komputer.',
      'Mengeksplorasi alur kerja AI Agent Automation dan Data Science.',
    ],
    outcomes: ['Eksplorasi Workflow AI Agent', 'Human-Centered Multimedia Insights'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: EVENT_PHOTO_URL,
    alt: 'Event Organization MPLS 2025 & Natal 2026',
    caption: 'MPLS 2025 & Natal 2026 Lead',
    subtitle: 'Rundown & koordinasi acara sekolah · 2025–2026',
    tiltClass: '-rotate-2',
  },
  {
    id: 'g2',
    imageUrl: ECOLOGY_PHOTO_URL,
    alt: 'OSIS Eco & Compost Project',
    caption: 'OSIS Eco & Compost Project',
    subtitle: 'Divisi Lingkungan Hidup · SMA Santo Thomas 3 Medan',
    tiltClass: 'rotate-1',
  },
  {
    id: 'g3',
    imageUrl: BUSINESS_PHOTO_URL,
    alt: 'Business Plan Pitching ULM',
    caption: 'Business Plan Pitching ULM',
    subtitle: 'Juara 2 Kompetisi Nasional · Universitas Lambung Mangkurat',
    tiltClass: '-rotate-1',
  },
  {
    id: 'g4',
    imageUrl: CPP_PHOTO_URL,
    alt: 'Campus Life at ITPLN Jakarta',
    caption: 'Campus Life at ITPLN Jakarta',
    subtitle: 'S1 Teknik Informatika · Data Science & C++',
    tiltClass: 'rotate-2',
  },
];

export const SKILL_GROUPS = [
  {
    title: 'PROGRAMMING & DEV',
    items: ['C++ (Logic Fundamentals)', 'HTML5 & CSS3', 'Git / GitHub'],
  },
  {
    title: 'PRODUCTIVITY & DATA',
    items: ['Microsoft Excel (Data Analysis)', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
  {
    title: 'SOFT SKILLS & LEADERSHIP',
    items: [
      'Teamwork & Collaboration',
      'Public Speaking',
      'Time Management',
      'Problem Solving',
    ],
  },
];
