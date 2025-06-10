import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#496892',
        },
        secondary: {
          main: '#6293c1',
        },
        info: {
          main: '#1677aa',
        },
      },
    },
    light: true,
  },
});
