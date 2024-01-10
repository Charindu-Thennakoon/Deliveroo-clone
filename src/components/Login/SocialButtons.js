import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleSvgIcon from "../../resources/images/google.f4674e20.svg";

const SocialLoginButton = ({ children, icon, sx, onClick }) => (
  <Button
    variant="contained"
    sx={{ width: "100%", ...sx }}
    startIcon={icon}
    onClick={onClick}
  >
    {children}
  </Button>
);

const SocialButtons = ({ handleSubmit, onEmailClick }) => {
  return (
    <Box id="social-buttons">
      <div>
        <SocialLoginButton
          icon={<FacebookIcon />}
          sx={{
            backgroundColor: "#4c69ba",
            color: "white",
            padding: "14px 1px",
            marginTop: "8px",
            marginBottom: "8px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": { backgroundColor: "#4c69ba" },
          }}
        >
          Continue with Facebook
        </SocialLoginButton>
      </div>
      <div>
        <SocialLoginButton
          icon={<img src={GoogleSvgIcon} alt="Google Icon" />}
          sx={{
            backgroundColor: "#ffff",
            padding: "14px 1px",
            marginTop: "8px",
            marginBottom: "8px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent" },
            color: "#000000",
          }}
        >
          Continue with Google
        </SocialLoginButton>
      </div>
      <div>
        <SocialLoginButton
          icon={<AppleIcon />}
          sx={{
            backgroundColor: "#000000",
            color: "white",
            padding: "14px 1px",
            marginTop: "8px",
            "&:hover": { backgroundColor: "#000000" },
            fontWeight: "600",
            textTransform: "none",
          }}
        >
          Continue with Apple
        </SocialLoginButton>
      </div>
      <div>
        <SocialLoginButton
          icon={<MailIcon />}
          sx={{
            backgroundColor: "#00ccbc",
            color: "white",
            padding: "14px 1px",
            marginTop: "8px",
            "&:hover": { backgroundColor: "#00ccbc" },
            fontWeight: "600",
            textTransform: "none",
          }}
          onClick={onEmailClick}
        >
          Continue with email
        </SocialLoginButton>
      </div>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography sx={{ mt: 2, fontSize: "14px", color: "#585c5c" }}>
          By continuing you agree to our{" "}
          <Link href="#" underline="hover" sx={{ color: "#00ccbc" }}>
            T&Cs
          </Link>
          . Please also check out our{" "}
          <Link href="#" underline="hover" sx={{ color: "#00ccbc" }}>
            Privacy Policy
          </Link>
          . We use your data to offer you a personalized experience and to
          better understand and improve our services.{" "}
          <Link href="#" underline="hover" sx={{ color: "#00ccbc" }}>
            For more information see here
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default SocialButtons;
