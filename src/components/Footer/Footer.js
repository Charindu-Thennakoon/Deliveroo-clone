import React from "react";
import {
  Box,
  Grid,
  Paper,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AppStoreIcon from "../../resources/images/appstore.png";
import PlayStoreIcon from "../../resources/images/pngwing.com.png";
import MainFooterColumn from "./MainFooterColumn";
import SocialIconsAndCopyright from "./SocialIconsAndCopyright";

const Footer = () => {
  const theme = useTheme();
  const isSmScreenOrLarger = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreenOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const columnMain = {
    bgcolor: "#2e3333",
    py: 2,
    borderRadius: 0,
    height: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    ...(isSmScreenOrLarger && {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }),
    ...(isMdScreenOrLarger && {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    }),
    ...(isLgScreen && {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    }),
  };

  const mainTopics = [
    {
      title: "Take Deliveroo with you",
      content: [
        { href: "#", text: "Investors" },
        { href: "#", text: "About us" },
        { href: "#", text: "Takeaway" },
        { href: "#", text: "More" },
        { href: "#", text: "Newsroom" },
        { href: "#", text: "Engineering blog" },
        { href: "#", text: "Design blog" },
        { href: "#", text: "Gift Cards" },
        { href: "#", text: "Deliveroo Students" },
        { href: "#", text: "Careers" },
        { href: "#", text: "Restaurant signup" },
        { href: "#", text: "Become a rider" },
      ],
    },
    {
      title: "Legal",
      content: [
        { href: "#", text: "Terms and conditions" },
        { href: "#", text: "Privacy" },
        { href: "#", text: "Cookies" },
        { href: "#", text: "Modern Slavery Statement" },
        { href: "#", text: "Tax Strategy" },
        { href: "#", text: "Section 172 Statement" },
      ],
    },
    {
      title: "Support",
      content: [
        { href: "#", text: "Contact" },
        { href: "#", text: "FAQs" },
        { href: "#", text: "Cuisines" },
        { href: "#", text: "Brands" },
      ],
    },
    {
      title: "Download Our App",
      content: [
        {
          href: "#",
          text: (
            <img src={AppStoreIcon} style={{ width: 150 }} alt="App Store" />
          ),
        },
        {
          href: "#",
          text: (
            <img src={PlayStoreIcon} style={{ width: 150 }} alt="Play Store" />
          ),
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2} sx={columnMain} justifyContent="center">
      {mainTopics.map((topic, index) => (
        <MainFooterColumn
          key={index}
          title={topic.title}
          content={topic.content}
        />
      ))}
      <SocialIconsAndCopyright />
    </Grid>
  );
};

export default Footer;
