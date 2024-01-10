import React from "react";
import { Grid } from "@mui/material";
import MenuItemCardItem from "./MenuItemCardItem";

function MenuItemCategory({ category, items }) {
  return (
    <div>
      <h3>{category}</h3>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={6}>
            <MenuItemCardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MenuItemCategory;
