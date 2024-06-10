import { Navbar, Sidebar } from "@components/Navbar";
import { AppShell, useMantineTheme, Text, ColorScheme } from "@mantine/core";
import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter as Router } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks';

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const { width } = useViewportSize();
  
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
       colorScheme={colorScheme} 
       toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
          <ModalsProvider>
            <Notifications />
            <Router future={{ v7_startTransition: true }}>
              <AppShell
                header={width < 768 ? <Navbar opened={opened} setOpened={() => setOpened((o) => !o)} /> : undefined}
                navbar={<Sidebar opened={opened} />}
                navbarOffsetBreakpoint="sm"
                styles={{
                  main: {
                    background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                  },
                }}
              >
                <Text align="center" style={{ marginTop: 20 }}>
                  Welcome to Mantine
                </Text>
              </AppShell>
            </Router>
          </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
