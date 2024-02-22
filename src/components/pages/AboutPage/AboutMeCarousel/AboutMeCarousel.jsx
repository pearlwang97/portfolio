import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import StyledP from "components/shared/StyledP/StyledP";
import H2 from "components/shared/H2/H2";

const Image = styled("img")({
	width: "100%",
	height: "auto",
	maxWidth: "500px",
	margin: "0 auto",
});

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	height: "auto",
	margin: "0 auto",
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "85%",
	},
}));

const AboutMeCarousel = () => {
	const items = [
		{
			name: "Selfie1",
			image: "/images/about-me-gallery-3.jpg",
		},
		{
			name: "Selfie2",
			image: "/images/about-me-gallery-2.jpg",
		},
		{
			name: "Selfie3",
			image: "/images/about-me-gallery-7.jpg",
		},
		{
			name: "Selfie4",
			image: "/images/about-me-gallery-6.jpg",
		},
	];
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				marginBottom: { xs: "50px", md: "75px", lg: "100px" },
			}}
		>
			<StyledContainer>
				<Box
					sx={{
						marginBottom: "50px",
					}}
				>
					<H2>More About Me</H2>
					<StyledP>
						I have always been drawn to various forms of creative expression. In
						my free time, you can find me watching movies, engaging in crafts
						and DIY projects, playing games, and enjoying the outdoors with my
						lovely dog. Moreover, I love traveling, as seeing something
						different and new is very appealing to me.
					</StyledP>
				</Box>
				<Carousel swipe>
					{items.map((item, i) => (
						<Image key={i} src={item.image} alt={item.name} />
					))}
				</Carousel>
			</StyledContainer>
		</Box>
	);
};

export default AboutMeCarousel;
