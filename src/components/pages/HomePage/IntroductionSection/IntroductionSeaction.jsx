import React, { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import "./IntroductionSection.css";

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
});

const Introduction = styled("div")(({ theme }) => ({
	fontSize: "0.875rem", // Smaller font size on small screens
	marginTop: "5px",
	fontFamily: "'Montserrat', sans-serif",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		fontSize: "1rem", // 1.5rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		marginTop: "10px",
		fontSize: "1.25rem", // Increase font size on medium devices and up
	},
}));

const StyledLink = styled(Link)({
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
	},
});

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
		order: 1,
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
		order: 1,
	},
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
	width: "100%", // Full width on small screens
	height: "auto",
	order: 1,
	[theme.breakpoints.up("sm")]: {
		width: "44.5%", // 70% width on small devices and up
		order: 2,
	},
	[theme.breakpoints.up("md")]: {
		width: "44.5%", // 44.5% width on medium devices and up
		order: 2,
	},
}));

const StyledScrollTrigger = styled(ScrollTrigger)({});
const StyledHello = styled("p")(({ theme }) => ({
	fontSize: "1rem", // Smaller font size on small screens
	fontFamily: "'Montserrat', sans-serif",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.5rem", // 2rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2rem", // Increase font size on medium devices and up
	},
}));

const StyledName = styled("p")(({ theme }) => ({
	backgroundColor: "#DBA39A",
	color: "#FEFCF3",
	display: "inline-block",
	fontSize: "1.25rem", // Smaller font size on small screens
	width: "auto",
	marginTop: "10px",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.875rem", // 3rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2.5rem", // Increase font size on medium devices and up
	},
}));

const Designer = styled("div")(({ theme }) => ({
	fontSize: "1.5rem", // Smaller font size on small screens
	fontWeight: "600", // semi-bold
	fontFamily: "'New York', serif",
	marginTop: "10px",
	transition: "opacity 1s ease-in-out", // Add this line
	[theme.breakpoints.up("sm")]: {
		fontSize: "2.25rem", // 3rem font size on small devices and up
		textAlign: "left",
		marginTop: "15px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "3rem", // Increase font size on medium devices and up
		textAlign: "left",
		marginTop: "15px",
	},
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
	width: "100%", // Full width on small screens
	height: "auto",
	order: 2,
	textAlign: "left",
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

const IntroductionSection = () => {
	const [animationClass, setAnimationClass] = useState("");
	const [showDesigner, setShowDesigner] = useState(false);
	const [showIntroduction, setShowIntroduction] = useState(false);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		if (showIntroduction) {
			setShowButton(true);
		}
	}, [showIntroduction]);
	return (
		<Box
			container
			justifyContent={"center"}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
			}}
		>
			<StyledContainer>
				<StyledScrollTrigger
					onEnter={() => setAnimationClass("animate-down")}
					onExit={() => setAnimationClass("")}
					sx={{ width: { xs: "100%", sm: "50%" } }}
				>
					<StyledTextContainer className={`textContainer ${animationClass}`}>
						<StyledHello>hello, I’m</StyledHello>
						<StyledName>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.pauseFor(1000)
										.typeString("Peirong Wang.")
										.callFunction(() => {
											setShowDesigner(true);
											setTimeout(() => setShowIntroduction(true), 1000);
										})
										.start();
								}}
								options={{
									delay: 50,
								}}
							/>
						</StyledName>
						{showDesigner && (
							<Designer className={showDesigner ? animationClass : ""}>
								A Creative Designer.
							</Designer>
						)}
						{showIntroduction && (
							<Introduction className={showIntroduction ? animationClass : ""}>
								I put my passion into crafting meaningful experiences and
								connections via design. My journey revolves around
								<StyledLink to="/uxdesign">
									<strong> UX/UI</strong>
								</StyledLink>
								,&nbsp;
								<StyledLink to="/visualdesign">
									<strong>Visual Design</strong>
								</StyledLink>
								&nbsp; including graphic and branding. Let's dive into impactful
								visual stories together.
							</Introduction>
						)}
						{showIntroduction && (
							<StyledLink
								to="/about"
								className={showIntroduction ? animationClass : ""}
							>
								<LearnMoreButton>LEARN MORE</LearnMoreButton>
							</StyledLink>
						)}
					</StyledTextContainer>
				</StyledScrollTrigger>
				<StyledImageContainer>
					<StyledImage src="/images/Artboard.svg" alt="painted woman"/>
				</StyledImageContainer>
			</StyledContainer>
		</Box>
	);
};

export default IntroductionSection;
