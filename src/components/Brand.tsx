import { ActionIcon, useMantineColorScheme, Box, rem, Grid } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import User from './User';

export default function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
      })}
    >
      <Grid gutter={-5} px={0} mx={-10} mb={-10}>
        <Grid.Col span={10}>
          <User />
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={1}>
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30} mt={15}>
            {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Box>
  );
}