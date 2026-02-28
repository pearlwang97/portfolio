import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { socialLinks } from "components/constants/profile";

const Link = styled("a")({
	color: "inherit",
	textDecoration: "none",
	display: "inline-flex",
	alignItems: "center",
});

const defaultIconStyles = {
	fontSize: 30,
	marginRight: "10px",
};

const SocialLinks = ({
	iconColor = "white",
	hoverColor = "#dcdddd",
	iconStyles = defaultIconStyles,
	sx,
}) => {
	return (
		<Box sx={sx}>
			{socialLinks.map(({ href, icon: Icon, label, isExternal }) => (
				<Link
					key={label}
					href={href}
					aria-label={label}
					target={isExternal ? "_blank" : undefined}
					rel={isExternal ? "noopener noreferrer" : undefined}
				>
					<Icon
						sx={{
							...iconStyles,
							color: iconColor,
							transition: "color 0.3s ease-in-out",
							"&:hover": {
								color: hoverColor,
							},
						}}
					/>
				</Link>
			))}
		</Box>
	);
};

export default SocialLinks;
