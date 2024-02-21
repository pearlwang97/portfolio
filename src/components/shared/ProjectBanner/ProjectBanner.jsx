import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "components/shared/Image/Image";

const Title = styled("h1")({
	fontSize: "2rem",
	fontWeight: "bold",
	textAlign: "center",
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
		width: "85%",
	},
}));

const ProjectCarousel = ({ title, imageSrc }) => {
	return (
		<StyledContainer
        sx={{
            marginBottom: {
                sm: "50px",
                md: "75px",
                lg: "100px",
            },
        }}>
			<Title>{title}</Title>
			<Image src={imageSrc} />
		</StyledContainer>
	);
};

export default ProjectCarousel;
