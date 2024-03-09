import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Paper,
  Typography,
  Alert,
  TextField,
  Button,
} from "@mui/material";

function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
/*
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://api.kepan.org.tr/auth/login", {
        email,
        password, // token süresi dolduğunda frontende de çıkartmam gerekir mi ?
      });

      if (response.status === 200) {
        if (
          response.data.email === email &&
          response.data.password === password
        ) {
          setIsLoggedIn(true);
        } else {
          setError(
            "Giriş başarısız. Lütfen bilgilerinizi kontrol edin ve tekrar deneyin."
          );
        }
      } else {
        setError(`Giriş başarısız. Sunucu hatası: ${response.status}`);
      }
    } catch (err) {
      setError(
        "Giriş başarısız. Lütfen bilgilerinizi kontrol edin ve tekrar deneyin."
      );
      console.error("Giriş hatası:", err);
    }
  };*/

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#141b2d",
          }}
        >
          <Typography component="h1" variant="h5">
            Giriş Yap
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Box
            component="form"
           // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-posta Adresi"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
