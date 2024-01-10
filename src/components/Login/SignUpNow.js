import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsButtonActive(validateFields());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonActive(validateFields());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonActive(validateFields());
  };

  const validateFields = () => {
    return name.trim() !== "" && validateEmail(email) && password.trim() !== "";
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = () => {
    // navigate("/signup-success");
    window.location.reload();
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
      >
        Sign Up Now
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={email}
        onChange={handleEmailChange}
        error={email.trim() !== "" && !validateEmail(email)}
        helperText={
          email.trim() !== "" && !validateEmail(email) && "Invalid email"
        }
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00ccbc",
          color: "white",
          padding: "14px 1px",
          marginBottom: "8px",
          fontWeight: "600",
          textTransform: "none",
        }}
        fullWidth
        onClick={handleSignUp}
        disabled={!isButtonActive}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpNow;
