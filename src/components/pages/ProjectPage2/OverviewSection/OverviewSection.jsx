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
	// [theme.breakpoints.up("sm")]: {
	// 	fontSize: "1.2rem",
	// },
}));

const Body1 = styled("p")(({ theme, mb }) => ({
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
					<StyledNavItem id="2-1">overview</StyledNavItem>
					<StyledNavItem id="2-3">USER INTERVIEW</StyledNavItem>
					<StyledNavItem id="2-5">ANALYSIS</StyledNavItem>
					<StyledNavItem id="2-7">DEVELOPMENT</StyledNavItem>
					<StyledNavItem href="#2-9">FINALIZATION</StyledNavItem>
				</StyledNav>
				<StyledMainContainer>
					<StyledSection>
						<Title id="2-1">OVERViEW</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<StyledList>
							<StyledListItem>
								<StyledListItemKey>
									<Body1>TIMELINE</Body1>
								</StyledListItemKey>
								<Body1>MAY - JUN 2023</Body1>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>
									<Body1>ROLE</Body1>
								</StyledListItemKey>
								<Body1>UI/UX Designer</Body1>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>
									<Body1>Tools </Body1>
								</StyledListItemKey>
								<Body1>Figma, Illustrator</Body1>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item sm={5} xs={12}>
								<Body1>
									The objective of this project is to create a user-centered,
									modern interface for the existing Domino’s App using Figma and
									Adobe Illustrator in UI / UX Strategy 1 course (MDIA2540).
								</Body1>
							</Grid>
							<Grid item sm={5} xs={12}>
								<Body1>
									The primary aim of this project is to demonstrate how the
									student apply user research principles and utilize Figma &
									Adobe Illustrator effectively to construct UI elements and
									interactive design to enhance usability and user experience.
								</Body1>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-2">Initial Research</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									The project started with extensive research, focusing on the
									main challenge: making flower purchasing and delivery more
									accessible. Target groups were identified as consumers seeking
									effortless flower gifting and streamlined order management.
									The goal for Bloom was to simplify online flower purchasing.
								</Body1>
							</Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-2-gallery-5.png"
									alt="bloom gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-3">User Interview</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									Five users were interviewed to understand their experiences
									with online flower services. Insights revealed preferences for
									simplicity in sign-up processes, punctuality, and quality in
									service. Many favored pre-designed bouquets over customizable
									options, influencing the app's design approach.
								</Body1>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-4">Create Persona and User Story</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									From these interviews, a user persona emerged: a busy
									professional female who prefers an easy online shopping
									experience with curated bouquet options. A user story was
									developed, focusing on this persona's needs and challenges.
								</Body1>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-5">Competitive Analysis</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									A comparison of two flower delivery apps, Flo and Interflora,
									was conducted. The analysis highlighted design flaws in
									existing apps, particularly in intuitiveness, guiding Bloom's
									design to focus on a more user-friendly experience.
								</Body1>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-6">Generate User Flow and Sitemap</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									A user flow was created, mapping out the customer's journey
									from browsing to purchase. A sitemap followed, laying out the
									app's structure to ensure an easy user experience.
								</Body1>
							</Grid>
							<Grid item xs={12}>
								<Body1>
									A user flow was created, mapping out the customer's journey
									from browsing to purchase. A sitemap followed, laying out the
									app's structure to ensure an easy user experience.
								</Body1>
							</Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-2-gallery-6.jpeg"
									alt="domino gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-7">Design Development</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									An initial paper wireframe was developed, later digitized in
									Figma as a black-and-white design. This focused on usability,
									minimizing distractions. Based on the graphic designer's style
									tile, UI elements were produced and integrated into a Figma
									design system. Detailed mockups were created in Figma and
									enhanced into interactive prototypes, simulating real app
									behavior.
								</Body1>
							</Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-2-gallery-7.png"
									alt="domino gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="2-8">Testing</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									User testing with four individuals revealed the need for a
									review function in the app. Based on this feedback, a review
									feature was added to enhance the design.
								</Body1>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection sx={{ marginBottom: "2rem" }}>
						<Title id="2-9">Refinement and Finalization</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									The completed project was presented to the class, receiving
									feedback from an instructor-client perspective.
									Post-presentation, the project underwent a self-review.
									Adjustments were made to improve color contrast for better
									accessibility. With these final changes, the Bloom project was
									concluded.
								</Body1>
							</Grid>
							<Grid item xs={12}>
								<StyledImage
									src="/images/project-2-gallery-8.png"
									alt="domino gallery photo"
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
