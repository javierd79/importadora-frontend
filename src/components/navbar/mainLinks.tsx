import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import {
  IconMessages,
  IconHome,
  IconBox,
  IconBuilding,
} from '@tabler/icons-react';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  return (
    <UnstyledButton
      component={Link}
      to={to}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon size="lg" color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="lg">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconHome size="1rem" />, color: 'blue', label: 'Dashboard', to: '/' },
  { icon: <IconBox size="1rem" />, color: 'teal', label: 'Inventario', to: '/inventario' },
  { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Vendedores', to: '/vendedores' },
  { icon: <IconBuilding size="1rem" />, color: 'grape', label: 'Empresas', to: '/empresas' },
];

export default function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
