import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import PrimaryNavBar from "../components/NavBar/PrimaryNavBar/PrimaryNavBar";
import SocialButtons from "../components/Login/SocialButtons";
import EmailAddress from "../components/Login/EmailAddress";
import SignUpNow from "../components/Login/SignUpNow"; // Import SignUpNow component

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showSignUpNow, setShowSignUpNow] = useState(false); // Added state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleEmailClick = () => {
    setShowEmailInput(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpNow(true);
  };

  return (
    <Box>
      <PrimaryNavBar />
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            sx={{ mt: 2, mb: 2, fontSize: "20px", fontWeight: "600" }}
          >
            Sign up or log in
          </Typography>
          {!showEmailInput && !showSignUpNow ? (
            <SocialButtons
              handleSubmit={handleSubmit}
              onEmailClick={handleEmailClick}
            />
          ) : (
            // Conditionally render EmailAddress or SignUpNow component
            <>
              {showEmailInput && (
                <EmailAddress
                  handleSubmit={handleSubmit}
                  onSignUpClick={handleSignUpClick}
                />
              )}
              {showSignUpNow && <SignUpNow />}
            </>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
