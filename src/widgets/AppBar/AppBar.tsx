import * as React from 'react';
import {
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Toolbar,
  Box,
  Container,
  Button,
  Tooltip,
  AppBar as MuiAppBar,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from 'shared/i18n';
import { EPages } from './AppBar.types';
import { Link } from 'react-router-dom';
import { PROJECT_PAGES } from './AppBar.constants';

export const AppBar = () => {
  const { t } = useTranslation('translation');
  // ToDo переделать на enum и вынести текст в i18n
  const pages = [EPages.TOURNAMENTS, EPages.ABOUT_US];
  const settings = ['Профиль', 'Статистика', 'Выход'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EmojiEventsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
            }}>
            EOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}>
              {PROJECT_PAGES.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.route}>
                  {t(`pages.${page.name}`)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <EmojiEventsIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            EOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PROJECT_PAGES.map((page) => (
              <Button
                component={Link}
                key={page.name}
                to={page.route}
                onClick={handleCloseNavMenu}>
                {t(`pages.${page.name}`)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to="/profile">
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
