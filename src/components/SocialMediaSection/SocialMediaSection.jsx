import React from "react";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import SpinSocialMediaIcon from "../SpinSocialMediaIcon/SpinSocialMediaIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import CircularTextInstagram from "../Icons/CircularTextInstagram";
import YoutubeIcon from "../Icons/YoutubeIcon";
import CircularTextYoutube from "../Icons/CircularTextYoutube";
import LinkedInIcon from "../Icons/LinkedInIcon";
import CircularTextLinkedIn from "../Icons/CircularTextLinkedIn";
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
      }}
    >
      <Box sx={{ position: "relative" }}>
        <SpinSocialMediaIcon
          LogoComponent={() => <InstagramIcon width={iconSize} height={iconSize} />}
          TextComponent={() => <CircularTextInstagram width={iconSize} height={iconSize} />}
          width={iconSize}
          height={iconSize}
        />
      </Box>
      <Box sx={{ position: "relative" }}>
        <SpinSocialMediaIcon
          LogoComponent={() => <YoutubeIcon width={iconSize} height={iconSize} />}
          TextComponent={() => <CircularTextYoutube width={iconSize} height={iconSize} />}
          width={iconSize}
          height={iconSize}
        />
      </Box>
      <Box sx={{ position: "relative" }}>
        <SpinSocialMediaIcon
          LogoComponent={() => <LinkedInIcon width={iconSize} height={iconSize} />}
          TextComponent={() => <CircularTextLinkedIn width={iconSize} height={iconSize} />}
          width={iconSize}
          height={iconSize}
        />
      </Box>
    </Box>
  );
};

export default SocialMediaSection;