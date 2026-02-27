import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import Body1 from "components/shared/Body1/Body1";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";

const CarouselImage = styled(Image)({
	width: "100%",
	height: "auto",
	maxWidth: "500px",
	margin: "0 auto",
});

const AboutMeCarousel = () => {
	const items = [
		{
			name: "Selfie1",
			image: "/images/about-me-gallery-1-carousel.webp",
		},
		{
			name: "Selfie2",
			image: "/images/about-me-gallery-2.webp",
		},
		{
			name: "Selfie3",
			image: "/images/about-me-gallery-3.webp",
		},
		{
			name: "Selfie4",
			image: "/images/about-me-gallery-4-carousel.webp",
		},
		{
			name: "Selfie5",
			image: "/images/boardgame.webp",
		},
		{
			name: "Selfie6",
			image: "/images/about-me-gallery-6.webp",
		},
		{
			name: "Selfie7",
			image: "/images/about-me-gallery-7.webp",
		},
		{
			name: "Selfie8",
			image: "/images/about-me-gallery-8-carousel.webp",
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
			<MainContainer>
				<Box
					sx={{
						marginBottom: "50px",
					}}
				>
					<H2
						sx={{
							margin: {
								xs: "20px 0",
								sm: "20px 0",
								md: "40px 0",
								lg: "40px 0",
							},
						}}
					>More About Me</H2>
					<Body1>
						I have always been drawn to various forms of creative expression. In
						my free time, you can find me playing board games, engaging in crafts
						and DIY projects, and enjoying the outdoors with my
						lovely dog. Moreover, I love traveling, as seeing something
						different and new is very appealing to me.
					</Body1>
				</Box>
				<Carousel swipe>
					{items.map((item, i) => (
						<CarouselImage key={i} src={item.image} alt={item.name} />
					))}
				</Carousel>
			</MainContainer>
		</Box>
	);
};

export default AboutMeCarousel;
