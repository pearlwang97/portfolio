import React from "react";

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
	border: "1px solid #6b6b6b",
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
	paddingTop: "1.5rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "2rem", // 3rem font size on small devices and up
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

const StyledNavItem = styled("a")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
	color: "inherit",
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
}));

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
});

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
	gap: "1rem",
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
					<StyledNavItem href="#1">overview</StyledNavItem>
					<StyledNavItem href="#2">Brainstorm</StyledNavItem>
					<StyledNavItem href="#3">logo sketch</StyledNavItem>
					<StyledNavItem href="#4">logo design</StyledNavItem>
					<StyledNavItem href="#5">Typography and Color</StyledNavItem>
					<StyledNavItem href="#6">Branding Finalization</StyledNavItem>
				</StyledNav>
				<StyledMainContainer>
					<StyledSection>
						<Title id="1">OVERViEW</Title>
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
							<Grid item sm={6} xs={12}>
								<StyledP>
									The aim of this assignment is to develop multiple logo
									variations for a product or service. This project highlights
									the student's skill in combining creativity with strategic
									branding, showcasing proficiency in visual design, brand
									consistency, and technical skills in Adobe Illustrator.
								</StyledP>
							</Grid>
							<Grid item sm={5} xs={12}>
								<StyledP>
									BloomBox, a Vancouver-based floral service, offers convenient
									flower purchase options, including one-time buys and a monthly
									subscription. Their signature service is a mystery box with a
									themed assortment of fresh flowers delivered periodically.
								</StyledP>
							</Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-4-galler-3.png"
									alt="bloombox gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2">Brainstorming</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12} sm={6}>
								<StyledP mb="2rem">
									The brainstorming phase focused on integrating BloomBox’s
									essence into the design, combining floral elements with their
									distinct box delivery. The designs aimed for simplicity and
									modernity, reflecting bloom, growth, and tranquility.
								</StyledP>
							</Grid>
							<Grid item xs={12} sm={5}>
								<StyledImage
									src="/images/project-4-gallery-4.jpeg"
									alt="bloombox"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="3">Logo Sketch</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12}>
								<StyledP mb="2rem">
									The sketching phase produced six unique designs, blending
									geometric shapes with abstract floral motifs, setting the
									direction for the final logos.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="4">Logo Design</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12} sm={5}></Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-4-gallery-5.png"
									alt="bloombox gallery photo"
									sx={{ float: "left", width: "50%", marginRight: "2rem" }}
								/>
								<StyledP mb="2rem">
									Out of the sketches, one was chosen to develop the primary
									logo, secondary logo, and submark. The primary logo featured
									an abstract flower in a square, symbolizing petal unfolding
									and the delivery box. The secondary logo presented the brand
									name horizontally, while the submark offered a minimalistic
									take on BloomBox’s "B," maintaining brand consistency.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="5">Typography and Color</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid
								item
								container
								xs={12}
								mb="2rem"
								alignItems="center"
								justifyContent="center"
							>
								<StyledP mb="2rem">
									Antipol VF was selected as the primary font for its modernity,
									and Century Gothic Pro as the secondary font for clarity. The
									color palette consisted of soft pastels in pink and green,
									representing flowers and leaves, complemented by off-white for
									contrast and readability.
								</StyledP>
								<StyledImage
									sx={{ float: "right", width: "80%" }}
									src="/images/project-4-gallery-6.png"
									alt="bloombox gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="6">Branding Finalization</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12} sm={3}>
								<StyledP mb="2rem">
									The final stage combined the selected colors and typography,
									culminating in the complete BloomBox logo.
								</StyledP>
							</Grid>
							<Grid item xs={12} sm={8} mb="2rem">
								<StyledImage
									src="/images/project-4-gallery-1.png"
									alt="bloombox"
								/>
							</Grid>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
