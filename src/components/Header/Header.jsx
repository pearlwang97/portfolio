import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Image from "components/shared/Image/Image";

const navLinks = [
	{ to: "/works", label: "Projects" },
	{ to: "/about", label: "About" },
];

const Nav = styled("nav")({
	padding: "0 20px",
	minHeight: "9vh",
	background: "#fefcf3",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	fontSize: "1.1rem",
});

const Logo = styled(Image)({
	width: "62.4px",
	height: "52px",
});

const OverLay = styled("div", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
	position: "absolute",
	height: open ? "91vh" : 0,
	width: "100vw",
	background: "#fefcf3",
	transition: "height 0.4s ease-in-out",
	zIndex: 1,
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const Menu = styled("ul")(({ theme }) => ({
	listStyle: "none",
	display: "flex",
	"& li + li": {
		marginLeft: "20px",
	},
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const Line = styled("span", {
	shouldForwardProp: (prop) => prop !== "open" && prop !== "isSecond",
})(({ open, isSecond }) => ({
	display: "block",
	borderRadius: "50px",
	width: isSecond ? (open ? "40%" : "70%") : "25px",
	height: "3px",
	margin: "5px",
	backgroundColor: "black",
	transition: "width 0.4s ease-in-out",
}));

const OverLayMenu = styled("ul", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
	listStyle: "none",
	position: "absolute",
	left: "50%",
	top: "45%",
	transform: "translate(-50%, -50%)",
	"& li": {
		opacity: open ? 1 : 0,
		fontSize: "25px",
		margin: "50px 0px",
		transition: "opacity 0.4s ease-in-out",
	},
	padding: 0,
}));

const NavItem = styled(NavLink)({
	position: "relative",
	color: "black",
	textDecoration: "none",
	margin: "0 30px",
	fontFamily: "'Montserrat', sans-serif",
	fontSize: "1.1rem",
	"&:after": {
		content: '""',
		position: "absolute",
		left: 0,
		right: 0,
		height: "2px",
		backgroundColor: "#dba39a",
		transform: "scaleX(0)",
		transition: "transform 0.3s ease-in-out",
		bottom: "-10px",
	},
	"&:hover:after": {
		transform: "scaleX(1)",
	},
	"&.active:after": {
		transform: "scaleX(1)",
	},
});

const NavIcon = styled("button")(({ theme }) => ({
	background: "none",
	cursor: "pointer",
	border: "none",
	outline: "none",
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const Header = () => {
	const [toggle, toggleNav] = useState(false);

	const handleToggleNav = () => {
		toggleNav((prevToggle) => !prevToggle);
	};

	const handleCloseNav = () => {
		toggleNav(false);
	};

	return (
		<Box
			sx={{
				paddingTop: "35px",
				marginBottom: "50px",
			}}
		>
			<Nav>
				<NavItem to="/">
					<Logo src="/images/logo.png" alt="Logo" />
				</NavItem>
				<Menu>
					{navLinks.map((link) => (
						<li key={link.to}>
							<NavItem to={link.to}>{link.label}</NavItem>
						</li>
					))}
				</Menu>
				<NavIcon
					type="button"
					onClick={handleToggleNav}
					aria-label={toggle ? "close navigation menu" : "open navigation menu"}
					aria-expanded={toggle}
					aria-controls="mobile-navigation"
				>
					<Line open={toggle} />
					<Line open={toggle} isSecond />
					<Line open={toggle} />
				</NavIcon>
			</Nav>
			<OverLay open={toggle}>
				<OverLayMenu open={toggle} id="mobile-navigation">
					{navLinks.map((link) => (
						<li key={link.to}>
							<NavItem className="navItem" to={link.to} onClick={handleCloseNav}>
								{link.label}
							</NavItem>
						</li>
					))}
				</OverLayMenu>
			</OverLay>
		</Box>
	);
};

export default Header;
