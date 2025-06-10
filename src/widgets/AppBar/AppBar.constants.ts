import { EPages, PageItem } from './AppBar.types';

// ToDo Вынести это в общие настройки приложения
export const PROJECT_PAGES: PageItem[] = [
  {
    name: EPages.TOURNAMENTS,
    route: '/tournaments',
  },
  {
    name: EPages.ABOUT_US,
    route: '/about',
  },
  {
    name: EPages.PROFILE,
    route: '/profile',
  },
  {
    name: EPages.STATISTICS,
    route: '/statistics',
  },
];
