import { Navbar, Sidebar } from "@components/navbar";
import { AppShell, useMantineTheme, Text } from "@mantine/core";
import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';
import { useTheme } from "@hooks/useTheme";
import Inventory from "@pages/Inventory";
import Dashboard from "@pages/Dashboard";
import Vendedores from "@pages/Vendedores";
import Empresas from "@pages/Empresas"; 
import Login from "@pages/Login"; 

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { toggleTheme, currentTheme } = useTheme();
  const { width } = useViewportSize();

  const linksToHideSidebar = ['/login'];

  return (
    <ColorSchemeProvider
      colorScheme={currentTheme}
      toggleColorScheme={toggleTheme}
    >
      <MantineProvider
        theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme: currentTheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <Notifications />
          <Router>
            <AppShell
              header={
                width < 768 ? 
                  <Navbar opened={opened} setOpened={() => setOpened((o) => !o)} /> 
                : undefined
              }
              navbar={
                !linksToHideSidebar.includes(window.location.pathname) ? (
                  <Sidebar opened={opened} />
                ) : undefined
              }
              navbarOffsetBreakpoint="sm"
              styles={{
                main: {
                  background: currentTheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
              }}
            >
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventario" element={<Inventory />} />
                <Route path="/vendedores" element={<Vendedores />} />
                <Route path="/empresas" element={<Empresas />} />
              </Routes>
            </AppShell>
          </Router>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
