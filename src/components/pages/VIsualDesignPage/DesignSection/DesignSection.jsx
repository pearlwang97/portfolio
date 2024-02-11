import React from "react";
import { Link } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { styled } from "@mui/material/styles";
// import Divider from "../../../Divider/Divider";

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

const StyledLink = styled(Link)({
	textDecoration: "none",
	color: "inherit",
});

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
					<StyledLink to="/project-3">
						<StyledImage src="/images/design-3.png" />
					</StyledLink>
				</ImageContainer>
				<ImageContainer width="36%">
					<TitleContainer textAlign="right">
						<Title>01</Title>
						{isMobile && <Title>&nbsp;</Title>}
						<StyledLink to="/project-3">
							<Title>2D Realistic Radio Vector Art</Title>
						</StyledLink>
					</TitleContainer>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Goal</SubTitle>
					<DesignDescription>
						The objective of this project was to showcase advanced proficiency
						in Adobe Illustrator by creating a realistic 2d radio vector design
						that emulates 3d object for the Illustration class (MDIA2166). It
						aims to demonstrate the student’s expertise as a digital designer,
						particularly in mastering the fundamental tools for shaping objects
						and intricacies of crafting vector designs.
					</DesignDescription>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Role</SubTitle>
					<DesignDescription> Graphic Designer</DesignDescription>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Tools</SubTitle>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<StyledIcon src="/images/ai-logo.svg" alt="AI" />
					</Box>
				</ImageContainer>
			</StyledContainer>
			<StyledContainer marginBottom="30px">
				<ImageContainer
					width="39%"
					sx={{
						order: isMobile ? 1 : 0,
					}}
				>
					<TitleContainer textAlign="left">
						<Title>02</Title>
						{isMobile && <Title>&nbsp;</Title>}
						<StyledLink to="/project-4">
							<Title>BloomBox Logo Deisgn</Title>
						</StyledLink>
					</TitleContainer>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Goal</SubTitle>
					<DesignDescription sx={{ textAlign: isMobile ? "left" : "right" }}>
						The aim of this assignment is to develop multiple logo variations
						for a product or service. This project highlights the student's
						skill in combining creativity with strategic branding, showcasing
						proficiency in visual design, brand consistency, and technical
						skills in Adobe Illustrator.
					</DesignDescription>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Role</SubTitle>
					<DesignDescription textAlign={isMobile ? "left" : "right"}>
						{" "}
						Graphic Designer
					</DesignDescription>
					<Divider width="25%" alignLeft={isMobile} />
					<SubTitle textAlign={isMobile ? "left" : "right"}>Tools</SubTitle>
					<Box
						sx={{
							display: "flex",
							justifyContent: isMobile ? "flex-start" : "flex-end",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<StyledIcon src="/images/ai-logo.svg" alt="AI" />
						<StyledIcon src="/images/ps-logo.svg" alt="PS" />
					</Box>
				</ImageContainer>
				<ImageContainer
					width="58%"
					sx={{
						order: isMobile ? 0 : 1,
					}}
				>
					<StyledLink to="/project-4">
						<StyledImage src="/images/design-4.png" alt="bloomBlox photo" />
					</StyledLink>
				</ImageContainer>
			</StyledContainer>
			<StyledContainer>
				<ImageContainer width="58%">
					<StyledLink to="/project-5">
						<StyledImage src="/images/design-5.jpg" />
					</StyledLink>
				</ImageContainer>
				<ImageContainer width="36%">
					<TitleContainer textAlign="right">
						<Title>03</Title>
						{isMobile && <Title>&nbsp;</Title>}
						<StyledLink to="/project-5">
							<Title>Papercut Illustrations: Chinese Zodiac Collection</Title>
						</StyledLink>
					</TitleContainer>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Goal</SubTitle>
					<DesignDescription>
						The aim of this project is to celebrate and promote Chinese cultural
						heritage through the fusion of traditional art and modern design by
						reimagining the Chinese zodiacs through the traditional art of
						papercutting.
					</DesignDescription>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Role</SubTitle>
					<DesignDescription> Graphic Designer</DesignDescription>
					<Divider width="25%" alignLeft={true} />
					<SubTitle textAlign="left">Tools</SubTitle>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<StyledIcon src="/images/ai-logo.svg" alt="AI" />
						<StyledIcon src="/images/ps-logo.svg" alt="PS" />
					</Box>
				</ImageContainer>
			</StyledContainer>
		</Box>
	);
};

export default DesignSection;
