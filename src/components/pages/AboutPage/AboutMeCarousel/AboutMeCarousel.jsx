import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutMeCarousel.css";

const Image = styled("img")({
	width: "100%",
	height: "auto",
	maxWidth: "500px",
	margin:"0 auto",
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
				<Slider>
				<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/about-me-gallery-3.jpg" alt="domino gallery photo" />
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/about-me-gallery-2.jpg" alt="domino gallery photo" />
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/about-me-gallery-7.jpg" alt="domino gallery photo" />
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/about-me-gallery-6.jpg" alt="domino gallery photo" />
					</Box>
				</Slider>
			</StyledContainer>
		</Box>
	);
};

export default AboutMeCarousel;
