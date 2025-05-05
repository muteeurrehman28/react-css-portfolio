import React,{ useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';

export default function SideNav({ mobileOpen, toggleDrawer }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <div className={styles.nav}>
      <Typography
        variant="h6"
        sx={{ p: 2, fontWeight: 700, color: 'text.primary' }}
        component="h2"
      >
        Navigation
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={isMobile ? toggleDrawer : undefined}
            sx={{
              py: 1.5,
              '&:hover': { backgroundColor: 'action.hover' },
              transition: 'background-color 0.2s',
            }}
            aria-label={`Navigate to ${item.text}`}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 240, sm: 260 },
          boxSizing: 'border-box',
          borderRight: (theme) =>
            theme.palette.mode === 'light' ? '1px solid #e0e0e0' : '1px solid #333',
          bgcolor: 'background.paper',
        },
      }}
      ModalProps={{ keepMounted: true }}
    >
      {drawer}
    </Drawer>
  );
}