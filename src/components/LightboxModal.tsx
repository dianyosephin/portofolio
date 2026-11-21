import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryItem } from '../data/portfolioData';
import { PortfolioImage } from './PortfolioImage';

interface LightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % items.length);
      }
      if (event.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + items.length) % items.length);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, items.length, onClose, onSelectIndex]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const activeItem = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-primary/80 backdrop-blur-xs p-gutter-md sm:p-gutter-lg"
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.caption}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface border border-accent-border rounded-md max-w-2xl w-full p-gutter-md sm:p-gutter-lg shadow-xl flex flex-col gap-gutter-md">
        <div className="flex items-center justify-between gap-gutter-md">
          <span className="font-label text-label-sm uppercase text-ink-soft tabular-nums">
            Moment {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup galeri"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <PortfolioImage
          src={activeItem.imageUrl}
          alt={activeItem.alt}
          className="w-full max-h-[60vh] object-cover rounded-sm"
        />

        <div className="flex items-center justify-between gap-gutter-md pt-gutter-xs">
          <div>
            <p className="font-hand text-hand-lg text-ink-primary leading-tight">
              {activeItem.caption}
            </p>
            <p className="font-body text-body-sm text-ink-soft">
              {activeItem.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-gutter-sm shrink-0">
            <button
              type="button"
              onClick={() => onSelectIndex((activeIndex - 1 + items.length) % items.length)}
              aria-label="Foto sebelumnya"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onSelectIndex((activeIndex + 1) % items.length)}
              aria-label="Foto berikutnya"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-accent-border text-ink-primary hover:border-accent-rust hover:text-primary transition-colors duration-180"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
