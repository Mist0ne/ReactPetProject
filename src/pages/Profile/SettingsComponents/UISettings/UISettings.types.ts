import { SvgIconComponent } from '@mui/icons-material';
import { ESupportedLanguages } from 'shared';
import { ReactElement } from 'react';

export enum ESupportedThemes {
  dark = 'dark',
  light = 'light',
}

export interface ILanguageItem {
  icon: ReactElement<SvgIconComponent>;
  name: string;
  value: ESupportedLanguages;
}
