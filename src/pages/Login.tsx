// @pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput, Button, Paper, Title, Text, Container, Group } from '@mantine/core';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Bienvenido 
      </Title>
      

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Correo electrónico"
            placeholder="tu@correo.com"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Tu contraseña"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Button type="submit" fullWidth>
              Iniciar sesión
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
