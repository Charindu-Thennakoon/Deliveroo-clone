// import { Box, Button, Grid } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import singleProductImage from "../../resources/images/single -product-image.jpeg";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import StarIcon from "@mui/icons-material/Star";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Avatar from "@mui/material/Avatar";
// import DeliveryIcon from "../../resources/images/delivery.png";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

// import React from "react";

// const buttonStyles = {
//   borderWidth: "1px",
//   color: "#00ccbc",
//   borderColor: "#e8ebeb",
//   margin: 1,
//   "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
// };

// function SingleItem() {
//   return (
//     <Box>
//       <Box sx={{ padding: 2 }}>
//         <Button
//           sx={{ color: "#00ccbc" }}
//           variant="text"
//           startIcon={<ArrowBackIcon />}
//         >
//           Back
//         </Button>
//       </Box>
//       <Box>
//         <Grid container sx={{ padding: 2 }}>
//           <Grid
//             item
//             xs={8}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "flex-start",
//             }}
//           >
//             <Card
//               sx={{
//                 width: { xs: "90%", sm: "80%", md: "100%", lg: "100%" },
//                 margin: "0 auto",
//                 boxShadow: "none",
//               }}
//             >
//               <Grid container>
//                 <Grid item xs={12} md={5}>
//                   <CardMedia
//                     component="img"
//                     image="https://source.unsplash.com/random"
//                     alt="Random"
//                     style={{ maxHeight: "300px" }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={7}>
//                   <CardContent styles={{ boxShadow: "none" }}>
//                     <Typography
//                       variant="h5"
//                       component="div"
//                       style={{
//                         fontSize: "40px",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Tossed - St Martin's Lane
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       style={{
//                         marginTop: 10,
//                         marginBottom: 10,
//                       }}
//                     >
//                       Chicken·Salads·Healthy
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       style={{
//                         marginBottom: 10,
//                       }}
//                     >
//                       0.20 miles away·Opens at 11:00·£7.00 minimum·£0.99
//                       delivery
//                     </Typography>
//                     <Box
//                       display="flex"
//                       flexDirection="column"
//                       alignItems="start"
//                     >
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         startIcon={<InfoOutlinedIcon />}
//                         endIcon={
//                           <ArrowForwardIcon style={{ color: "#00ccbc" }} />
//                         }
//                         sx={{
//                           boxShadow: "none",
//                           backgroundColor: "transparent",
//                           "&:hover": {
//                             backgroundColor: "transparent",
//                           },
//                           color: "black",
//                         }}
//                       >
//                         <div style={{ textAlign: "left" }}>
//                           Info
//                           <br />
//                           <span style={{ fontSize: "0.8rem" }}>
//                             Map, allergens and hygiene rating
//                           </span>
//                         </div>
//                       </Button>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         startIcon={<StarIcon style={{ color: "#4d7c1b" }} />}
//                         endIcon={
//                           <ArrowForwardIcon style={{ color: "#00ccbc" }} />
//                         }
//                         sx={{
//                           boxShadow: "none",
//                           backgroundColor: "transparent",
//                           "&:hover": {
//                             backgroundColor: "transparent",
//                           },
//                           color: "black",
//                         }}
//                       >
//                         <div style={{ textAlign: "left" }}>
//                           Info
//                           <br />
//                           <span style={{ fontSize: "0.8rem" }}>
//                             Map, allergens and hygiene rating
//                           </span>
//                         </div>
//                       </Button>
//                     </Box>
//                   </CardContent>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//           <Grid
//             item
//             xs={4}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-end",
//             }}
//           >
//             <Button variant="outlined" color="primary" sx={buttonStyles}>
//               <Avatar
//                 src={DeliveryIcon}
//                 alt="Avatar"
//                 variant="square"
//                 sx={{ width: 25, height: 25 }}
//               />
//               &nbsp; Deliver<span color="blue"> Change </span>
//             </Button>
//             <Button
//               sx={buttonStyles}
//               variant="outlined"
//               startIcon={<PermIdentityOutlinedIcon />}
//             >
//               Start group order
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid item xs={4}></Grid>
//       </Box>
//     </Box>
//   );
// }

// export default SingleItem;
import React from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DeliveryIcon from "../../resources/images/delivery.png";

const buttonStyles = {
  borderWidth: "1px",
  color: "#00ccbc",
  borderColor: "#e8ebeb",
  margin: 1,
  "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
};

function SingleItem() {
  return (
    <Box>
      <Box sx={{ padding: 2 }}>
        <Button
          sx={{ color: "#00ccbc" }}
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>
      <Box>
        <Grid container sx={{ padding: 2 }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Card
              sx={{
                width: { xs: "90%", sm: "80%", md: "100%", lg: "100%" },
                margin: "0 auto",
                boxShadow: "none",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={5}>
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="Random"
                    style={{ maxHeight: "300px" }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      style={{
                        fontSize: "40px",
                        fontWeight: 600,
                      }}
                    >
                      Tossed - St Martin's Lane
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      Chicken·Salads·Healthy
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      0.20 miles away·Opens at 11:00·£7.00 minimum·£0.99
                      delivery
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="start"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<InfoOutlinedIcon />}
                        endIcon={
                          <ArrowForwardIcon style={{ color: "#00ccbc" }} />
                        }
                        sx={{
                          boxShadow: "none",
                          backgroundColor: "transparent",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                          color: "black",
                        }}
                      >
                        <div style={{ textAlign: "left" }}>
                          Info
                          <br />
                          <span style={{ fontSize: "0.8rem" }}>
                            Map, allergens and hygiene rating
                          </span>
                        </div>
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<StarIcon style={{ color: "#4d7c1b" }} />}
                        endIcon={
                          <ArrowForwardIcon style={{ color: "#00ccbc" }} />
                        }
                        sx={{
                          boxShadow: "none",
                          backgroundColor: "transparent",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                          color: "black",
                        }}
                      >
                        <div style={{ textAlign: "left" }}>
                          Info
                          <br />
                          <span style={{ fontSize: "0.8rem" }}>
                            Map, allergens and hygiene rating
                          </span>
                        </div>
                      </Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button variant="outlined" color="primary" sx={buttonStyles}>
              <Avatar
                src={DeliveryIcon}
                alt="Avatar"
                variant="square"
                sx={{ width: 25, height: 25 }}
              />
              &nbsp; Deliver<span color="red"> Change </span>
            </Button>
            <Button
              sx={buttonStyles}
              variant="outlined"
              startIcon={<PermIdentityOutlinedIcon />}
            >
              Start group order
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SingleItem;
