import { Card, Text, Avatar, Group, useMantineTheme } from "@mantine/core";
import React from "react";

interface IStatsCard {
  title: string;
  value: number;
  color: 'red' | 'green' | 'blue' | 'teal' | 'gray' | 'dark' | string;
  icon: React.ReactNode;
}

function StatsCard({
  title,
  value,
  color,
  icon
}: IStatsCard) {
  const theme = useMantineTheme();

  return (
    <Card
      bg={color}
      shadow="xs"
      withBorder
      padding="md"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Group position="apart">
        <Avatar color={color} bg={theme.colors[color][9]} size='lg'>{icon}</Avatar>
        <div>
          <Text size="sm" mb={-5} weight={700}>
            {title}
          </Text>
          <Text size="xl" weight={700}>
            {value}
          </Text>
        </div>
      </Group>
    </Card>
  )
}

export default StatsCard