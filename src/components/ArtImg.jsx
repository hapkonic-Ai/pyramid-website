import { useState } from 'react';

/**
 * Art-first image: shows `art` if it exists, falls back to `src` otherwise.
 * Lets generated classical artworks drop in later without code changes.
 */
export default function ArtImg({ art, src, className = '', alt = '', ...rest }) {
  const [current, setCurrent] = useState(art);
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      className={`paint-warm ${className}`}
      onError={() => {
        if (current !== src) setCurrent(src);
      }}
      {...rest}
    />
  );
}
