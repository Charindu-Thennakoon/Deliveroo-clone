import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { AppBar, Box, Button, Grid, styled } from "@mui/material";
import DeliverooLogo from "../../../resources/images/logo-teal.svg";
import React from "react";

const RightIcons = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const buttonStyles = {
  borderWidth: "1px",
  color: "black",
  borderColor: "#e8ebeb",
  "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
  textTransform: "none",
};

const svgImageStyle = {
  width: "130px",
  height: "50px",
  fill: "#00ccbc",
};

function PrimaryNavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "white", borderBottom: "1px solid #dbdbdb" }}
    >
      <Grid container justifyContent="center" sx={{ px: { xs: 2, lg: 0 } }}>
        <Grid
          item
          xs={12}
          lg={8}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <img src={DeliverooLogo} alt="Deliveroo Logo" style={svgImageStyle} />
          <RightIcons>
            <Button
              sx={buttonStyles}
              variant="outlined"
              startIcon={<PermIdentityOutlinedIcon sx={{ color: "#00ccbc" }} />}
            >
              Account
            </Button>
          </RightIcons>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default PrimaryNavBar;
