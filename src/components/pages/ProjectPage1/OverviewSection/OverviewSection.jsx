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
						planning
					</StyledNavItem>
					<StyledNavItem
						to="1-3"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						design & development
					</StyledNavItem>
					<StyledNavItem
						to="1-5"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						Finalization
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
								<StyledP>UI/UX Designer</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>Tools</StyledListItemKey>
								<StyledP>Figma, Illustrator</StyledP>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									The objective of this project is to create a user-centered,
									modern interface for the existing Domino’s App using Figma and
									Adobe Illustrator. It highlights the application of user
									research principles and the strategic use of design tools to
									improve usability and user experience.
								</StyledP>
								<StyledImage src="/images/project-1-timeline.jpg" />
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-1">Initiation and Research</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<Box
									component="img"
									src="/images/project-1-problem.jpg"
									alt="Problem"
									sx={{
										float: "right",
										marginLeft: "20px",
										marginBottom: "10px",
										width: { sm: "100%", md: "50%" },
									}}
								/>
								<StyledP sx={{ marginTop: "1rem" }}>
									The project came out with an initial planning phase to
									identify the main issues with the current Domino's App
									interface and brainstorm solutions. Initial research involved
									collecting user feedback directly from platforms such as
									Apple's App Store and Google Play, and conducting a detailed
									survey via Google Forms to understand users' habits with
									Domino's. This dual approach ensured a solid foundation for
									user-centered design decisions.
								</StyledP>
								<Box
									component="img"
									src="/images/project-1-user-review.jpg"
									alt="Problem"
									sx={{
										marginBottom: "10px",
										width: { sm: "100%" },
									}}
								/>
							</Box>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-2">Competitive Analysis and User Insight</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								A detailed competitive analysis was conducted, comparing the
								Domino's App with its competitor, the Boston Pizza App, to
								identify strengths, weaknesses, and opportunities for
								improvement based on user ratings and feedback. Insights from
								this analysis helped in understanding the typical users of the
								Domino's App, leading to the creation of user personas and
								stories. This step was crucial for implementing the design to
								meet real user needs.
							</StyledP>
							<Box
								component="img"
								src="/images/project-1-competitive-analysis.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<Box
								component="img"
								src="/images/project-1-user-type.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-3">Design and Development</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								With a clear understanding of the user base, I moved to the
								design phase. The hand drawn wireframes were created to visually
								conceptualize the proposed changes and solutions, and then it
								turned into hi-fi wireframes and prototypes that incorporated
								user feedback and competitive insights. This prototype was then
								rigorously tested with identified user personas to ensure the
								design effectively addressed their needs and preferences.
							</StyledP>
							<Box
								component="img"
								src="/images/project-1-iteration.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-4">Testing</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								Testing revealed key areas for improvement, prompting a series
								of refinements to enhance the app's usability and user
								experience. Feedback from these sessions was integral in
								refining the design, ensuring the final product resonated with
								our target audience.
							</StyledP>
							<Box
								component="img"
								src="/images/project-1-test.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</StyledSection>
					<StyledSection sx={{ mb: "2rem" }}>
						<Title id="1-5">Finalization</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								The project culminated with the addition of final touches based
								on critique and insights from the presentation phase. Additional
								screens were developed in Figma, completing the redesign.
							</StyledP>
							<Box>
								<iframe
									width="450"
									height="500"
									src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfQF5Uochvt75Ijt4J4oe2X%2FDomino-Redesign%3Ftype%3Ddesign%26node-id%3D1-11%26t%3DiIeOpNetOoiM7BKO-1%26scaling%3Dscale-down%26page-id%3D1%253A2%26starting-point-node-id%3D1%253A619%26mode%3Ddesign"
									allowFullScreen
								></iframe>
							</Box>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
