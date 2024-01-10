import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  colors,
} from "@mui/material";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import React from "react";

function FixedCart() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <ShoppingBasketIcon
              style={{
                color: "#abadad",
                fontSize: "50px",
                margin: "10px",
              }}
            />
          </Box>

          <Typography variant="h5" component="div" sx={{ fontSize: 15 }}>
            Your basket is empty
          </Typography>
        </CardContent>
        <CardActions
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            sx={{
              width: "90%",
              backgroundColor: "#e2e5e5",
              color: "#abadad",
              fontWeight: "bold",
              py: 2,
              mb: 2,
            }}
          >
            Go to checkout
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default FixedCart;
