import { Navbar, Sidebar } from "@components/navbar";
import { AppShell, useMantineTheme, Text } from "@mantine/core";
import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter as Router } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks';
import { useTheme } from "@hooks/useTheme";
import Inventory from "@pages/Inventory";

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
          <Router future={{ v7_startTransition: true }}>
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
              <Inventory />
            </AppShell>
          </Router>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
