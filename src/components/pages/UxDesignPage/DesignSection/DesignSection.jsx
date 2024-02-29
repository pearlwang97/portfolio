import React from "react";
import { Box, useMediaQuery, useTheme, Tooltip } from "@mui/material";

import { styled } from "@mui/material/styles";
import Link from "components/shared/StyledLink/StyledLink";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Body1 from "components/shared/Body1/Body1";
import H3 from "components/shared/H3/H3";
import Divider from "components/shared/Divider/Divider";
import IconTooltip from "components/shared/IconTooltip/IconTooltip";
import Image from "components/shared/Image/Image";

const TitleContainer = styled(Box)(({ theme, textAlign }) => ({
	containerType: "inline-size",
	textAlign: textAlign,
	display: "flex",
	flexDirection: "row",
	[theme.breakpoints.up("md")]: {
		flexDirection: "column",
	},
}));

const ImageContainer = styled(Box)(({ theme, width }) => ({
	width: "100%",
	position: "relative",
	[theme.breakpoints.up("md")]: {
		width: "100%",
	},
	[theme.breakpoints.up("lg")]: {
		width: width,
	},
}));

const SubTitle = styled("H3")(({ textAlign, theme }) => ({
	fontSize: "1.3rem",
	fontWeight: "bold",
	margin: `0 0 5px 0`,
	textAlign: textAlign,
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.1rem",
		textAlign: "left",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.1",
		textAlign: "left",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledIcon = styled("img")(({ theme }) => ({
	height: "24px",
	width: "auto",
	[theme.breakpoints.up("sm")]: {
		height: "30px", // Increase height on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		height: "2cqw", // Increase height on medium devices and up
	},
}));

const StyledH3 = styled(H3)(({ theme, textAlign }) => ({
	"&:hover": {
		// Add this block
		textDecoration: "underline",
	},
	margin: 0,
	textAlign: textAlign,
	[theme.breakpoints.down("lg")]: {
		textAlign: "left",
	},
}));

const DesignSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<>
			<MainContainer
				sx={{
					marginBottom: "30px",
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<ImageContainer width="58%">
					<Link to="/project-1">
						<Image src="/images/design-1.png" alt="domino cover" />
					</Link>
				</ImageContainer>
				<ImageContainer width="36%">
					<TitleContainer>
						<Link to="/project-1">
							{!isMobile && (
								<>
									<StyledH3 textAlign="left">01</StyledH3>
									<StyledH3 textAlign="left">Domino’s APP Redesign</StyledH3>
								</>
							)}
							{isMobile && <StyledH3> 01 Domino’s APP Redesign</StyledH3>}
						</Link>
					</TitleContainer>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Goal</SubTitle>
					<Body1>
						The objective of this project is to create a user-centered, modern
						interface for the existing Domino’s App using Figma and Adobe
						Illustrator. It highlights the application of user research
						principles and the strategic use of design tools to improve
						usability and user experience.
					</Body1>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Role</SubTitle>
					<Body1> UI/UX Designer</Body1>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<IconTooltip title="Figma">
							<StyledIcon src="/images/figma-logo.svg" alt="Figma" />
						</IconTooltip>
						<IconTooltip title="Illustrator">
							<StyledIcon src="/images/ai-logo.svg" alt="AI" />
						</IconTooltip>
					</Box>
				</ImageContainer>
			</MainContainer>
			<MainContainer
				sx={{
					marginBottom: "30px",
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<ImageContainer
					width="39%"
					sx={{
						order: isMobile ? 1 : 0,
					}}
				>
					<TitleContainer textAlign="left">
						<Link to="/project-2">
							{!isMobile && (
								<>
									<StyledH3 textAlign="right">02</StyledH3>
									<StyledH3 textAlign="right">Bloom APP Design</StyledH3>
								</>
							)}
							{isMobile && <StyledH3> 01 Domino’s APP Redesign</StyledH3>}
						</Link>
					</TitleContainer>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Goal</SubTitle>
					<Body1 sx={{ textAlign: isMobile ? "left" : "right" }}>
						The goal of this project is to create a user-friendly flower
						delivery app "Bloom" using Figma for the Project Management course
						(MDIA2092). As the UI/UX designer, Peirong collaborated with team
						members, including a developer, designer, and project manager,
						following the waterfall methodology. The project primarily showcases
						the student's ability to integrate user research principles into
						Figma, creating effective design components and fostering a seamless
						interactive design through team collaboration.
					</Body1>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Role</SubTitle>
					<Body1
						sx={{
							textAlign: isMobile ? "left" : "right",
						}}
					>
						UI/UX Designer
					</Body1>
					<Box
						sx={{
							display: "flex",
							justifyContent: isMobile ? "flex-start" : "flex-end",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<Tooltip
							title="Figma"
							componentsProps={{
								tooltip: {
									sx: {
										fontSize: "0.75rem",
										textAlign: "center",
										backgroundColor: "#dba39a",
										color: "#fff",
										fontFamily: "montserrat, sans-serif",
										borderRadius: "4px",
										padding: "10px",
									},
								},
							}}
						>
							<StyledIcon src="/images/figma-logo.svg" alt="Figma" />
						</Tooltip>
					</Box>
				</ImageContainer>
				<ImageContainer
					width="58%"
					sx={{
						order: isMobile ? 0 : 1,
					}}
				>
					<Link to="/project-2">
						<Image src="/images/design-2.png" alt="bloom photo" />
					</Link>
				</ImageContainer>
			</MainContainer>
		</>
	);
};

export default DesignSection;
