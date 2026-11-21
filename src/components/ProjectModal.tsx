import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { PortfolioImage } from './PortfolioImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-primary/65 backdrop-blur-xs p-gutter-md sm:p-gutter-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface border border-accent-border rounded-lg max-w-xl w-full p-gutter-lg sm:p-gutter-xl shadow-xl flex flex-col gap-gutter-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-gutter-md">
          <div>
            <span className="font-label text-label-sm uppercase text-primary block mb-gutter-xs">
              {project.modalTag}
            </span>
            <h3
              id="project-modal-title"
              className="font-headline text-headline-md text-ink-primary text-balance"
            >
              {project.modalTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <PortfolioImage
          src={project.imageUrl}
          alt={project.imageAlt || project.modalTitle}
          fallbackIcon={project.fallbackIcon}
          fallbackLabel={project.fallbackLabel}
          className="w-full h-52 object-cover rounded-sm"
        />

        <div className="flex flex-wrap items-center gap-gutter-sm text-body-sm text-ink-soft border-b border-accent-border pb-gutter-md">
          <span className="font-label text-label-sm uppercase text-ink-primary tabular-nums">
            {project.modalPeriod}
          </span>
          {project.outcomes.map((outcome) => (
            <span key={outcome} className="inline-flex items-center gap-gutter-xs">
              <span aria-hidden="true">·</span>
              <span>{outcome}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-gutter-sm">
          <p className="font-label text-label-sm uppercase text-primary">
            Key Responsibilities &amp; Execution
          </p>
          <ul className="flex flex-col gap-gutter-sm">
            {project.tasks.map((task, idx) => (
              <li
                key={idx}
                className="flex items-start gap-gutter-sm font-body text-body-md text-ink-primary"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
