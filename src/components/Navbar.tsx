import { Burger, Header, Navbar as Nav, Text, useMantineTheme } from "@mantine/core"
import Brand from "./Brand"
import MainLinks from "./mainLinks"

interface INavbar {
  opened: boolean
  setOpened: () => void
}

interface ISidebar {
  opened: boolean
}

export const Navbar = ({ opened, setOpened }: INavbar) => {
  const theme = useMantineTheme()

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger
            opened={opened}
            onClick={setOpened}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />

        <Text fw={700} mt={2.8}>
          Sistema Administrativo
        </Text>
      </div>
    </Header>
  )
}

export const Sidebar = ({ opened }: ISidebar) => {
  return (
    <Nav p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300 }}>
      <Nav.Section>
        <Brand />
      </Nav.Section>
      <Nav.Section grow mt="md">
        <MainLinks />
      </Nav.Section>
    </Nav>
  )
}