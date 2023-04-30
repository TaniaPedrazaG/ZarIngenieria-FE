import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext, UiContext } from '@/contexts';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import {
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  DashboardOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  VpnKeyOutlined,
  Inventory2Outlined,
} from '@mui/icons-material';

export const SideMenu = () => {
  const { isMenuOpen, toogleSideMenu } = useContext(UiContext);
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const router = useRouter();

  const navigateTo = ( url: string ) => {
    toogleSideMenu();
    router.push(url)
  }

  return (
    <Drawer
      open={isMenuOpen}
      anchor='right'
      sx={{
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out',
      }}
      onClose={toogleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='h6'>MENU</Typography>
        </div>
        
        <List>
          {
            isLoggedIn
              ? (
                <ListItemButton onClick={logout}>
                  <ListItemIcon>
                    <LoginOutlined />
                  </ListItemIcon>
                  <ListItemText primary={'Salir'} />
                </ListItemButton>
              ) 
              : (
                <ListItemButton
                  onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
                >
                  <ListItemIcon>
                    <VpnKeyOutlined />
                  </ListItemIcon>
                  <ListItemText primary={'Ingresar'} />
                </ListItemButton>
              )
          }

          <ListItemButton
            onClick={() => navigateTo('/products')}>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={'Productos'} />
          </ListItemButton>

          {user?.role === 'admin' && (
            <>
              <Divider />
              <ListSubheader>Admin Panel</ListSubheader>
              <ListItemButton onClick={() => navigateTo('/admin/products')}>
                <ListItemIcon>
                  <Inventory2Outlined />
                </ListItemIcon>
                <ListItemText primary={'Productos'} />
              </ListItemButton>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};
