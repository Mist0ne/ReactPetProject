import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Grid2,
  Typography,
} from '@mui/material';
import { UISettings } from './ui-settings';

export const ProfilePage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5">Основная информация</Typography>
                <Typography variant="body2" color="text.secondary">
                  asd
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Stack direction="column" spacing={2}>
            <UISettings />
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">Достижения</Typography>
                  <Typography variant="body2" color="text.secondary">
                    asd
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
  );
};
