import React from "react";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import "./SocialMediaSection.css";

const SocialMediaSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile);
  const iconSize = isMobile ? '75px' : '100px';

  return (
    <Box
      className={"socialMediaSection"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: isMobile ? "" : "20px",
        backgroundColor: "#e0e6f8",
        padding: "50px 0",
      }}
    >
      <InstagramIcon width={iconSize} height={iconSize}/>
      <YoutubeIcon width={iconSize} height={iconSize}/>
      <LinkedInIcon width={iconSize} height={iconSize}/>
    </Box>
  );
};

export default SocialMediaSection;