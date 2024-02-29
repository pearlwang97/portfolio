import React from "react";
import { Box, useTheme } from "@mui/system";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Full width on small screens
  maxWidth: "300px",
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    width: '75%', // 75% width on small devices and up
    gap: '20px',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%', // 50% width on medium devices and up
    gap: '30px',
  },
}));

const StyledLink = styled('a')(({ theme }) => ({
	  color: 'inherit',
	  textDecoration: 'none',
}));

const SocialMediaSection = () => {
	const theme = useTheme();
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
	if (isSM) {
    var iconSize = 30;
	var linkedInIconSize = 28.5;
  } else if (isMD) {
    var iconSize = 50;
	var linkedInIconSize = 47.5;
  } else {
    var iconSize = 75;
	var linkedInIconSize = 71.25;
  }

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
				padding: "50px 0",
			}}
		>
			<StyledBox>
				<StyledLink href="https://www.instagram.com/_w_ong/" target="_blank"><InstagramIcon width={iconSize} height={iconSize} /></StyledLink>
				<StyledLink href="https://www.youtube.com/@pearlwang9426" target="_blank"><YoutubeIcon width={iconSize} height={iconSize} /></StyledLink>
				<StyledLink href="https://www.linkedin.com/in/peirong-wang-123a83208/" target="_blank"><LinkedInIcon width={linkedInIconSize} height={linkedInIconSize} /></StyledLink>
			</StyledBox>
		</Box>
	);
};

export default SocialMediaSection;
