import React, { useRef, useEffect, useState, useContext } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimationContext } from "../../../Context/AnimationContext";
import "./FeatureWorkSection.css";

const ScrollTriggerStyled = styled(ScrollTrigger)({
	width: "auto", // Add this line
});

const FeatureWorksOverlay = styled("div")({
	position: "absolute",
	height: "100%",
	margin: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
	opacity: 0, // Start fully transparent
	transition: "opacity 0.3s ease",
	display: "flex",
	alignItems: "center", // Centers the text vertically
	justifyContent: "center", // Centers the text horizontally
	// pointerEvents: "none", // Add this line
	"&:hover": {
		opacity: 1,
	},
});

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
	transition: "transform 0.3s ease-in-out",
	// pointerEvents: "auto",
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

const StyledH2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "100px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		marginBottom: "50px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		marginBottom: "25px",
	},
	fontFamily: "utopia-std, serif",
}));
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
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const FeatureWorksOverlayText = styled("p")(({ theme }) => ({
	color: "white",
	transform: "translateY(20px)", // Start slightly below center
	opacity: 0,
	transition: "transform 0.3s ease, opacity 0.3s ease",
	textAlign: "center",
	fontSize: "0.5rem", // 18px assuming the root font-size is 16px
	zIndex: 1,
	textDecoration: "underline",
	".imageContainer:hover &": {
		transform: "translateY(0)",
		opacity: 1, // Show the text
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "0.75rem", // Increase font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1rem", // Increase font size on medium devices and up
	},
}));

const StyledLink = styled(Link)(({ theme }) => ({
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
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
			setAnimationClass1("animate-left");
			setAnimation1Triggered(true);
		}
	};

	const handleEnter2 = () => {
		if (!animation2Triggered) {
			setAnimationClass2("animate-right");
			setAnimation2Triggered(true);
		}
	};

	const handleEnter3 = () => {
		if (!animation3Triggered) {
			setAnimationClass3("animate-left");
			setAnimation3Triggered(true);
		}
	};

	const handleEnter4 = () => {
		if (!animation4Triggered) {
			setAnimationClass4("animate-right");
			setAnimation4Triggered(true);
		}
	};

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				setMarginBottom(`${entry.contentRect.height * 0.05}px`);
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

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
			<StyledH2>Featured Works</StyledH2>
			<StyledContainer ref={containerRef} marginBottom={marginBottom}>
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
							<StyledLink to="/project-1">
								<StyledImage src="/images/domino.png" alt="domino redesign cover"/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										Domino’s APP Redesign
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</StyledLink>
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
							<StyledLink to="/project-2">
								<StyledImage src="/images/bloom.png" alt="bloom design cover"/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										BLOOM APP Design
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</StyledLink>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
			</StyledContainer>
			<StyledContainer>
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
							<StyledLink to="/project-3">
								<StyledImage src="/images/radio.png" alt="radio design cover"/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										2D Realistic Radio Vector Art
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</StyledLink>
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
							<StyledLink to="/project-4">
								<StyledImage src="/images/bloombox.png" alt="bloombox design cover"/>
								<FeatureWorksOverlay>
									<FeatureWorksOverlayText>
										BloomBox Logo Design
									</FeatureWorksOverlayText>
								</FeatureWorksOverlay>
							</StyledLink>
						</ImageContainer>
					</Box>
				</ScrollTriggerStyled>
			</StyledContainer>
		</Box>
	);
};

export default FeatureWorksSection;
