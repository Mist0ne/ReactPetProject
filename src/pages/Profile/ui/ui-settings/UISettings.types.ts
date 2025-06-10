import { SvgIconComponent } from '@mui/icons-material';
import { ReactElement } from 'react';

export enum ESupportedLanguages {
  RU = 'ru',
  EN = 'en',
}

export enum ESupportedThemes {
  dark = 'dark',
  light = 'light',
}

export interface ILanguageItem {
  icon: ReactElement<SvgIconComponent>;
  name: string;
  value: ESupportedLanguages;
}
