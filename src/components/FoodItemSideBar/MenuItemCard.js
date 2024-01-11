// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchItems } from "../../redux/itemsSlice";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   styled,
//   useTheme,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// function MenuItemCard() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.items.items);
//   const status = useSelector((state) => state.items.status);
//   const theme = useTheme(); // Moved useTheme hook to the top level

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchItems());
//     }
//   }, [status, dispatch]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error loading data.</div>;
//   }

//   // Group items by category
//   const groupedItems = items.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   // Styled components
//   const CardWrapper = styled(Card)(({ theme }) => ({
//     display: "flex",
//     flexDirection: "row",
//     margin: "10px",
//     width: "100%",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       margin: "10px 0",
//     },
//   }));

//   const CardImage = styled(CardMedia)(({ theme }) => ({
//     width: "150px",
//     height: "150px",
//     objectFit: "cover",
//     [theme.breakpoints.down("md")]: {
//       width: "100%",
//       height: "200px",
//     },
//   }));

//   const CardDetails = styled(CardContent)(({ theme }) => ({
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     [theme.breakpoints.down("md")]: {
//       padding: "10px",
//     },
//   }));

//   const CardTitle = styled(Typography)({
//     fontSize: "18px",
//     fontWeight: "bold",
//   });

//   const CardDescription = styled(Typography)({
//     fontSize: "14px",
//     color: "gray",
//   });

//   const CardCallery = styled(Typography)({
//     fontSize: "14px",
//     color: "gray",
//   });

//   const CardPrice = styled(Typography)({
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "gray",
//   });

//   const CardButton = styled(Button)({
//     width: "60px",
//     backgroundColor: "white",
//     color: "grey",
//     border: "1px solid grey",
//     "&:hover": {
//       backgroundColor: "lightgrey",
//     },
//   });

//   const CenteredIcon = styled("div")({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//   });

//   return (
//     <div>
//       {Object.keys(groupedItems).map((category) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <Grid container spacing={2}>
//             {groupedItems[category].map((item) => (
//               <Grid key={item.id} item xs={12} sm={6} md={6}>
//                 <CardWrapper theme={theme}>
//                   <CardImage
//                     image={item.image || "default-image.jpg"}
//                     title={item.name}
//                     theme={theme}
//                   />
//                   <CardDetails theme={theme}>
//                     <Box>
//                       <CardTitle variant="h5">{item.name}</CardTitle>
//                       <CardDescription>{item.description}</CardDescription>
//                       <CardCallery>{item.kal} Kal</CardCallery>
//                     </Box>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <CardPrice>£{item.price}</CardPrice>
//                       <CardButton>
//                         <CenteredIcon>
//                           <AddIcon />
//                         </CenteredIcon>
//                       </CardButton>
//                     </Box>
//                   </CardDetails>
//                 </CardWrapper>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MenuItemCard;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/itemsSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Grid,
  styled,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function MenuItemCard() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);
  const theme = useTheme();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading data.</div>;
  }

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

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

  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <Grid container spacing={2}>
            {groupedItems[category].map((item) => (
              <Grid key={`${category}-${item.id}`} item xs={12} sm={6} md={6}>
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
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <CardPrice>£{item.price}</CardPrice>
                      <CardButton>
                        <CenteredIcon>
                          <AddIcon />
                        </CenteredIcon>
                      </CardButton>
                    </Box>
                  </CardDetails>
                </CardWrapper>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default MenuItemCard;
