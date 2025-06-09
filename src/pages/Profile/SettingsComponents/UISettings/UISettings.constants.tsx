import { ILanguageItem } from './UISettings.types';
import { ESupportedLanguages } from 'shared';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react';

export const languageList: Omit<ILanguageItem, 'name'>[] = [
  {
    icon: <FreeBreakfastIcon />,
    value: ESupportedLanguages.EN,
  },
  {
    icon: <PetsIcon />,
    value: ESupportedLanguages.RU,
  },
];
