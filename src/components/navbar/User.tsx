import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

export default function User() {
  const theme = useMantineTheme();

  return (
    <Box>
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar
            // src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Javier Diaz
            </Text>
            <Text color="dimmed" size="xs">
              javierdiazt406@gmail.com
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  );
}