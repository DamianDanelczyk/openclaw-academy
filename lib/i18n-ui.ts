import { i18n } from '@/lib/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
  },
  es: {
    displayName: 'Espanol',
    search: 'Buscar documentos',
  },
  pt: {
    displayName: 'Portugues',
    search: 'Pesquisar documentos',
  },
  fr: {
    displayName: 'Francais',
    search: 'Rechercher des documents',
  },
  de: {
    displayName: 'Deutsch',
    search: 'Dokumente durchsuchen',
  },
  pl: {
    displayName: 'Polski',
    search: 'Szukaj dokumentow',
  },
});
