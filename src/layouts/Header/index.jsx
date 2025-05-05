import React,{ useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Switch,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header({ toggleDrawer }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className={styles.header}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700 }}
          component="h1"
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="secondary"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
          <Avatar
            alt="Profile"
            src="/assets/avatar.jpg"
            onClick={handleMenu}
            sx={{ cursor: 'pointer', width: 40, height: 40 }}
            aria-label="Profile menu"
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
