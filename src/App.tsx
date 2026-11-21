import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CalendarClock,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  FileText,
  GraduationCap,
  Lightbulb,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  Star,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import { LightboxModal } from './components/LightboxModal';
import { PortfolioImage } from './components/PortfolioImage';
import { ProjectModal } from './components/ProjectModal';
import {
  ECOLOGY_PHOTO_URL,
  EVENT_PHOTO_URL,
  GALLERY_ITEMS,
  HERO_PORTRAIT_URL,
  PROJECTS,
  ProjectCategory,
  ProjectItem,
  SKILL_GROUPS,
} from './data/portfolioData';

type FilterOption = 'all' | ProjectCategory;

const FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Event Ops', value: 'Event Ops' },
  { label: 'Community', value: 'Community' },
  { label: 'Innovation', value: 'Innovation' },
  { label: 'Coding', value: 'Coding' },
];

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'QUALIFICATIONS', href: '#qualifications' },
  { label: 'MY WORK', href: '#projects' },
  { label: 'CASE STUDY', href: '#casestudy' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dian.yosephin3@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = 'mailto:dian.yosephin3@gmail.com';
    }
  };

  return (
    <div className="min-h-screen bg-paper text-on-paper font-body">
      {/* Sticky Glassmorphic Header */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-accent-border">
        <div className="max-w-6xl mx-auto px-gutter-lg py-gutter-md flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-headline-md uppercase tracking-tight text-ink-primary whitespace-nowrap shrink-0"
          >
            DIAN YOSEPHIN
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-gutter-lg"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-label-sm uppercase text-ink-soft hover:text-primary hover:underline underline-offset-4 transition-colors duration-180 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-gutter-sm shrink-0">
            <a
              href="https://www.linkedin.com/in/dianyosephin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Dian Yosephin"
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://github.com/dianyosephin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Dian Yosephin"
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-full bg-primary text-on-primary font-label text-label-sm uppercase hover:opacity-90 transition-opacity duration-180 whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Contact</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-accent-border text-ink-primary"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-accent-border bg-paper px-gutter-lg py-gutter-md flex flex-col gap-gutter-sm"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label text-label-sm uppercase text-ink-primary hover:text-primary py-gutter-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* 1. HERO SECTION (Editorial Magazine Cover) */}
        <section className="max-w-6xl mx-auto px-gutter-lg pt-gutter-xl pb-section">
          <div className="flex flex-col items-center text-center mb-gutter-xl">
            <div className="flex items-center gap-gutter-sm mb-gutter-xs">
              <span className="font-hand text-hand-lg text-primary">Dian&apos;s</span>
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
            <h1 className="font-display text-display-xl-mobile md:text-display-xl uppercase text-ink-primary text-balance max-w-5xl">
              PORTFOLIO
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            {/* Left Overlay Text */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-gutter-md bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm">
              <span className="font-hand text-hand-md text-primary">
                Jakarta Barat · ITPLN ♡
              </span>
              <p className="font-body text-body-lg text-ink-primary text-pretty">
                Mahasiswa Teknik Informatika ITPLN dengan passion di bidang Data
                Science, Event Management, &amp; AI Automation.
              </p>
              <div className="flex flex-wrap gap-gutter-sm pt-gutter-xs">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-primary text-on-primary transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span className="font-label text-label-lg">Explore My Work</span>
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Center Magazine Cover Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <div className="relative bg-surface p-gutter-md pb-gutter-xl border border-accent-border rounded-sm shadow-md -rotate-1 max-w-xs w-full">
                <PortfolioImage
                  src={HERO_PORTRAIT_URL}
                  alt="Dian Yosephin — S1 Teknik Informatika ITPLN"
                  fallbackIcon="user"
                  fallbackLabel="Dian Yosephin"
                  className="w-full aspect-[3/4] object-cover rounded-sm"
                />
                <div className="pt-gutter-md flex items-center justify-between">
                  <span className="font-hand text-hand-md text-ink-primary">
                    Dian Yosephin
                  </span>
                  <span className="font-label text-label-sm uppercase text-primary tabular-nums">
                    ED. 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Right Quick Stats Badges */}
            <div className="lg:col-span-4 order-3 flex flex-col gap-gutter-md">
              <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm flex items-center gap-gutter-md">
                <div className="w-10 h-10 rounded-full bg-accent-rust-soft flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-label-sm uppercase text-primary">
                    Academic
                  </p>
                  <p className="font-label text-label-lg text-ink-primary">
                    S1 Teknik Informatika — ITPLN
                  </p>
                </div>
              </div>

              <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm flex items-center gap-gutter-md">
                <div className="w-10 h-10 rounded-full bg-accent-rust-soft flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-label-sm uppercase text-primary">
                    National Award
                  </p>
                  <p className="font-label text-label-lg text-ink-primary">
                    Juara 2 Business Plan ULM
                  </p>
                </div>
              </div>

              <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm flex items-center gap-gutter-md">
                <div className="w-10 h-10 rounded-full bg-accent-rust-soft flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-label text-label-sm uppercase text-primary">
                    Leadership
                  </p>
                  <p className="font-label text-label-lg text-ink-primary">
                    Ex-Koordinator OSIS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner Strip: Marquee */}
        <div className="border-y border-accent-border bg-surface-alt overflow-hidden py-gutter-md">
          <div className="marquee-track font-label text-label-lg uppercase text-ink-primary tracking-wider">
            <span className="px-gutter-lg whitespace-nowrap">
              DATA SCIENCE <span className="text-primary">✦</span> SOFTWARE ENGINEERING{' '}
              <span className="text-primary">✦</span> EVENT MANAGEMENT{' '}
              <span className="text-primary">✦</span> PUBLIC SPEAKING{' '}
              <span className="text-primary">✦</span> AI AGENT AUTOMATION{' '}
              <span className="text-primary">✦</span>
            </span>
            <span className="px-gutter-lg whitespace-nowrap" aria-hidden="true">
              DATA SCIENCE <span className="text-primary">✦</span> SOFTWARE ENGINEERING{' '}
              <span className="text-primary">✦</span> EVENT MANAGEMENT{' '}
              <span className="text-primary">✦</span> PUBLIC SPEAKING{' '}
              <span className="text-primary">✦</span> AI AGENT AUTOMATION{' '}
              <span className="text-primary">✦</span>
            </span>
          </div>
        </div>

        {/* 2. SECTION: WHO AM I (#about) */}
        <section id="about" className="max-w-6xl mx-auto px-gutter-lg py-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
            {/* Left Column: Editorial Biography */}
            <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
              <div>
                <span className="font-hand text-hand-lg text-primary">
                  get to know me ♡
                </span>
                <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
                  WHO AM I
                </h2>
              </div>

              <article className="bg-surface border border-accent-border rounded-md p-gutter-xl shadow-sm flex flex-col gap-gutter-md">
                <p className="font-body text-body-md text-ink-primary text-pretty">
                  Halo! Saya Dian Yosephin, mahasiswa S1 Teknik Informatika di Institut
                  Teknologi PLN (ITPLN). Berdomisili di Jakarta Barat, saya memiliki
                  ketertarikan tinggi dalam kegiatan organisasi, kepanitiaan acara,
                  serta pengembangan teknologi informasi.
                </p>
                <p className="font-body text-body-md text-ink-soft text-pretty">
                  Berpengalaman memimpin divisi OSIS, mengelola event sekolah, hingga
                  memenangkan kompetisi Business Plan nasional. Saya selalu bersemangat
                  mempelajari hal baru dalam Data Science dan Software Engineering.
                </p>
                <div className="bg-surface-alt border border-accent-border rounded-sm p-gutter-md rotate-1 self-start">
                  <p className="font-hand text-hand-md text-primary">
                    &ldquo;Creative Mind. Strategic Thinker. Big on Results. ♡&rdquo;
                  </p>
                </div>
              </article>
            </div>

            {/* Right Column: Education & Journey */}
            <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
              <div>
                <span className="font-hand text-hand-lg text-primary">
                  academic journey ✦
                </span>
                <h2 className="font-display text-display-lg-mobile md:text-headline-lg uppercase text-ink-primary">
                  EDUCATION &amp; JOURNEY
                </h2>
              </div>

              <div className="flex flex-col gap-gutter-md">
                <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
                  <div className="flex flex-wrap items-center justify-between gap-gutter-sm">
                    <h3 className="font-title text-title-md text-ink-primary">
                      Institut Teknologi PLN (ITPLN)
                    </h3>
                    <span className="font-label text-label-sm text-primary tabular-nums">
                      2026 – Sekarang
                    </span>
                  </div>
                  <p className="font-label text-label-lg text-primary">
                    S1 Teknik Informatika
                  </p>
                  <p className="font-body text-body-md text-ink-soft">
                    Fokus pada Data Science, Software Engineering, dan Dasar Pemrograman
                    (C++).
                  </p>
                </article>

                <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
                  <div className="flex flex-wrap items-center justify-between gap-gutter-sm">
                    <h3 className="font-title text-title-md text-ink-primary">
                      SMA Santo Thomas 3 Medan
                    </h3>
                    <span className="font-label text-label-sm text-ink-soft tabular-nums">
                      2023 – 2026
                    </span>
                  </div>
                  <p className="font-label text-label-lg text-primary tabular-nums">
                    Jurusan IPA / Science · Nilai Rata-Rata: 94.39
                  </p>
                  <p className="font-body text-body-md text-ink-soft">
                    Lulus dengan predikat Sangat Memuaskan (94.39). Aktif sebagai
                    Koordinator OSIS Divisi Lingkungan Hidup (2025 – 2026) &amp; Anggota
                    Divisi Kewirausahaan (2024 – 2025).
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION: QUALIFICATIONS (#qualifications) */}
        <section
          id="qualifications"
          className="max-w-6xl mx-auto px-gutter-lg py-section border-t border-accent-border"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md mb-gutter-xl">
            <div>
              <span className="font-hand text-hand-lg text-primary">
                core competencies ✦
              </span>
              <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
                QUALIFICATIONS
              </h2>
            </div>
            <div className="bg-surface-alt border border-accent-border rounded-md px-gutter-lg py-gutter-md -rotate-1 max-w-sm">
              <p className="font-hand text-hand-md text-primary">
                Good Code &amp; Clear Communication Builds Real Connections ♡
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
              <Code2 className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="font-title text-title-md text-ink-primary">
                Programming &amp; Dev
              </h3>
              <p className="font-body text-body-md text-ink-soft">
                Dasar C++, HTML/CSS, &amp; Logika Pemrograman.
              </p>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
              <CalendarClock className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="font-title text-title-md text-ink-primary">
                Event &amp; Rundown Lead
              </h3>
              <p className="font-body text-body-md text-ink-soft">
                Penyusunan rundown, koordinasi pemateri, &amp; alur eksekusi acara.
              </p>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
              <Megaphone className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="font-title text-title-md text-ink-primary">
                Leadership &amp; Comm.
              </h3>
              <p className="font-body text-body-md text-ink-soft">
                Memimpin tim divisi OSIS, koordinasi ekologi &amp; bazar.
              </p>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm">
              <Lightbulb className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="font-title text-title-md text-ink-primary">
                Business Planning
              </h3>
              <p className="font-body text-body-md text-ink-soft">
                Perencanaan model bisnis &amp; strategi inovasi (Juara 2 ULM).
              </p>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-sm md:col-span-2 lg:col-span-2">
              <BarChart3 className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="font-title text-title-md text-ink-primary">
                Data &amp; Productivity Tools
              </h3>
              <p className="font-body text-body-md text-ink-soft">
                Microsoft Word, Excel (Pengolahan Data &amp; Analisis), &amp; PowerPoint
                untuk presentasi eksekutif.
              </p>
            </article>
          </div>
        </section>

        {/* 4. SECTION: MY WORK INCLUDES (#projects) */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-gutter-lg py-section border-t border-accent-border"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md mb-gutter-xl">
            <div>
              <span className="font-hand text-hand-lg text-primary">
                things I&apos;ve executed ✦
              </span>
              <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
                MY WORK INCLUDES
              </h2>
            </div>

            <div
              className="flex flex-wrap items-center gap-gutter-sm"
              role="group"
              aria-label="Filter proyek berdasarkan kategori"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeFilter === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setActiveFilter(option.value)}
                    aria-pressed={isActive}
                    className={`px-gutter-md py-gutter-sm rounded-full font-label text-label-sm uppercase transition-colors duration-180 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface border border-accent-border text-ink-primary hover:border-accent-rust'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg items-stretch">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col justify-between gap-gutter-md transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-gutter-md">
                  <PortfolioImage
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    fallbackIcon={project.fallbackIcon}
                    fallbackLabel={project.fallbackLabel}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                  <div className="flex flex-col gap-gutter-xs">
                    <span className="font-label text-label-sm uppercase text-primary">
                      {project.categoryDisplay}
                    </span>
                    <h3 className="font-title text-title-md text-ink-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-body text-body-md text-ink-soft">
                    {project.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="pt-gutter-sm border-t border-accent-border flex items-center justify-between text-primary hover:opacity-80 transition-opacity duration-180 cursor-pointer"
                >
                  <span className="font-label text-label-lg">VIEW DETAILS</span>
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* 5. SECTION: CASE STUDY SPOTLIGHT (#casestudy) */}
        <section
          id="casestudy"
          className="bg-surface-alt border-y border-accent-border py-section"
        >
          <div className="max-w-6xl mx-auto px-gutter-lg">
            <div className="mb-gutter-xl">
              <span className="font-hand text-hand-lg text-primary">
                From Idea to Execution ♡
              </span>
              <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
                CASE STUDY SPOTLIGHT
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
              {/* Left Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
                <div>
                  <p className="font-label text-label-lg uppercase text-primary mb-gutter-xs tabular-nums">
                    KOORDINATOR DIVISI LINGKUNGAN HIDUP OSIS (JANUARI 2025 – JANUARI 2026)
                  </p>
                  <p className="font-body text-body-lg text-ink-primary text-pretty">
                    Memimpin inisiatif keberlanjutan lingkungan dan program kebersihan
                    berkala di SMA Santo Thomas 3 Medan.
                  </p>
                </div>

                <div className="flex flex-col gap-gutter-sm bg-surface border border-accent-border rounded-md p-gutter-lg">
                  <div className="flex items-start gap-gutter-sm">
                    <CheckCircle2
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="font-body text-body-md text-ink-primary">
                      <strong>Pengolahan Sampah Organik:</strong> Mengubah limbah organik
                      sekolah menjadi pupuk kompos secara berkelanjutan.
                    </p>
                  </div>
                  <div className="flex items-start gap-gutter-sm">
                    <CheckCircle2
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="font-body text-body-md text-ink-primary">
                      <strong>Hari Pangan Sedunia &amp; Hari Ekologi:</strong>{' '}
                      Mengkoordinasikan kampanye kesadaran lingkungan menyeluruh.
                    </p>
                  </div>
                  <div className="flex items-start gap-gutter-sm">
                    <CheckCircle2
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="font-body text-body-md text-ink-primary">
                      <strong>Program Kebersihan Bulanan:</strong> Menggerakkan seluruh
                      siswa &amp; anggota divisi secara konsisten setiap bulan.
                    </p>
                  </div>
                </div>

                {/* 3 Impact Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
                  <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm">
                    <p className="font-display text-headline-lg text-primary tabular-nums">
                      100%
                    </p>
                    <p className="font-body text-body-sm text-ink-soft">
                      Program Kebersihan Terlaksana Rutin
                    </p>
                  </div>
                  <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm">
                    <p className="font-display text-headline-lg text-primary tabular-nums">
                      2 Events
                    </p>
                    <p className="font-body text-body-sm text-ink-soft">
                      Hari Pangan &amp; Hari Ekologi Successful
                    </p>
                  </div>
                  <div className="bg-surface border border-accent-border rounded-md p-gutter-md shadow-sm">
                    <p className="font-display text-headline-lg text-primary">Compost</p>
                    <p className="font-body text-body-sm text-ink-soft">
                      Limbah Organik Didaur Ulang
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Polaroid Showcase */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-gutter-lg">
                <figure className="bg-surface p-gutter-md pb-gutter-lg border border-accent-border rounded-sm shadow-md rotate-1">
                  <PortfolioImage
                    src={ECOLOGY_PHOTO_URL}
                    alt="Program Kompos OSIS SMA Santo Thomas 3 Medan"
                    fallbackIcon="leaf"
                    className="w-full h-52 object-cover rounded-sm"
                  />
                  <figcaption className="pt-gutter-sm font-hand text-hand-md text-ink-primary">
                    Organic Waste to Compost Project ♡
                  </figcaption>
                </figure>
                <figure className="bg-surface p-gutter-md pb-gutter-lg border border-accent-border rounded-sm shadow-md -rotate-2">
                  <PortfolioImage
                    src={EVENT_PHOTO_URL}
                    alt="Koordinasi Acara Sekolah"
                    fallbackIcon="event"
                    className="w-full h-44 object-cover rounded-sm"
                  />
                  <figcaption className="pt-gutter-sm font-hand text-hand-md text-ink-primary">
                    Live Rundown &amp; Team Coordination ✦
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION: SKILLS & TOOLKITS (#skills) */}
        <section id="skills" className="max-w-6xl mx-auto px-gutter-lg py-section">
          <div className="mb-gutter-xl">
            <span className="font-hand text-hand-lg text-primary">
              tools of the trade ✦
            </span>
            <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
              SKILLS &amp; TOOLKITS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex flex-col gap-gutter-md"
              >
                <h3 className="font-label text-label-lg uppercase text-primary border-b border-accent-border pb-gutter-sm">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-gutter-sm">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-gutter-md py-gutter-sm rounded-full bg-surface-alt border border-accent-border font-body text-body-sm text-ink-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. SECTION: ACHIEVEMENTS (#achievements) */}
        <section
          id="achievements"
          className="max-w-6xl mx-auto px-gutter-lg py-section border-t border-accent-border"
        >
          <div className="mb-gutter-xl">
            <span className="font-hand text-hand-lg text-primary">
              proud moments ✦
            </span>
            <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
              HONORS &amp; ACHIEVEMENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
            <article className="bg-surface border border-accent-rust rounded-md p-gutter-lg shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-accent-rust-soft flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-title text-title-md text-ink-primary mb-gutter-xs">
                  Juara 2 Business Plan Competition — ULM
                </h3>
                <p className="font-body text-body-md text-ink-soft">
                  Mempresentasikan ide bisnis inovatif berbasis analisis pasar dengan
                  strategi eksekusi komprehensif.
                </p>
              </div>
            </article>

            <article className="bg-surface border border-accent-rust rounded-md p-gutter-lg shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-accent-rust-soft flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-title text-title-md text-ink-primary mb-gutter-xs tabular-nums">
                  Nilai Rata-Rata Kelulusan 94.39 — Medan
                </h3>
                <p className="font-body text-body-md text-ink-soft">
                  Pencapaian akademik unggul dan konsisten di Jurusan IPA SMA Santo
                  Thomas 3 Medan.
                </p>
              </div>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-title text-title-md text-ink-primary mb-gutter-xs">
                  Webinar &ldquo;Multimedia: The Human Touch&rdquo;
                </h3>
                <p className="font-body text-body-md text-ink-soft">
                  Eksplorasi prinsip multimedia dan interaksi manusia-komputer yang
                  manusiawi di era digital.
                </p>
              </div>
            </article>

            <article className="bg-surface border border-accent-border rounded-md p-gutter-lg shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-title text-title-md text-ink-primary mb-gutter-xs tabular-nums">
                  Panitia MPLS (2025) &amp; Syukuran Natal (2026)
                </h3>
                <p className="font-body text-body-md text-ink-soft">
                  Sukses mengawal rundown dan kelancaran alur acara sekolah skala besar
                  pada 14–15 Juli 2025 dan 13 Januari 2026.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 8. SECTION: ACTIVITY GALLERY (#gallery) */}
        <section
          id="gallery"
          className="max-w-6xl mx-auto px-gutter-lg py-section border-t border-accent-border"
        >
          <div className="mb-gutter-xl">
            <span className="font-hand text-hand-lg text-primary">
              Short form. Big impact. ♡
            </span>
            <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary">
              BEHIND THE SCENES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-lg">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`text-left bg-surface p-gutter-md pb-gutter-lg border border-accent-border rounded-sm shadow-md ${item.tiltClass} transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
              >
                <PortfolioImage
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-48 object-cover rounded-sm"
                />
                <p className="pt-gutter-md font-hand text-hand-md text-ink-primary">
                  {item.caption}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 9. SECTION: LET'S CONNECT (#contact) */}
        <section id="contact" className="max-w-5xl mx-auto px-gutter-lg py-section">
          <div className="bg-surface border-2 border-ink-primary rounded-xl p-gutter-xl md:p-12 shadow-md text-center flex flex-col items-center gap-gutter-lg">
            <span className="font-hand text-hand-lg text-primary">
              Let&apos;s create something amazing together ♡
            </span>
            <h2 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-ink-primary text-balance">
              WANT TO COLLABORATE OR TALK TECH?
            </h2>
            <p className="font-body text-body-lg text-ink-soft max-w-2xl text-pretty">
              Saya terbuka untuk diskusi seputar kepanitiaan, proyek software
              engineering, Data Science, maupun kolaborasi organisasi.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-gutter-md pt-gutter-sm">
              <a
                href="mailto:dian.yosephin3@gmail.com"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-primary text-on-primary transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="font-label text-label-lg">
                  dian.yosephin3@gmail.com
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-surface-alt text-ink-primary border border-accent-border transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-label text-label-lg text-primary">
                      Email Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-label text-label-lg">Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="https://wa.me/6285260734138"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-surface text-ink-primary border border-accent-border transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="font-label text-label-lg tabular-nums">
                  0852-6073-4138
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dianyosephin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-surface text-ink-primary border border-accent-border transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="font-label text-label-lg">
                  linkedin.com/in/dianyosephin
                </span>
              </a>

              <a
                href="https://github.com/dianyosephin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-full bg-surface text-ink-primary border border-accent-border transition-transform duration-180 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Code2 className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="font-label text-label-lg">
                  github.com/dianyosephin
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-accent-border bg-surface-alt">
        <div className="max-w-6xl mx-auto px-gutter-lg py-gutter-lg flex flex-col sm:flex-row items-center justify-between gap-gutter-sm text-center sm:text-left">
          <p className="font-body text-body-sm text-ink-soft">
            © 2026 Dian Yosephin. All rights reserved.
          </p>
          <p className="font-body text-body-sm text-ink-soft">
            Designed with Warm Editorial Style ✦ S1 Teknik Informatika ITPLN
          </p>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <LightboxModal
        items={GALLERY_ITEMS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}
