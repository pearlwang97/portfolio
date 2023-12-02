import React from "react";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";
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

const ProjectCarousel = () => {
	return (
		<Grid
			container
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				sx={{
					width: "80%",
					height: "auto",
				}}
			>
                <Title>Domino’s APP Redesign</Title>
				<Slider>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image
							src="/images/domino.png"
							alt="domino"
						/>
					</Box>
					<Box
						sx={{
							width: "100%",
							height: "auto",
						}}
					>
						<Image
							src="/images/domino.png"
							alt="domino"
						/>
					</Box>
				</Slider>
			</Grid>
		</Grid>
	);
};

export default ProjectCarousel;
