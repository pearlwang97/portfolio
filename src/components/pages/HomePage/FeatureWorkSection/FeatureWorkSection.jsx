import React, { useRef, useEffect, useState, useContext } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimationContext } from "components/Context/AnimationContext";
import H2 from "components/shared/H2/H2";
import Image from "components/shared/Image/Image";
import MainContainer from "components/shared/MainContainer/MainContainer";
import StypedP from "components/shared/StyledP/StyledP";
import Link from "components/shared/StyledLink/StyledLink";

import "./FeatureWorkSection.css";

const ScrollTriggerStyled = styled(ScrollTrigger)({
	width: "auto",
});

const FeatureWorksOverlay = styled("div")({
	position: "absolute",
	height: "100%",
	margin: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	background: "rgba(0, 0, 0, 0.5)",
	opacity: 0,
	transition: "opacity 0.3s ease",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"&:hover": {
		opacity: 1,
	},
});

const StyledImage = styled(Image)({
	transition: "transform 0.3s ease-in-out",
	"&:hover": {
		transform: "scale(1.1)",
	},
});

const ImageContainer = styled(Box)({
	width: "100%",
	position: "relative",
	overflow: "hidden",
	"&:hover": {
		"& img": {
			transform: "scale(1.1)",
		},
		"& div": {
			opacity: 1,
		},
	},
});

const FeatureWorksOverlayText = styled(StypedP)(({ theme }) => ({
	color: "white",
	transform: "translateY(20px)", // Start slightly below center
	opacity: 0,
	transition: "transform 0.3s ease, opacity 0.3s ease",
	textAlign: "center",
	fontSize: "1rem",
	zIndex: 1,
	textDecoration: "underline",
	".imageContainer:hover &": {
		transform: "translateY(0)",
		opacity: 1, // Show the text
	},
}));

const FeatureWorksSection = () => {
	const containerRef = useRef(null);
	const [marginBottom, setMarginBottom] = useState("100px");
	const [animationClass1, setAnimationClass1] = useState("");
	const [animationClass2, setAnimationClass2] = useState("");
	const [animationClass3, setAnimationClass3] = useState("");
	const [animationClass4, setAnimationClass4] = useState("");
	const {
		animation1Triggered,
		setAnimation1Triggered,
		animation2Triggered,
		setAnimation2Triggered,
		animation3Triggered,
		setAnimation3Triggered,
		animation4Triggered,
		setAnimation4Triggered,
	} = useContext(AnimationContext);

	const handleEnter1 = () => {
		if (!animation1Triggered) {
			setAnimationClass1("animate-down");
			setAnimation1Triggered(true);
		}
	};

	const handleEnter2 = () => {
		if (!animation2Triggered) {
			setAnimationClass2("animate-up");
			setAnimation2Triggered(true);
		}
	};

	const handleEnter3 = () => {
		if (!animation3Triggered) {
			setAnimationClass3("animate-down");
			setAnimation3Triggered(true);
		}
	};

	const handleEnter4 = () => {
		if (!animation4Triggered) {
			setAnimationClass4("animate-up");
			setAnimation4Triggered(true);
		}
	};

	return (
		<Box
			sx={{
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
			}}
		>
			<MainContainer
				sx={{
					display: "flex",
					flexWrap: "wrap",
				}}
				ref={containerRef}
			>
				<H2
					sx={{
						width: "100%",
						marginBottom: {
							sm: "25px",
							md: "50px",
							lg: "75px",
						},
					}}
				>
					Featured Works
				</H2>
				<ScrollTriggerStyled
					onEnter={handleEnter1}
					onExit={() => setAnimationClass1("")}
					sx={{ width: "66%" }}
				>
					<Box
						className={`imageContainer ${animationClass1}`}
						sx={{
							position: "relative",
							overflow: "hidden",
						}}
					>
						<ImageContainer>
							<Link to="/project-1">
								<StyledImage
									src="/images/domino.png"
									alt="domino redesign cover"
								/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										Domino’s APP Redesign
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</Link>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
				<ScrollTriggerStyled
					onEnter={handleEnter2}
					onExit={() => setAnimationClass2("")}
					sx={{ width: "31.5%" }}
				>
					<Box
						className={`imageContainer ${animationClass2}`}
						sx={{
							position: "relative",
							overflow: "hidden",
						}}
					>
						<ImageContainer>
							<Link to="/project-2">
								<StyledImage src="/images/bloom.png" alt="bloom design cover" />
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										BLOOM APP Design
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</Link>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
				<ScrollTriggerStyled
					onEnter={handleEnter3}
					onExit={() => setAnimationClass3("")}
					sx={{ width: "38%" }}
				>
					<Box
						className={`imageContainer ${animationClass3}`}
						sx={{
							position: "relative",
							overflow: "hidden",
						}}
					>
						<ImageContainer>
							<Link to="/project-3">
								<StyledImage src="/images/radio.png" alt="radio design cover" />
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										2D Realistic Radio Vector Art
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</Link>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
				<ScrollTriggerStyled
					onEnter={handleEnter4}
					onExit={() => setAnimationClass4("")}
					sx={{ width: "60%" }}
				>
					<Box
						className={`imageContainer ${animationClass4}`}
						sx={{
							position: "relative",
							overflow: "hidden",
						}}
					>
						<ImageContainer>
							<Link to="/project-4">
								<StyledImage
									src="/images/bloombox.png"
									alt="bloombox design cover"
								/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										BloomBox Logo Design
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</Link>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
			</MainContainer>
		</Box>
	);
};

export default FeatureWorksSection;
