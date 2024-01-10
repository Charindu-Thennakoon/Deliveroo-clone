import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";

function Dummy() {
  return (
    <Card sx={{ maxWidth: 500, maxHeight: 500, margin: "0 auto" }}>
      <Grid container>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            alt="Random"
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              This is a MUI Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This card has an image on the left side and some content on the
              right side. You can use the Grid component to create a responsive
              layout for your card.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Dummy;
