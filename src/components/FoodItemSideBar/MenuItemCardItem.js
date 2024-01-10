import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const CardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    margin: "10px 0",
  },
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  width: "150px",
  height: "150px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "200px",
  },
}));

const CardDetails = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

const CardTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "bold",
});

const CardDescription = styled(Typography)({
  fontSize: "14px",
  color: "gray",
});

const CardCallery = styled(Typography)({
  fontSize: "14px",
  color: "gray",
});

const CardPrice = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "gray",
});

const CardButton = styled(Button)({
  width: "60px",
  backgroundColor: "white",
  color: "grey",
  border: "1px solid grey",
  "&:hover": {
    backgroundColor: "lightgrey",
  },
});

const CenteredIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

function MenuItemCardItem({ item }) {
  const theme = useTheme();

  return (
    <CardWrapper theme={theme}>
      <CardImage
        image={item.image || "default-image.jpg"}
        title={item.name}
        theme={theme}
      />
      <CardDetails theme={theme}>
        <Box>
          <CardTitle variant="h5">{item.name}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
          <CardCallery>{item.kal} Kal</CardCallery>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <CardPrice>£{item.price}</CardPrice>
          <CardButton>
            <CenteredIcon>
              <AddIcon />
            </CenteredIcon>
          </CardButton>
        </Box>
      </CardDetails>
    </CardWrapper>
  );
}

export default MenuItemCardItem;
