import { useEffect, useRef, useState } from 'react';

// Matches the gallery-grid CSS: repeat(auto-fill, minmax(240px, 1fr)) with gap: 3px
const MIN_ITEM_WIDTH = 240;
const GAP = 3;

/**
 * Returns how many grid columns fit in the observed element.
 * If fewer than 3 fit, returns 4 so there's always a reasonable initial view.
 */
export function useGridColumns(ref: React.RefObject<HTMLDivElement>): number {
  const [cols, setCols] = useState(5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function compute(width: number) {
      const n = Math.max(1, Math.floor((width + GAP) / (MIN_ITEM_WIDTH + GAP)));
      return n < 3 ? 4 : n;
    }

    const observer = new ResizeObserver(entries => {
      setCols(compute(entries[0].contentRect.width));
    });

    observer.observe(el);
    setCols(compute(el.offsetWidth));
    return () => observer.disconnect();
  }, []);

  return cols;
}
