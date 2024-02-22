import React, { useState } from 'react';
import LoginForm from "../../Frontend/src/components/auth/AuthProvider";
import { Container, Typography } from '@mui/material';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '50px' }}>
      {!isLoggedIn ? (
        // Kullanıcı giriş yapmadıysa LoginForm bileşenini göster
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        // Kullanıcı giriş yaptıysa hoş geldiniz mesajını göster
        <Typography variant="h4" component="h1" align="center">
          Hoş Geldiniz!
        </Typography>
      )}
    </Container>
  );
}

export default App;

