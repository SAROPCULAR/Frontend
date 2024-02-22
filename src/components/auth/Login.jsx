
import React from 'react';
import LoginForm from "../../components/auth/AuthProvider";
import { Container, Box } from '@mui/material';

function LoginPage({ setIsLoggedIn }) {
  return (
    <Container component="main" maxWidth="xs" sx={{
      display: 'flex', // Flex container oluştur
      height: '100vh', // Viewport'un tam yüksekliğini kullan
      alignItems: 'center', // İçeriği dikey olarak ortala
      justifyContent: 'center', // İçeriği yatay olarak ortala
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%', // Kutunun içeriği kapsamasını sağla
        }}
      >
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </Box>
    </Container>
  );
}

export default LoginPage;
