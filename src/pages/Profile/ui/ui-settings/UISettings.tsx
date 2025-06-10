import React, { useCallback, useState } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  Typography,
  useColorScheme,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MaleIcon from '@mui/icons-material/Male';
import { useTranslation } from 'shared/i18n';
import { ESupportedThemes } from './UISettings.types';
import { useLanguageList } from './UISettings.tools';

export const UISettings = () => {
  const { i18n, t } = useTranslation('profilePage');
  const languageList = useLanguageList();

  const [languageSelectDisabled, setLanguageSelectDisabled] = useState(false);
  const onLanguageChange = useCallback(
    (event: SelectChangeEvent) => {
      setLanguageSelectDisabled(true);
      i18n
        .changeLanguage(event.target.value)
        .then(() => setLanguageSelectDisabled(false));
    },
    [i18n],
  );

  const { mode, setMode } = useColorScheme();
  const onThemeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMode(
        event.target.checked ? ESupportedThemes.dark : ESupportedThemes.light,
      );
    },
    [setMode],
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{t('UISettings')}</Typography>
        <List>
          <ListItem sx={{ gap: 2 }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText>{t('language')}</ListItemText>
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <Select
                disabled={languageSelectDisabled}
                value={i18n.language}
                onChange={onLanguageChange}>
                {languageList.map((language) => (
                  <MenuItem key={language.value} value={language.value}>
                    <Stack direction="row" spacing={1}>
                      {language.icon}
                      <Typography>{language.name}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ gap: 2 }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText>{t('darkTheme')}</ListItemText>
            <Switch
              checked={mode === ESupportedThemes.dark}
              onChange={onThemeChange}
              checkedIcon={<MaleIcon fontSize="small" />}
              icon={<LightModeIcon fontSize="small" />}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
