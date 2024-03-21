import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import AboutMeCarousel from "../AboutMeCarousel/AboutMeCarousel";
import { gsap } from "gsap";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";

const StyledMainContainer = styled(Box)(({ theme, isSmallScreen }) => ({
	width: "100%",
	maxWidth: "1140px",
	position: "relative",
	minHeight: "100vh",
	"& .title": {
		position: "absolute",
		top: isSmallScreen ? "0%" : "30%",
		left: "50%",
		transform: "translateX(-50%)",
		color: "#250d00",
		width: "60%",
	},
	"& p": {
		textAlign: "center",
		marginTop: "20px",
	},
	"& .plane": {
		width: "100%",
		height: "100%",
		position: "absolute",
		"& img": {
			position: "absolute",
		},
		"&:nth-of-type(1)": {
			"& img": {
				"&:nth-of-type(1)": {
					left: "85%",
					top: "55%",
				},
				"&:nth-of-type(2)": {
					left: "0%",
					top: "55%",
				},
				"&:nth-of-type(3)": {
					left: "35%",
					top: "0%",
				},
			},
		},
		"&:nth-of-type(2)": {
			"& img": {
				"&:nth-of-type(1)": {
					left: "5%",
					top: "10%",
				},
				"&:nth-of-type(2)": {
					left: "90%",
					top: "10%",
				},
				"&:nth-of-type(3)": {
					left: "55%",
					top: "60%",
				},
			},
		},
		"&:nth-of-type(3)": {
			"& img": {
				"&:nth-of-type(1)": {
					left: "65%",
					top: "2.5%",
				},
				"&:nth-of-type(2)": {
					left: "30%",
					top: "65%",
				},
			},
		},
	},
}));
const FloatingGallery = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const plane1 = React.useRef(null);
	const plane2 = React.useRef(null);
	const plane3 = React.useRef(null);
	let requestAnimationFrameId = null;
	let xForce = 0;
	let yForce = 0;
	const easing = 0.08;
	const speed = 0.01;
	const handleMouseMove = (e) => {
		const { movementX, movementY } = e;

		xForce += movementX * speed;

		yForce += movementY * speed;

		if (requestAnimationFrameId == null) {
			requestAnimationFrameId = requestAnimationFrame(animate);
		}
	};
	const lerp = (start, target, amount) =>
		start * (1 - amount) + target * amount;
	const animate = () => {
		xForce = lerp(xForce, 0, easing);

		yForce = lerp(yForce, 0, easing);

		gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

		gsap.set(plane2.current, {
			x: `+=${xForce * 0.5}`,
			y: `+=${yForce * 0.5}`,
		});

		gsap.set(plane3.current, {
			x: `+=${xForce * 0.25}`,
			y: `+=${yForce * 0.25}`,
		});

		if (Math.abs(xForce) < 0.01) xForce = 0;

		if (Math.abs(yForce) < 0.01) yForce = 0;

		if (xForce !== 0 || yForce !== 0) {
			requestAnimationFrame(animate);
		} else {
			cancelAnimationFrame(requestAnimationFrameId);

			requestAnimationFrameId = null;
		}
	};
	if (isSmallScreen) {
		return <AboutMeCarousel />;
	}
	return (
		<MainContainer
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<StyledMainContainer
				isSmallScreen={isSmallScreen}
				onMouseMove={(e) => {
					handleMouseMove(e);
				}}
			>
				{!isSmallScreen && (
					<>
						<Box className="plane" ref={plane1}>
							<Image
								sx={{
									width: "180px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-1.webp"
								alt="plane1"
							/>
							<Image
								sx={{
									width: "120px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-2.webp"
								alt="plane2"
							/>
							<Image
								sx={{
									width: "120px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-3.webp"
								alt="plane3"
							/>
						</Box>
						<Box className="plane" ref={plane2}>
							<Image
								sx={{
									width: "180px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-4.webp"
								alt="plane1"
							/>
							<Image
								sx={{
									width: "150px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/boardgame.webp"
								alt="plane2"
							/>
							<Image
								sx={{
									width: "180px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-6.webp"
								alt="plane3"
							/>
						</Box>
						<Box className="plane" ref={plane3}>
							<Image
								sx={{
									width: "120px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-7.webp"
								alt="plane1"
							/>
							<Image
								sx={{
									width: "180px",
									boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
								}}
								src="/images/about-me-gallery-8.webp"
								alt="plane2"
							/>
						</Box>
						<Box
							className="title"
							sx={{
								marginBottom: "20px",
							}}
						>
							<H2>More About Me</H2>
							<Body1>
								I have always been drawn to various forms of creative
								expression. In my free time, you can find me playing board games,
								engaging in crafts and DIY projects, and enjoying
								the outdoors with my lovely dog. Moreover, I love traveling, as
								seeing something different and new is very appealing to me.
							</Body1>
						</Box>
					</>
				)}
			</StyledMainContainer>
		</MainContainer>
	);
};

export default FloatingGallery;
