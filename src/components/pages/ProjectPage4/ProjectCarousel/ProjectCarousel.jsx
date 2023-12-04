import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCarousel.css";

const Image = styled("img")({
	width: "100%",
	height: "auto",
});

const Title = styled("h1")({
	fontSize: "48px",
	fontWeight: "bold",
	textAlign: "left",
	marginBottom: "50px",
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
		width: "90%",
	},
}));

const ProjectCarousel = () => {
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
				<Title>BloomBox Logo Design</Title>
				<Slider>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/project-4-gallery-1.png" alt="bloombox" />
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/project-4-gallery-2.jpeg" alt="bloombox" />
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image src="/images/project-4-galler-3.png" alt="bloombox" />
					</Box>
				</Slider>
			</StyledContainer>
		</Box>
	);
};

export default ProjectCarousel;
