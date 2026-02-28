import React from "react";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";

const StyledNav = styled("nav")(({ theme }) => ({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	height: "calc(100vh - 120px - 2rem)",
	justifyContent: "space-between",
	position: "sticky",
	top: "calc(60px + 1rem)",
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

const StyledNavItem = styled(Link)(({ theme }) => ({
	color: "inherit",
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
	fontSize: "16px",
	fontWeight: "semi-bold",
	justifyContent: "center",
	lineHeight: "1",
	textAlign: "center",
	textTransform: "uppercase",
	transform: "rotate(180deg)",
	writingMode: "vertical-rl",
	textDecoration: "none",
	fontFamily: "'Lato', sans-serif",
	"&:hover": {
		color: "inherit",
		textDecoration: "none",
	},
	"&:visited": {
		color: "inherit",
	},
	"&.active": {
		color: "#dba39a",
	},
	"&:after": {
		content: '""',
		position: "absolute",
		top: 0,
		right: "20px", // Adjust the position of the pseudo-element
		width: "1.5px",
		height: "100%",
		backgroundColor: "#dba39a",
		transform: "scaleY(0)",
		transition: "transform 0.3s ease-in-out",
	},
	"&.active::after": {
		transform: "scaleY(1)",
	},
}));

const ProjectNavBar = ({ navItems }) => {
	return (
		<StyledNav>
			{navItems.map((navItem, index) => {
				return (
					<StyledNavItem
						key={index}
						to={navItem.to}
						activeClass="active"
						spy={true}
						smooth={true}
						duration={500}
						hashSpy={true}
					>
						{navItem.label}
					</StyledNavItem>
				);
			})}
		</StyledNav>
	);
};

export default ProjectNavBar;
