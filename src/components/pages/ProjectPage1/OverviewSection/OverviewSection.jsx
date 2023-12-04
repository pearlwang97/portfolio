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
	fontSize: "2.5rem", // Smaller font size on small screens
	fontWeight: "bold",
	textAlign: "left",
	textTransform: "uppercase",
	paddingTop: "2rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "3rem", // 3rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "4rem", // Increase font size on medium devices and up
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
					<StyledNavItem href="#1-0">overview</StyledNavItem>
					<StyledNavItem href="#1-1">planning</StyledNavItem>
					<StyledNavItem href="#1-5">Prototype</StyledNavItem>
					
					<StyledNavItem href="#1-6">Test</StyledNavItem>
					<StyledNavItem href="#1-8">Finalize</StyledNavItem>
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
								<StyledP>UI/UX Designer</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>Tools</StyledListItemKey>
								<StyledP>Figma Illustrator</StyledP>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item sm={5} xs={12}>
								<StyledP>
									The objective of this project is to create a user-centered,
									modern interface for the existing Domino’s App using Figma and
									Adobe Illustrator in UI / UX Strategy 1 course (MDIA2540).
								</StyledP>
							</Grid>
							<Grid item sm={5} xs={12}>
								<StyledP>
									The primary aim of this project is to demonstrate how the
									student apply user research principles and utilize Figma &
									Adobe Illustrator effectively to construct UI elements and
									interactive design to enhance usability and user experience.
								</StyledP>
							</Grid>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									width: "100%",
									marginTop: "2rem",
									marginBottom: "2rem",
								}}
							>
								<StyledImage src="/images/domino.png" alt="domino" />
							</Box>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-1">Initial Planning and Research</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									The project began with a planning phase, identifying core
									problems and issues with the existing app interface and
									proposing solutions. This led to setting clear project
									objectives. User research was then initiated, gathering
									feedback from current users on platforms like Apple's App
									Store and Google Play.
								</StyledP>
							</Grid>
							<Grid item container xs={12} justifyContent="center">
								<StyledImage
									src="/images/project-1-gallery-4.jpeg"
									sx={{ width: "80%" }}
									alt="domino"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-2">Conduct Survey</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									The project began with a planning phase, identifying core
									problems and issues with the existing app interface and
									proposing solutions. This led to setting clear project
									objectives. User research was then initiated, gathering
									feedback from current users on platforms like Apple's App
									Store and Google Play.
								</StyledP>
							</Grid>
							<Grid item container xs={12} justifyContent="center">
								<StyledImage
									src="/images/project-1-gallery-5.png"
									sx={{ width: "80%" }}
									alt="domino"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-3">Competitive Analysis</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									A competitive analysis compared the Domino's App with the
									Boston Pizza App. Both apps shared similar features but
									differed in user ratings and feedback. This analysis offered
									valuable insights for the Domino’s App's improvement.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-4">Identify User Type</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									After the analysis, typical users of the Domino's mobile app
									were identified, leading to the creation of user personas and
									stories. This helped understand the user group and ensure the
									design resonated with actual users.
								</StyledP>
							</Grid>
							<Grid item container xs={12} justifyContent="center">
								<StyledImage
									src="/images/project-1-gallery-6.png"
									sx={{ width: "80%" }}
									alt="domino"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-5">Create Prototype</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									After the analysis, typical users of the Domino's mobile app
									were identified, leading to the creation of user personas and
									stories. This helped understand the user group and ensure the
									design resonated with actual users.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-6">Testing</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									After the analysis, typical users of the Domino's mobile app
									were identified, leading to the creation of user personas and
									stories. This helped understand the user group and ensure the
									design resonated with actual users.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-7">Refinement</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									After comprehensive testing and improvements, the project was
									finalized. The entire process was documented in a case study
									and presented to the class.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection sx={{mb: "2rem"}}>
						<Title id="1-8">Finalize the Project</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									Following the presentation, the project was revisited. Based
									on insights and critiques, additional screens were added to
									the design in Figma. Finally, several finishing touches were
									applied to complete the project.
								</StyledP>
							</Grid>
							<Grid item container xs={12} justifyContent="center">
								<StyledImage
									src="/images/project-1-gallery-7.png"
									sx={{ width: "80%" }}
									alt="domino"
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
