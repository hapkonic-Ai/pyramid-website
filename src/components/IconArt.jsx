import { useState } from 'react';
import { Icon } from './icons';

/**
 * Engraved icon slot: shows the client's generated PNG from public/icons-gen/
 * when it exists, otherwise falls back to the matching inline SVG so the
 * site looks complete before the artwork arrives.
 */
export default function IconArt({ name, fallback, className = '', alt = '' }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return <Icon name={fallback} className={className} />;
  }

  return (
    <img
      src={`/icons-gen/${name}.png`}
      alt={alt}
      loading="lazy"
      onError={() => setImgError(true)}
      className={className}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
