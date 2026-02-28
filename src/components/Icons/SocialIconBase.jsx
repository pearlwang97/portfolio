import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";

const StyledSvgIcon = styled(SvgIcon)({
	"& path, & circle, & rect": {
		transition: "fill 0.3s ease-in-out",
	},
	"&:hover path, &:hover circle, &:hover rect": {
		fill: "#dcdddd",
	},
});

const SocialIconBase = ({ children, sx, viewBox = "0 0 48 48" }) => {
	return (
		<StyledSvgIcon
			viewBox={viewBox}
			fill="none"
			sx={{ ...sx }}
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</StyledSvgIcon>
	);
};

export default SocialIconBase;
