import React from "react";

import { Link } from "react-scroll";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	height: "auto",
	margin: "0 auto",
	// marginTop: "calc(60px + 3rem)",
	display: "grid",
	columnGap: "2rem",
	gridTemplateColumns: "auto 1fr",
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
		// marginTop: "calc(60px + 2rem)",
	},
}));

const StyledMainContainer = styled(Box)(({ theme }) => ({
	overflow: "hidden",
	position: "relative",
	// border: "1px solid #6b6b6b",
	borderRadius: "50px",
	[theme.breakpoints.down("sm")]: {
		border: "none",
	},
}));

const StyledSection = styled(Box)(({ theme }) => ({
	padding: "0",
	textAlign: "left",
	[theme.breakpoints.up("sm")]: {
		padding: "0 2rem",
	},
}));

const Title = styled("h3")(({ theme }) => ({
	fontSize: "1rem", // Smaller font size on small screens
	fontWeight: "bold",
	textAlign: "left",
	textTransform: "uppercase",
	paddingTop: "2rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.5rem", // 3rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2rem", // Increase font size on medium devices and up
	},
}));

const StyledListItemKey = styled("span")(({ theme }) => ({
	fontSize: "1rem",
	fontWeight: "bold",
	paddingRight: "0.5rem",
	textTransform: "uppercase",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.2rem",
	},
}));

const StyledP = styled("p")(({ theme, mb }) => ({
	fontSize: "1rem",
	fontWeight: "normal",
	marginBottom: mb || "0.5rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.2rem",
	},
}));

const StyledListItem = styled("li")(({ theme }) => ({
	paddingButtom: "0.7rem",
	[theme.breakpoints.up("sm")]: {
		display: "grid",
		gridColumnGap: "1rem",
		columnGap: "1rem",
		gridTemplateColumns: "30% 70%",
		padding: "0.25rem 0",
	},
}));

const StyledList = styled("ul")(({ theme }) => ({
	listStyle: "none",
	padding: "2rem 0",
	verticalAlign: "initial",
	[theme.breakpoints.up("md")]: {
		padding: "3rem 0",
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
	"&:hover": {
		color: "inherit",
		textDecoration: "none",
	},
	"&:visited": {
		color: "inherit", // Add this line
	},
	"&.active": {
		textDecoration: "underline",
	},
}));

const Divider = styled(Box)(({ theme }) => ({
	marginTop: "10px",
	marginBottom: "10px",
	width: "100%",
	borderBottom: "1px solid #6b6b6b",
	margin: "10px auto",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "100%",
	},
	[theme.breakpoints.up("md")]: {
		width: "100%",
	},
}));

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

const OverviewSection = () => {
	return (
		<Grid
			container
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				justifyContent: "center",
			}}
		>
			<StyledContainer>
				<StyledNav>
					<StyledNavItem
						to="1-0"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						overview
					</StyledNavItem>
					<StyledNavItem
						to="1-1"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						BRAINSTORM
					</StyledNavItem>
					<StyledNavItem
						to="1-2"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						LOGO DESIGN
					</StyledNavItem>
					<StyledNavItem
						to="1-3"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						TYPOGRAPHY AND COLOR
					</StyledNavItem>
					<StyledNavItem
						to="1-4"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						FINALIZATION
					</StyledNavItem>
				</StyledNav>
				<StyledMainContainer>
					<StyledSection>
						<Title id="1-0">OVERViEW</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<StyledList>
							<StyledListItem>
								<StyledListItemKey>TIMELINE</StyledListItemKey>
								<StyledP>MAY - JUN 2023</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>ROLE</StyledListItemKey>
								<StyledP>Graphic Designer</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>Tools</StyledListItemKey>
								<StyledP>Illustrator</StyledP>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item>
								<StyledP>
									The aim of this assignment is to develop multiple logo
									variations for a product or service. This project highlights
									the student's skill in combining creativity with strategic
									branding, showcasing proficiency in visual design, brand
									consistency, and technical skills in Adobe Illustrator.
								</StyledP>
								<StyledP>
									BloomBox, a Vancouver-based floral service, offers convenient
									flower purchase options, including one-time buys and a monthly
									subscription. Their signature service is a mystery box with a
									themed assortment of fresh flowers delivered periodically.
								</StyledP>
							</Grid>
							<Box
								component="img"
								src="/images/bloom-box-overview.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-1">BRAINSTORM</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<StyledP sx={{ marginTop: "1rem" }}>
									The brainstorming phase focused on integrating BloomBox’s
									essence into the design, combining floral elements with their
									distinct box delivery. The designs aimed for simplicity and
									modernity, reflecting bloom, growth, and tranquility.
								</StyledP>
								<Box
									component="img"
									src="/images/bloom-box-brainstorm.jpg"
									alt="concept"
									sx={{
										marginBottom: "10px",
										width: { sm: "100%" },
									}}
								/>
							</Box>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-2">LOGO DESIGN</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								In the sketching phase, I came up with six designs that combined
								geometric shapes and abstract floral patterns. These sketches
								laid the groundwork for the final logos.
							</StyledP>
							<StyledP>
								From these initial ideas, I selected one to develop into the
								main logo, a secondary logo, and a submark. The main logo
								showcases an abstract flower inside a square, representing a
								petal unfolding and a delivery box. The secondary logo displays
								the brand name in a horizontal layout. The submark simplifies
								BloomBox's "B," ensuring the brand remains consistent across all
								versions.
							</StyledP>
							<Box
								component="img"
								src="/images/bloom-box-logo-design.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-3">TYPOGRAPHY AND COLOR</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								Antipol VF was selected as the primary font for its modernity,
								and Century Gothic Pro as the secondary font for clarity. The
								color palette consisted of soft pastels in pink and green,
								representing flowers and leaves, complemented by off-white for
								contrast and readability.
							</StyledP>
							<Box
								component="img"
								src="/images/bloom-box-color.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-4">FINALIZATION</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								In the final stage, I brought together the chosen colors and
								typography to finalize the BloomBox logo. We also created
								mockups to showcase the logo in various applications.
							</StyledP>
							<Box
								component="img"
								src="/images/bloom-box-final.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
