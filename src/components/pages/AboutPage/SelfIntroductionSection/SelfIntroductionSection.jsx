import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-between",
	alignItems: "center",
	height: "auto",
	margin: "0 auto",
	// marginBottom: marginBottom || 0,
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const SpinImage = styled("img")({
	animation: "spin 4s linear infinite",
	height: "auto",
	"@keyframes spin": {
		from: {
			transform: "rotate(0deg)",
		},
		to: {
			transform: "rotate(360deg)",
		},
	},
});

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
});

const StyledH2 = styled("h2")(({ theme }) => ({
	fontSize: "2.5rem",
	fontWeight: "semi-bold",
	textAlign: "left",
	fontSize: "7cqw",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledP = styled("p")(({ theme }) => ({
	fontSize: "3cqw",
	textAlign: "left",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.25rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const ImageContainer = styled(Box)(({ theme, width }) => ({
	width: "100%",
	position: "relative",
	[theme.breakpoints.up("sm")]: {
		width: width,
	},
	[theme.breakpoints.up("md")]: {
		width: width,
	},
}));

const LearnMoreButton = styled("button")({
	backgroundColor: "#dba39a",
	color: "#250d00",
	textDecoration: "none",
	border: "none",
	width: "9rem",
	textAlign: "center",
	fontFamily: "'Montserrat', sans-serif",
	fontWeight: "600", // semi-bold
	fontSize: "15px",
	borderRadius: "7px",
	padding: "10px 10px",
	marginTop: "20px",
	"&:hover": {
		backgroundColor: "#F0DBDB",
		color: "#250D00",
	},
});

const SelfIntroductionSection = () => {
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
			<StyledContainer>
				<ImageContainer sx={{ position: "relative" }} width="31%">
					<StyledImage
						src="/images/about-me-selfie.JPG"
						alt="peirong wang selfies"
					/>
					<SpinImage
						sx={{
							width: "20%",
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 2,
						}}
						src="/images/flower.png"
						alt="spinning flower"
					/>
				</ImageContainer>
				<ImageContainer
					width="61%"
					sx={{ containerType: "inline-size", textAlign: "left" }}
				>
					<StyledH2>Hiii</StyledH2>
					<StyledH2>I'm Peirong!</StyledH2>
					<StyledP sx={{ lineHeight: "2rem" }}>
						I'm passionate with a love for design. Born in China and having
						relocated to Vancouver during my high school years, I've had the
						chance to experience two distinct worlds and cultures. My past
						experience enhanced my adaptability and approach things with an
						inclusive and diverse mindset.
					</StyledP>
					<StyledP sx={{ lineHeight: "2rem" }}>
						Driven by a foundational background in economics from the University
						of Victoria, my journey into New Media was serendipitous. I stumbled
						upon my passion for digital design after graduation. Now in my
						career, I aim to establish myself as a digital designer. I want to
						blend my knowledge of marketing strategy with my technical design
						expertise to provide a positive user experience.
					</StyledP>
					<StyledP sx={{ lineHeight: "2rem" }}>
						I believe design builds a channel for communication, connecting my
						thoughts and ideas with my audience. Therefore, I aspire to create
						design works that offer solutions and build connections with people.
					</StyledP>
					<a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
						<LearnMoreButton>Resume</LearnMoreButton>
					</a>
				</ImageContainer>
			</StyledContainer>
		</Box>
	);
};

export default SelfIntroductionSection;
