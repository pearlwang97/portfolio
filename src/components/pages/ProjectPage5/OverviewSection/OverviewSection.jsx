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
				{/* <StyledNav>
					<StyledNavItem href="#1">overview</StyledNavItem>
					<StyledNavItem href="#2">inspiration</StyledNavItem>
					<StyledNavItem href="#3">graphic design</StyledNavItem>
					<StyledNavItem href="#4">finalization</StyledNavItem>
				</StyledNav> */}
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
						inspiration
					</StyledNavItem>
					<StyledNavItem
						to="1-2"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						graphic design
					</StyledNavItem>
					<StyledNavItem
						to="1-3"
						spy={true}
						smooth={true}
						duration={500}
						activeClass="active"
					>
						finalization
					</StyledNavItem>
				</StyledNav>
				<StyledMainContainer>
					<StyledSection>
						<Title id="1-0">OVERViEW</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<StyledList>
							<StyledListItem>
								<StyledListItemKey>TIMELINE</StyledListItemKey>
								<StyledP>Dec - Jan 2024</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>ROLE</StyledListItemKey>
								<StyledP>Graphic Designer</StyledP>
							</StyledListItem>
							<StyledListItem>
								<StyledListItemKey>Tools</StyledListItemKey>
								<StyledP>Illustrator, Photoshop</StyledP>
							</StyledListItem>
						</StyledList>
						<Grid container justifyContent="space-between">
							<Grid item sm={12} xs={12}>
								<StyledP>
									The Chinese zodiac is a big part of Chinese traditions, it is
									a classification scheme based on the lunar calendar, the cycle
									repeats every 12 years with a represented zodiac animal. This
									assigns an animal to every person, these animals are: rat, ox,
									tiger, rabbit, dragon, snake, horse, goat, monkey, rooster,
									dog and pig, each one has unique attributes. As a Chinese
									individual living in a Western country, I've always wanted to
									showcase the Chinese zodiac in a fun and modern way to a
									broader audience. The aim of the "Chinese Zodiac Collection"
									project is to celebrate and promote Chinese cultural heritage
									through the fusion of traditional art and modern design by
									reimagining the Chinese zodiacs through the traditional art of
									papercutting. Through this project, I would like to connect
									people across cultures with the beauty and wisdom of the
									Chinese zodiac. The final deliverables include a mock-up
									informational website about the Chinese zodiacs and design
									mockups, including red bag designs.
								</StyledP>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-1">INSPIRATION</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								{/* <StyledImage
									sx={{
										float: "right",
										width: "30%",
									}}
									src="/images/project-5-gallery-2.jpg"
									alt="chinese zodiac gallery image 2"
								/> */}
								<Box
									component="img"
									src="/images/project-5-gallery-2.jpg"
									alt="Problem"
									sx={{
										float: "right",
										marginLeft: "20px",
										marginBottom: "10px",
										width: { sm: "100%", md: "50%" },
									}}
								/>
								<StyledP>
									In this initial phase, inspiration was drawn from ancient
									Chinese art and symbols, including Dunhuang drawings and
									traditional motifs. The goal was to present the 12 Chinese
									zodiac signs through traditional paper cut shapes, aiming to
									incorporate the Ruyi pattern and wheel for a unique
									representation of all 12 animals. Complementary elements
									associated with the Chinese New Year, such as auspicious
									clouds, gold coins, and plum blossoms were selected to enrich
									the designs and highlight the cultural significance of the
									zodiac.
								</StyledP>
								<StyledP mb="2rem">
									In the color selection process, I wanted a modern twist on the
									traditional Chinese red, choosing a rich brick red
									complemented by a soft cream. This palette showcases the
									historical roots of the art form while introducing a
									contemporary elegance.
								</StyledP>
							</Box>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-2">GRAPHIC DESIGN</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12}>
								<StyledP mb="2rem">
									Using Adobe Illustrator, each zodiac sign was designed with a
									focus on realism transformed into paper cuts. The designs were
									infused with classic Chinese elements and symbols reflecting
									the unique character and cultural significance of each animal.
									The incorporation of Chinese typography next to each zodiac
									sign added a sense of cultural authenticity and visual
									interest. This decision aimed to enhance the overall narrative
									of the collection.
								</StyledP>
							</Grid>
							<Grid item container xs={12}>
								<Grid item xs={12} sm={2.65}>
									<StyledImage
										src="/images/project-5-gallery-3.jpg"
										alt="chinese zodiac gallery image 3"
									/>
								</Grid>
								<Grid item xs={12} sm={9.35}>
									<StyledImage
										src="/images/project-5-gallery-4.jpg"
										alt="chinese zodiac gallery image 4"
									/>
								</Grid>
							</Grid>
						</Grid>
					</StyledSection>
					<StyledSection>
						<Title id="1-3">FINALIZATION</Title>
						<Divider width="90%" sx={{ paddingTop: "1.2rem" }} />
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs={12}>
								<StyledP mb="2rem">
									The final step involved bringing the illustrations to life
									through mockups created in Illustrator and Photoshop. This
									stage was about showcases practical applications and engaging
									presentations of the zodiac signs, aiming to make the artwork
									more relatable.
								</StyledP>
							</Grid>
						</Grid>
						<Grid item container xs={12}>
							<Grid item xs={12} sm={5.85}>
								<StyledImage
									src="/images/project-5-gallery-1.jpg"
									alt="chinese zodiac gallery image 3"
								/>
							</Grid>
							<Grid item xs={12} sm={6.15}>
								<StyledImage
									src="/images/project-5-gallery-5.jpg"
									alt="chinese zodiac gallery image 4"
								/>
							</Grid>
							<StyledImage
								src="/images/chinese-zodiac-banner.jpg"
								alt="chinese zodiac gallery image 4"
							/>
						</Grid>
					</StyledSection>
				</StyledMainContainer>
			</StyledContainer>
		</Grid>
	);
};

export default OverviewSection;
