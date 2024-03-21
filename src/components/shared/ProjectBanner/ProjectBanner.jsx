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
	width: "1000px",
	height: "auto",
	margin: "0 auto",
	[theme.breakpoints.down("lg")]: {
		width: "840px",
		maxWidth: "912px",
	},
	[theme.breakpoints.down("md")]: {
		width: "540px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "320px",
	},
}));

const ProjectBanner = ({ title, imageSrc, videoSrc }) => {
	return (
		<StyledContainer
			sx={{
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
			}}
		>
			<Title>{title}</Title>
			{videoSrc && (
				<Box
					sx={{
						width: "100%",
						paddingTop: "42%", // This creates an aspect ratio box with a ratio of 4:3
						position: "relative",
					}}
				>
					<iframe
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
						}}
						src={videoSrc}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</Box>
			)}
			{imageSrc && <Image src={imageSrc} />}
		</StyledContainer>
	);
};

export default ProjectBanner;
