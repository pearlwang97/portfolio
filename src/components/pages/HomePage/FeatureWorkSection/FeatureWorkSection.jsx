import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import "./FeatureWorkSection.css";

const FeatureWorksSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const containerRef = useRef(null);
	const [containerWidth, setContainerWidth] = useState(0);
	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};

		updateWidth(); // Update the width when the component mounts
		window.addEventListener("resize", updateWidth); // Update the width when the window is resized

		// Clean up the event listener when the component unmounts
		return () => window.removeEventListener("resize", updateWidth);
	}, []);
	let size = 1;
	if (containerWidth < 1000 && containerWidth >= 800) {
		size = 0.8;
	} else if (containerWidth < 800 && containerWidth >= 600) {
		size = 0.6;
	} else if (containerWidth < 600 && containerWidth >= 400) {
		size = 0.4;
	} else if (containerWidth < 400) {
		size = 0.25;
	}
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
            <h2>Feature Works</h2>
			
			<Box
				ref={containerRef}
				className="gallery"
				sx={{
					width: "60%",
					maxWidth: "1140px",
					maxHeight: "1050",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					height: "auto",
					margin: "0 auto",
					rowGap: "72px",
					columnGap: "100px",
				}}
			>
				<Box
                    className="imageContainer"
					sx={{
						width: `${size * 725}px`,
						height: `${size * 475}px`,
                        position: "relative",
					}}
				>
					<img className="featureWorkImages" src="/images/domino.png" />
					<div class="featureWorksOverlay">
						<p class="featureWorksOverlayText">Domino’s APP Redesign</p>
					</div>
				</Box>
				<Box
                    className="imageContainer"
					sx={{
						width: `${size * 343}px`,
						height: `${size * 475}px`,
                        position: "relative",
					}}
				>
					<img className="featureWorkImages" src="/images/bloom.png" />
					<div class="featureWorksOverlay">
						<p class="featureWorksOverlayText">BLOOM APP Design</p>
					</div>
				</Box>
				<Box
                    className="imageContainer"
					sx={{
						width: `${size * 415}px`,
						height: `${size * 475}px`,
                        position: "relative",
					}}
				>
					<img className="featureWorkImages" src="/images/radio.png" />
					<div class="featureWorksOverlay">
						<p class="featureWorksOverlayText">2D Realistic Radio Vector Art</p>
					</div>
				</Box>
				<Box
                className="imageContainer"
					sx={{
						width: `${size * 656}px`,
						height: `${size * 475}px`,
                        position: "relative",
					}}
				>
					<img className="featureWorkImages" src="/images/bloombox.png" />
					<div className="featureWorksOverlay">
						<p class="featureWorksOverlayText">BloomBox Logo Design</p>
					</div>
				</Box>
			</Box>
		</Box>
	);
};

export default FeatureWorksSection;
