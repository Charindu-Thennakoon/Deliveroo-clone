import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  styled,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DeliverooLogo from "../../../resources/images/logo-teal.svg";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "start",
});

const buttonStyles = {
  borderWidth: "1px",
  color: "black",
  borderColor: "#e8ebeb",
  textTransform: "none",
  "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
};

const svgImageStyle = {
  width: "130px",
  height: "50px",
  fill: "#00ccbc",
};

const RightIcons = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "flex-end",
});

function PrimaryNavBarSingleProduct() {
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

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
          lg={10}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <img
              src={DeliverooLogo}
              alt="Deliveroo Logo"
              style={svgImageStyle}
            />
          </Grid>

          <Grid
            item
            xs={5}
            sx={{ display: { xs: "none", lg: "block" }, pr: 2 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#f5f5f5",
                borderRadius: 4,
                border: `2px solid ${isSearchBarFocused ? "black" : "#f5f5f5"}`,
              }}
            >
              <IconButton></IconButton>
              <InputBase
                placeholder="Search Tossed - St Martin's Lane"
                style={{
                  flexGrow: 1,
                  marginLeft: 8,
                  marginTop: 5,
                  marginBottom: 5,
                }}
                startAdornment={<SearchIcon />}
                inputProps={{
                  style: {
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  },
                }}
                onFocus={handleSearchBarFocus}
                onBlur={handleSearchBarBlur}
              />
            </div>
          </Grid>

          <Grid item xs={5}>
            <RightIcons>
              {isMdUp && (
                <Button
                  sx={buttonStyles}
                  variant="outlined"
                  startIcon={<HomeOutlinedIcon sx={{ color: "#00ccbc" }} />}
                >
                  Sign up or log in
                </Button>
              )}
              <Button
                sx={buttonStyles}
                variant="outlined"
                startIcon={
                  <PermIdentityOutlinedIcon sx={{ color: "#00ccbc" }} />
                }
              >
                Account
              </Button>
            </RightIcons>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default PrimaryNavBarSingleProduct;
