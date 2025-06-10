export enum EPages {
  TOURNAMENTS = 'tournaments',
  ABOUT_US = 'aboutUs',
  PROFILE = 'profile',
  STATISTICS = 'statistics',
}

// ToDo подумать над тем, как сделать route через функцию в контексте приложения
export interface PageItem {
  name: EPages;
  route: string;
}
