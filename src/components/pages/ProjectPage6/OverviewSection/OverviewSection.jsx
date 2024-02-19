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
						Conceptualization
					</StyledNavItem>
					<StyledNavItem
						to="1-2"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						design
					</StyledNavItem>
					<StyledNavItem
						to="1-3"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						Composition
					</StyledNavItem>
					<StyledNavItem
						to="1-4"
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
								<StyledP>MAR - APR 2023</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>ROLE</StyledListItemKey>
								<StyledP>Graphic Designer</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>Tools</StyledListItemKey>
								<StyledP>Photoshop，Illustrator</StyledP>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<StyledP>
									The 'Cyber Era' poster was created to deliver a compelling
									visual narrative for a digital audience, blending photography
									with original vector illustrations in a non-destructive manner
									to demonstrate the application of design principles and
									technical skill.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-1">Conceptualization</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<StyledP sx={{ marginTop: "1rem" }}>
									The design process began with selecting a character to serve
									as the focal point of the poster. The character's image was
									refined to fit the futuristic concept by digitally painting
									over a created mask, enhancing the hair and body with smooth
									gradients, subtle shading, and highlights to add depth and a
									surreal appearance. The eyeballs were colored to shift from a
									natural human look to a more robotic appearance, aligning with
									the cybernetic theme.
								</StyledP>
								<Box
									component="img"
									src="/images/project-6-concept.jpg"
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
						<Title id="1-2">Design</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								Attention then turned to integrating goggles, which were
								designed in Illustrator and brought into Photoshop for
								enhancement. Here, they received a realistic glow and
								three-dimensional appearance through strategic use of bevel,
								emboss, and overlay layers, further anchoring the character in a
								futuristic realm.
							</StyledP>
							<Box
								component="img"
								src="/images/cyber-era-glass.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<Box sx={{ display: "block" }}>
								<Box
									component="img"
									src="/images/cyber-era-vertical.jpg"
									alt="Problem"
									sx={{
										float: "right",
										marginLeft: "20px",
										marginBottom: "10px",
										width: { sm: "100%", md: "50%" },
									}}
								/>
								<StyledP>
									Next I proceeded to create cybernetic details, using the pen
									tool to draw lines across the body and face, simulating
									artificial carvings by applying bevel and emboss effects. To
									depict the AI robot's inner mechanics, I layered photographs
									of electronic components beneath the carved facial features,
									using adjustment layers and the pen tool to achieve a humanoid
									appearance. The arms were created utilizing a photograph of a
									microchip to maintain the cybernetic theme.
								</StyledP>
							</Box>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-3">Composition</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								The background was composed of a cityscape photo merged with
								line art vectors from Illustrator, enriched with sparkling
								diamond shapes, smoke effects, and a Matrix-inspired binary code
								rain. This binary code was transformed from text to shapes and
								layered to create depth, then highlighted with glow effects to
								underscore the cyber atmosphere.
							</StyledP>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-4">Finalization</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<StyledP>
								To finalize the visual concept, I incorporated a digital glitch
								effect that simulated the appearance of a technological
								malfunction. This was achieved by employing a palette of
								contrasting neon colors that stand out against the composition.
								With the visual narrative nearly complete, the next step was to
								overlay the typography. Additional adjustments were made across
								the design to ensure visual harmony and to solidify the
								connection between the poster elements and the narrative of the
								TV series.
							</StyledP>
							<Box
								component="img"
								src="/images/cyber-era-final.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<StyledP>
								All elements are from real photographs or vectors I made. And
								aim to create a non-destructive design. Creative and skilled
								usage of the Principles of Design and Elements of Art.
								Compositional Unity achieved.Creative and exemplary technical
								usage of tools that also reinforces the image content.
								Inventive, complex or superior technical skills demonstrated in
								file construction.
							</StyledP>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
