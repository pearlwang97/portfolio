import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import { styled } from "@mui/material/styles";
import Divider from "../../../Divider/Divider";
import "./DesignSection.css";

const StyledLink = styled(Link)({
	textDecoration: "none",
	color: "inherit",
});

const SubTitle = styled("p")(({ ratio }) => ({
	fontSize: `${16 * ratio}px`,
	fontWeight: "bold",
	margin: `0 0 ${5 * ratio}px 0`,
}));

const DesignDescription = styled("p")(({ ratio }) => ({
	fontSize: `${16 * ratio}px`,
}));

const Title = styled("h3")(({ ratio }) => ({
	fontSize: `${32 * ratio}px`,
	fontWeight: "semi-bold",
	margin: `${10 * ratio}px 0`,
}));

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
});

const StyledIcon = styled("img")(({ ratio }) => ({
	width: `${36 * ratio}px`,
	height: "auto",
}));

const DesignSection = () => {
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

	let ratio = 1;
	if (containerWidth < 1000 && containerWidth >= 800) {
		ratio = 0.7;
	} else if (containerWidth < 800 && containerWidth >= 600) {
		ratio = 0.5;
	} else if (containerWidth < 600 && containerWidth >= 400) {
		ratio = 0.3;
	} else if (containerWidth < 400) {
		ratio = 0.2;
	}
	if (isMobile) {
		ratio = 0.7;
	}

	let bottomBoxes = (
		<>
			<Box
				className="design-text"
				sx={{
					width: isMobile ? "100%" : `${ratio * 400}px`,
					height: isMobile ? "auto" : `${ratio * 540}px`,
					position: "relative",
					textAlign: "left",
				}}
			>
				<Box sx={{ textAlign: "left" }}>
					<Title ratio={ratio}>02</Title>
					<StyledLink>
						<Title ratio={ratio}>Bloom App Design</Title>
					</StyledLink>
				</Box>
				<Box sx={{ textAlign: isMobile ? "left" : "right" }}>
					<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
					<SubTitle ratio={ratio}>Goal</SubTitle>
					<DesignDescription ratio={ratio}>
						The goal of this project is to create a user-friendly flower
						delivery app "Bloom" using Figma for the Project Management course
						(MDIA2092). As the UI/UX designer, Peirong collaborated with team
						members, including a developer, designer, and project manager,
						following the waterfall methodology. The project primarily showcases
						the student's ability to integrate user research principles into
						Figma, creating effective design components and fostering a seamless
						interactive design through team collaboration.
					</DesignDescription>
					<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
					<SubTitle ratio={ratio}>Role</SubTitle>
					<DesignDescription ratio={ratio}> UI/UX Designer</DesignDescription>
					<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
					<SubTitle ratio={ratio}>Tools</SubTitle>
					<Grid
						container
						sx={{
							justifyContent: "flex-end",
						}}
					>
						<StyledIcon
							ratio={ratio}
							src="/images/figma-logo.svg"
							alt="Figma"
						/>
					</Grid>
				</Box>
			</Box>

			<Box
				className="imageContainer"
				sx={{
					width: isMobile ? "100%" : `${ratio * 659}px`,
					height: isMobile ? "auto" : `${ratio * 540}px`,
					position: "relative",
				}}
			>
				<StyledImage src="/images/design-2.png" />
			</Box>
		</>
	);
	if (isMobile) {
		bottomBoxes = (
			<>
				<Box
					className="imageContainer"
					sx={{
						width: isMobile ? "100%" : `${ratio * 659}px`,
						height: isMobile ? "auto" : `${ratio * 540}px`,
						position: "relative",
					}}
				>
					<StyledImage src="/images/design-2.png" />
				</Box>
				<Box
					className="design-text"
					sx={{
						width: isMobile ? "100%" : `${ratio * 400}px`,
						height: isMobile ? "auto" : `${ratio * 540}px`,
						position: "relative",
						textAlign: "left",
					}}
				>
					<Box
						sx={{
							textAlign: "left",
							display: isMobile ? "flex" : "block",
							flexDirection: isMobile ? "row" : "column",
						}}
					>
						<Title ratio={ratio}>02</Title>
						{isMobile  && <Title>&nbsp;</Title>}
						<StyledLink>
							<Title ratio={ratio}>Bloom App Design</Title>
						</StyledLink>
					</Box>
					<Box sx={{ textAlign: isMobile ? "left" : "right" }}>
						<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
						<SubTitle ratio={ratio}>Goal</SubTitle>
						<DesignDescription ratio={ratio}>
							The goal of this project is to create a user-friendly flower
							delivery app "Bloom" using Figma for the Project Management course
							(MDIA2092). As the UI/UX designer, Peirong collaborated with team
							members, including a developer, designer, and project manager,
							following the waterfall methodology. The project primarily
							showcases the student's ability to integrate user research
							principles into Figma, creating effective design components and
							fostering a seamless interactive design through team
							collaboration.
						</DesignDescription>
						<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
						<SubTitle ratio={ratio}>Role</SubTitle>
						<DesignDescription ratio={ratio}> UI/UX Designer</DesignDescription>
						<Divider width="25%" alignRight={!isMobile} ratio={ratio} />
						<SubTitle ratio={ratio}>Tools</SubTitle>
						<Grid
							container
							sx={{
								justifyContent: "flex-start",
							}}
						>
							<StyledIcon
								ratio={ratio}
								src="/images/figma-logo.svg"
								alt="Figma"
							/>
						</Grid>
					</Box>
				</Box>
			</>
		);
	}
	return (
		<Grid
			container
			className="designSection"
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
				ref={containerRef}
				item
				sx={{
					width: "80%",
					maxWidth: "1200px",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					height: "auto",
					margin: "0 auto",
					gap: "30px",
				}}
			>
				<Box
					className="imageContainer"
					sx={{
						width: isMobile ? "100%" : `${ratio * 665}px`,
						height: isMobile ? "auto" : `${ratio * 540}px`,
						position: "relative",
					}}
				>
					<StyledImage src="/images/design-1.png" />
				</Box>
				<Box
					sx={{
						width: isMobile ? "100%" : `${ratio * 400}px`,
						height: isMobile ? "auto" : `${ratio * 540}px`,
						position: "relative",
						textAlign: "left",
					}}
				>
					<Box
						sx={{
							textAlign: isMobile ? "left" : "right",
							display: "flex",
							flexDirection: isMobile ? "row" : "column",
						}}
					>
						<Title ratio={ratio}>01</Title>
						{isMobile  && <Title>&nbsp;</Title>}
						<StyledLink>
							<Title ratio={ratio}>Domino’s APP Redesign</Title>
						</StyledLink>
					</Box>
					<Divider width="25%" ratio={ratio} />
					<SubTitle ratio={ratio}>Goal</SubTitle>
					<DesignDescription ratio={ratio}>
						The objective of this project is to create a user-centered, modern
						interface for the existing Domino’s App using Figma and Adobe
						Illustrator in UI / UX Strategy 1 course (MDIA2540). The primary aim
						of this project is to demonstrate how the student apply user
						research principles and utilize Figma & Adobe Illustrator
						effectively to construct UI elements and interactive design to
						enhance usability and user experience.
					</DesignDescription>
					<Divider width="25%" ratio={ratio} />
					<SubTitle ratio={ratio}>Role</SubTitle>
					<DesignDescription ratio={ratio}> UI/UX Designer</DesignDescription>
					<Divider width="25%" ratio={ratio} />
					<SubTitle ratio={ratio}>Tools</SubTitle>
					<Grid container>
						<Grid item xs={6}>
							<StyledIcon
								ratio={ratio}
								src="/images/figma-logo.svg"
								alt="Figma"
							/>
						</Grid>
						<Grid item xs={6}>
							<StyledIcon ratio={ratio} src="/images/ai-logo.svg" alt="Figma" />
						</Grid>
					</Grid>
				</Box>
				{bottomBoxes}
			</Grid>
		</Grid>
	);
};

export default DesignSection;
