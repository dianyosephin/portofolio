import { useState } from 'react';
import { Bot, Calendar, Code2, Leaf, Store, Trophy, User } from 'lucide-react';

interface PortfolioImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: 'storefront' | 'bot' | 'event' | 'leaf' | 'trophy' | 'code' | 'user';
  fallbackLabel?: string;
}

export function PortfolioImage({
  src,
  alt,
  className = '',
  fallbackIcon = 'user',
  fallbackLabel,
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  const renderIcon = () => {
    const iconProps = { className: 'w-12 h-12 text-primary', strokeWidth: 1.75 };
    switch (fallbackIcon) {
      case 'storefront':
        return <Store {...iconProps} />;
      case 'bot':
        return <Bot {...iconProps} />;
      case 'event':
        return <Calendar {...iconProps} />;
      case 'leaf':
        return <Leaf {...iconProps} />;
      case 'trophy':
        return <Trophy {...iconProps} />;
      case 'code':
        return <Code2 {...iconProps} />;
      default:
        return <User {...iconProps} />;
    }
  };

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-surface-alt border border-accent-border flex flex-col items-center justify-center gap-gutter-sm px-gutter-md text-center ${className}`}
      >
        {renderIcon()}
        <span className="font-hand text-hand-md text-ink-soft leading-tight">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
