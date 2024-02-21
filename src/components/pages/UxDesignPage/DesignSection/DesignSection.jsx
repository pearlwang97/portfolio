import React from "react";
import { Box, useMediaQuery, useTheme, Tooltip } from "@mui/material";

import { styled } from "@mui/material/styles";
import Link from "components/shared/StyledLink/StyledLink";

const StyledContainer = styled(Box)(({ theme, marginBottom }) => ({
	width: "60%",
	maxWidth: "1140px",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-between",
	alignItems: "center",
	height: "auto",
	margin: "0 auto",
	marginBottom: marginBottom || 0,
	[theme.breakpoints.down("md")]: {
		width: "80%",
		textAlign: "left",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const TitleContainer = styled(Box)(({ theme, textAlign }) => ({
	containerType: "inline-size",
	fontSize: "1rem", // Smaller font size on small screens
	textAlign: textAlign,
	display: "flex",
	flexDirection: "row",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.5rem", // 2rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2rem", // Increase font size on medium devices and up
		flexDirection: "column",
	},
}));

const Divider = styled(Box)(({ theme, alignLeft }) => ({
	height: "1px",
	backgroundColor: "#250d00",
	marginLeft: alignLeft ? 0 : "auto",
	marginRight: alignLeft ? "auto" : 0,
	marginTop: "10px",
	marginBottom: "10px",
	width: "10%",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "10%",
	},
	[theme.breakpoints.up("md")]: {
		width: "25%",
	},
}));

const ImageContainer = styled(Box)(({ theme, width }) => ({
	width: "100%",
	position: "relative",
	[theme.breakpoints.up("sm")]: {
		width: "100%",
	},
	[theme.breakpoints.up("md")]: {
		width: width,
	},
}));

const SubTitle = styled("p")(({ textAlign, theme }) => ({
	fontSize: "0.875rem",
	fontWeight: "bold",
	margin: `0 0 5px 0`,
	textAlign: "left",
	[theme.breakpoints.up("sm")]: {
		fontSize: "0.7rem",
		textAlign: textAlign,
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1cqw",
		textAlign: textAlign,
	},
	fontFamily: "utopia-std, serif",
}));

const DesignDescription = styled("p")(({ textAlign, theme }) => ({
	fontSize: "0.8125rem",
	textAlign: "left",
	[theme.breakpoints.up("sm")]: {
		fontSize: "0.875rem",
		textAlign: textAlign,
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1cqw",
		textAlign: textAlign,
	},
}));

const Title = styled("h3")(({ theme }) => ({
	fontWeight: 600, // semi-bold
	fontSize: "0.875rem",
	[theme.breakpoints.up("sm")]: {
		// margin: '7px 0',
		fontSize: "0.875rem",
	},
	[theme.breakpoints.up("md")]: {
		// margin: '10px 0',
		fontSize: "7cqw",
	},
	"&:hover": {
		// Add this block
		textDecoration: "underline",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
});

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

const DesignSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
			}}
		>
			<StyledContainer marginBottom="30px">
				<ImageContainer width="58%">
					<Link to="/project-1">
						<StyledImage src="/images/design-1.png" alt="domino cover" />
					</Link>
				</ImageContainer>
				<ImageContainer width="36%">
					<TitleContainer textAlign="right">
						<Title>01</Title>
						{isMobile && <Title>&nbsp;</Title>}
						<Link to="/project-1">
							<Title>Domino’s APP Redesign</Title>
						</Link>
					</TitleContainer>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Goal</SubTitle>
					<DesignDescription>
						The objective of this project is to create a user-centered, modern
						interface for the existing Domino’s App using Figma and Adobe
						Illustrator. It highlights the application of user research
						principles and the strategic use of design tools to improve
						usability and user experience.
					</DesignDescription>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Role</SubTitle>
					<DesignDescription> UI/UX Designer</DesignDescription>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
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
						<Tooltip
							title="Adobe Illustrator"
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
							<StyledIcon src="/images/ai-logo.svg" alt="AI" />
						</Tooltip>
					</Box>
				</ImageContainer>
			</StyledContainer>
			<StyledContainer>
				<ImageContainer
					width="39%"
					sx={{
						order: isMobile ? 1 : 0,
					}}
				>
					<TitleContainer textAlign="left">
						<Title>02</Title>
						{isMobile && <Title>&nbsp;</Title>}
						<Link to="/project-2">
							<Title>Bloom APP Design</Title>
						</Link>
					</TitleContainer>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Goal</SubTitle>
					<DesignDescription sx={{ textAlign: isMobile ? "left" : "right" }}>
						The goal of this project is to create a user-friendly flower
						delivery app "Bloom" using Figma for the Project Management course
						(MDIA2092). As the UI/UX designer, Peirong collaborated with team
						members, including a developer, designer, and project manager,
						following the waterfall methodology. The project primarily showcases
						the student's ability to integrate user research principles into
						Figma, creating effective design components and fostering a seamless
						interactive design through team collaboration.
					</DesignDescription>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Role</SubTitle>
					<DesignDescription textAlign={isMobile ? "left" : "right"}>
						UI/UX Designer
					</DesignDescription>
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
						<StyledImage src="/images/design-2.png" alt="bloom photo" />
					</Link>
				</ImageContainer>
			</StyledContainer>
		</Box>
	);
};

export default DesignSection;
