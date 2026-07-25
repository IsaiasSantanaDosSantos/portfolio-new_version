import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const media = window.matchMedia(query);

  const [matches, setMatches] = useState(media.matches);

  useEffect(() => {
    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [media]);

  return matches;
}
