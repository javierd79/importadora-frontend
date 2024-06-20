import React from 'react';
import {
  IconMessages,
  IconHome,
  IconBox,
  IconBuilding,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
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
  { icon: <IconHome size="1rem" />, color: 'blue', label: 'Dashboard' },
  { icon: <IconBox size="1rem" />, color: 'teal', label: 'Inventario' },
  { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Vendedores' },
  { icon: <IconBuilding size="1rem" />, color: 'grape', label: 'Empresas' },
];

export default function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}