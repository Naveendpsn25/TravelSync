import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setSnackbarMessage("Please enter your email address.");
      setSnackbarSeverity("error");
      setIsSnackbarOpen(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
      setIsSnackbarOpen(true);
      return;
    }

    setSnackbarMessage("Thanks for subscribing to TravelSync!");
    setSnackbarSeverity("success");
    setIsSnackbarOpen(true);
    setEmail("");
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Box component="section" className="newsletter">
        <Container maxWidth="xl">
          <Box className="newsletter-content">
            <Box className="newsletter-text-content">
              <Typography className="newsletter-eyebrow">
                STAY INSPIRED
              </Typography>

              <Typography variant="h2" className="newsletter-title">
                Get Travel Ideas in Your Inbox
              </Typography>

              <Typography className="newsletter-description">
                Receive destination inspiration, travel tips, and special
                package updates from TravelSync.
              </Typography>
            </Box>

            <Box
              component="form"
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                type="email"
                label="Email address"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="newsletter-input"
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendRoundedIcon />}
                className="newsletter-button"
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3500}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Newsletter;