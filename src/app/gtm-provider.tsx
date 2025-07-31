'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtm from '../lib/gtm';

const GTMProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    gtm.pageview(pathname);
  }, [pathname]);

  return null;
};

export default GTMProvider;
