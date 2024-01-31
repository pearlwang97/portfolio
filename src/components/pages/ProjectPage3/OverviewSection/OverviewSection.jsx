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
	fontSize: "16px",
	fontWeight: "semi-bold",
	justifyContent: "center",
	alignItems: "start",
	textAlign: "center",
	textTransform: "uppercase",
	transform: "rotate(180deg)",
	writingMode: "vertical-rl",
	textDecoration: "none",
	color: "inherit",
	marginBottom: "2rem",
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
					<StyledNavItem href="#overview">overview</StyledNavItem>
					<StyledNavItem href="#Inspiration">Inspiration</StyledNavItem>
					<StyledNavItem href="#outline">Outline</StyledNavItem>
					<StyledNavItem href="#coloring">coloring</StyledNavItem>
					<StyledNavItem href="#final">Finalization</StyledNavItem>
				</StyledNav>
				<StyledMainContainer>
					<StyledSection>
						<Title id="overview">OVERViEW</Title>
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
							<Grid item sm={5} xs={12}>
								<StyledP>
									The objective of this project was to showcase advanced
									proficiency in Adobe Illustrator by creating a realistic 2d
									radio vector design that emulates 3d object for the
									Illustration class (MDIA2166). It aims to demonstrate the
									student’s expertise as a digital designer, particularly in
									mastering the fundamental tools for shaping objects and
									intricacies of crafting vector designs.
								</StyledP>
							</Grid>
							<Grid item sm={5} xs={12}>
								<StyledP>
									The radio vector art project aimed to produce a
									photo-realistic 2d illustration that gives a 3d feel using
									only the basic tools available in Adobe Illustrator.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="Inspiration">Inspiration</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP mb="2rem">
									A reference photograph of a radio was carefully chosen since
									the radio provides a chance to capture intricate details from
									its varied components and mix of materials, and it is a
									challenging and interesting object to depict. This photo was
									then imported into Adobe Illustrator, where it was set as the
									foundational layer, providing a clear and precise guide for
									the details and proportions for the following process.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="outline">Structuring the outline</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12} sm={5}>
								<StyledP mb="2rem">
									In this process, the outline of the radio was precisely
									structured by using the pen tool. Each line was drawn with
									precision, ensuring that the final vector art closely
									resembles a real object.
								</StyledP>
							</Grid>
							<Grid item xs={12} sm={5}>
								<StyledImage
									src="/images/project-3-gallery-2.png"
									alt="radio gallery photo"
								/>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="coloring">Coloring</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12} sm={5}>
								<StyledP mb="2rem">
									The coloring phase was crucial. Most parts of the object were
									filled with shades of grey, which were derived by different
									tints of pure black by the color tool in adobe illustrator. To
									amplify realism, the free-form gradient tool was mostly used,
									this accurately captured the interplay of light and shadow on
									the radio and everything from reflections to subtle shadows,
									which ensured every detail mirrored a real-world 3d look.
								</StyledP>
							</Grid>
							<Grid item xs={12} sm={5}>
								<StyledImage
									src="/images/project-3-gallery-1.png"
									alt="radio gallery photo"
								/>
							</Grid>
							<Grid item xs={12}>
								<StyledP mb="2rem">
									The biggest challenge here was the numerous small holes in the
									radio, each of them required a distinct light and shadow
									effect. After a long time of tweaking them one by one, the
									final look was perfectly close to what it would look like in
									reality.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="final">Final touches</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12} sm={5}>
								<StyledImage src="/images/design-3.png" alt="radio gallery photo" />
							</Grid>
							<Grid item xs={12} sm={5}>
								<StyledP mb="2rem">
									In the final stage, more details were added to simulate the
									effect of the objects in 3d. Text and icons were incorporated
									into the digital display. To further enhance the realism of
									the digital graphic, a solid color background was added, and a
									reflection was created underneath the radio using a gradient
									transparency to simulate the reflection of a polished surface.
								</StyledP>
							</Grid>
							<Grid item xs={12}>
								<StyledP mb="2rem">
									Additionally, to capture a realistic texture, the grain
									texture effect in Adobe Illustrator was utilized and its
									properties were adjusted to achieve a real feel to the
									surface. Finally, a realistic 2d vector illustration of a
									radio was completed with its 3d essence.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
