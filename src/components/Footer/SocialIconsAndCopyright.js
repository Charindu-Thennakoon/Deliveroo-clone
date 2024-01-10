import React from "react";
import { Box, Grid, Paper, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIconsAndCopyright = () => {
  const socialIconsContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2e3333",
    boxShadow: "none",
  };

  const copyrightText = {
    color: "gray",
    textAlign: "right",
    fontSize: "0.9rem",
  };

  return (
    <Grid item xs={12} md={10}>
      <Paper square sx={socialIconsContainer}>
        <Box>
          {/* Social Icons */}
          <Link
            href="#"
            sx={{ color: "white", pr: 1, "&:hover": { color: "#1877f2" } }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="#"
            sx={{ color: "white", pr: 1, "&:hover": { color: "#1da1f2" } }}
          >
            <TwitterIcon />
          </Link>
          <Link
            href="#"
            sx={{ color: "white", pr: 1, "&:hover": { color: "#c13584" } }}
          >
            <InstagramIcon />
          </Link>
        </Box>
        <Typography sx={copyrightText}>&copy; 2024 Deliveroo</Typography>
      </Paper>
    </Grid>
  );
};

export default SocialIconsAndCopyright;
