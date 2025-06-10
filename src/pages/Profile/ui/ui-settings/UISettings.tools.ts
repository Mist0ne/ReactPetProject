import { ILanguageItem } from './UISettings.types';
import { useTranslation } from 'shared/i18n';
import { languageList } from './UISettings.constants';

export const useLanguageList = (): ILanguageItem[] => {
  const { t } = useTranslation('profilePage');

  return languageList.map((language) => ({
    ...language,
    name: t(`languages.${language.value}`, language.value),
  }));
};
