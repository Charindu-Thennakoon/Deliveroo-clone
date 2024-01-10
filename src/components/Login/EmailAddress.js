import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailAddress = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [showSignUpButton, setShowSignUpButton] = useState(false);
  const [hideComponent, setHideComponent] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonActive(validateEmail(e.target.value));
    setIsEmailValid(true);
    setShowSignUpButton(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleContinue = () => {
    if (email !== "cha@gmail.com") {
      setIsEmailValid(false);
      setShowSignUpButton(true);
      setIsButtonActive(false); 
    } else {
      setIsPasswordVisible(true);
    }
  };

  const handleLogin = () => {
    if (password !== "1234") {
      setIsPasswordCorrect(false);
    } else {
      navigate("/menue");
    }
  };

  const handleSignUpClick = () => {
    setHideComponent(true); 
    onSignUpClick(); 
  };

  return (
    <Box sx={{ display: hideComponent ? "none" : "block" }}>
      <Typography
        variant="h6"
        sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
      >
        Email address
      </Typography>
      <TextField
        id="email"
        label="Enter your email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={email}
        onChange={handleEmailChange}
        error={!isEmailValid}
        helperText={!isEmailValid && "Email address Invalid"}
      />
      {isPasswordVisible ? (
        <>
          <TextField
            id="password"
            label="Enter your password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "16px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={!isPasswordCorrect}
            helperText={!isPasswordCorrect && "Password incorrect"}
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
            onClick={handleLogin}
          >
            Login Now
          </Button>
        </>
      ) : (
        <>
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
            onClick={handleContinue}
            disabled={!isButtonActive}
          >
            Continue
          </Button>
          {showSignUpButton && (
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
              onClick={handleSignUpClick}
            >
              Sign Up Now
            </Button>
          )}
        </>
      )}
      <Typography
        sx={{
          mt: 2,
          fontSize: "14px",
          textAlign: "center",
          color: "#00ccbc",
        }}
      >
        Forgot password?
      </Typography>
    </Box>
  );
};

export default EmailAddress;
