import React from "react";
import { Box, useTheme } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Carousel } from "react-responsive-3d-carousel";

const StyledBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%", // Full width on small screens
	maxWidth: "300px",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		width: "75%", // 75% width on small devices and up
		gap: "20px",
	},
	[theme.breakpoints.up("md")]: {
		width: "50%", // 50% width on medium devices and up
		gap: "30px",
	},
}));

const ThreeDCarouselSection = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				height: "1000px",
				backgroundColor: "#F0DBDB",
				padding: "50px 0",
				margin: "0 auto",
			}}
		>
			<Carousel
				showArrows={false}
				showIndicators={false}
				showStatus={false}

>
				<img src="https://example-image-url-1" alt="example-image-1" />
				<img src="https://example-image-url-2" alt="example-image-2" />
				<video src="https://example-video-url" muted autoPlay loop />
				<iframe
					src="https://www.youtube.com/embed/example"
					title="YouTube video player"
					frameborder="0"
				/>
				<div>
					<p>Hello</p>
				</div>
			</Carousel>
		</Box>
	);
};

export default ThreeDCarouselSection;
