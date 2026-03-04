'use client';

import { useEffect, useState } from 'react';

/**
 * Prevents hydration mismatches with Zustand persist + sessionStorage.
 * Returns false during SSR and initial client render, true after hydration.
 * Wrap client-side store-consuming UI with this guard.
 */
export function useHasHydrated(): boolean {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
}
