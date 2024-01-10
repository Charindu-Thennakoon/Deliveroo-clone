import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import MenuItemCard from "./MenuItemCard";

function FoodItemSideBar() {
  return (
    <Box flex={2} p={2}>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontSize: 15, mt: 2, mb: 4 }}
      >
        Adults need around 2000 kcal a day
      </Typography>

      <MenuItemCard></MenuItemCard>
    </Box>
  );
}

export default FoodItemSideBar;
