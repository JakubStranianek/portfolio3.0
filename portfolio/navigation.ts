import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['sk', 'en'] as const;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/projekty': '/projekty',
   
    // If locales use different paths, you can
    // specify each external path per locale.
    '/kontakt': {
      sk: '/kontakt',
      en: '/contact'
    },
   
    // Dynamic params are supported via square brackets
    '/news/[articleSlug]-[articleId]': {
      sk: '/news/[articleSlug]-[articleId]',
      en: '/neuigkeiten/[articleSlug]-[articleId]'
    },
   
    // Also (optional) catch-all segments are supported
    '/categories/[...slug]': {
      sk: '/categories/[...slug]',
      en: '/kategorien/[...slug]'
    }
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, pathnames});