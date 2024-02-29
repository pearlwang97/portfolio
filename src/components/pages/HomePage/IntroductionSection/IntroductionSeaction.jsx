import React, { useState, useContext } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import { AnimationContext } from "components/Context/AnimationContext";
import Button from "components/shared/Button/Button";
import Link from "components/shared/StyledLink/StyledLink";
import Body1 from "components/shared/Body1/Body1";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import "./IntroductionSection.css";

const StyledImageContainer = styled(Box)(({ theme }) => ({
	width: "50%",
	height: "auto",
	order: 2,
	[theme.breakpoints.down("md")]: {
		width: "50%",
		order: 2,
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		order: 1,
	},
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
	marginTop: "50px",
	width: "100%",
	height: "auto",
	order: 2,
	textAlign: "left",
}));

const StyledScrollTrigger = styled(ScrollTrigger)(({ theme }) => ({
	width: "50%",
	order: 2,
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		order: 1,
	},
}));
const StyledHello = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	fontFamily: "'Montserrat', sans-serif",
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const StyledName = styled("p")(({ theme }) => ({
	backgroundColor: "#DBA39A",
	color: "#FEFCF3",
	display: "inline-block",
	fontSize: "2.5rem",
	marginBottom: "10px",
	width: "auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.875rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.25rem",
	},
}));

const Designer = styled("div")(({ theme }) => ({
	fontSize: "3rem",
	fontWeight: "600",
	fontFamily: "'New York', serif",
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.25rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
	},
}));

const IntroductionSection = () => {
	const [animationClass, setAnimationClass] = useState("");
	const { animationTriggered, setAnimationTriggered } =
		useContext(AnimationContext);
	const handleEnter = () => {
		if (!animationTriggered) {
			setAnimationClass("animate-down");
			setAnimationTriggered(true);
		}
	};

	return (
		<MainContainer
			sx={{
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
			}}
		>
			<StyledScrollTrigger
				onEnter={handleEnter}
				onExit={() => setAnimationClass("")}
				// sx={{ width: { sm: "100%", md: "50%" } }}
			>
				<StyledTextContainer className={`${animationClass}`}>
					<StyledHello>hello, I’m</StyledHello>
					<StyledName>
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString("Peirong Wang.").start();
							}}
							options={{
								delay: 18,
							}}
						/>
					</StyledName>

					<Designer>A Creative Designer.</Designer>
					<Body1>
						I put my passion into crafting meaningful experiences and
						connections via design. My journey revolves around &nbsp;
						<Link sx={{ textDecoration: "underline" }} to="/uxdesign">
							<strong>UX/UI</strong>
						</Link>
						,&nbsp;
						<Link sx={{ textDecoration: "underline" }} to="/visualdesign">
							<strong>Visual Design</strong>
						</Link>
						&nbsp; including graphic and branding. Let's dive into impactful
						visual stories together.
					</Body1>
					<Link to="/about">
						<Button>LEARN MORE</Button>
					</Link>
				</StyledTextContainer>
			</StyledScrollTrigger>
			<StyledImageContainer>
				<Image src="/images/Artboard.svg" alt="painted woman" />
			</StyledImageContainer>
		</MainContainer>
	);
};

export default IntroductionSection;
