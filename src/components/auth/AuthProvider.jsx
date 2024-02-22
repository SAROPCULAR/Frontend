import React, { useState } from 'react';
import axios from 'axios';


function LoginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState(''); // 'username' yerine 'email' kullanımı
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini engelleyin
    setError(''); // Hata durumunu sıfırlayın

    try {
      const response = await axios.post('https://localhost:8080/auth/login', {
        email,
        password,
      });

      // API yanıtının durumunu kontrol et
      if (response.status === 200) {
        // API'dan gelen bilgiler ile girilen bilgilerin uyumunu kontrol et (Örnek)
        // Gerçek bir uygulamada, bu kontrol genellikle sunucu tarafında yapılır
        if (response.data.email === email && response.data.password === password) {
          setIsLoggedIn(true); // Kullanıcı giriş durumunu güncelle
        } else {
          setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin ve tekrar deneyin.');
        }
      } else {
        // Başka bir HTTP durum kodu döndüğünde hata mesajı göster
        setError(`Giriş başarısız. Sunucu hatası: ${response.status}`);
      }
    } catch (err) {
      setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin ve tekrar deneyin.');
      console.error('Giriş hatası:', err);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#141b2d',
        }}>
          <Typography component="h1" variant="h5">
            Giriş Yap
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Kullanıcı Adı"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş Yap
            </Button>

          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginForm;