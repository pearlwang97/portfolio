import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import "./IntroductionSection.css";

const IntroductionSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<Grid
			container
			justifyContent={"center"}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
			}}
		>
			<Grid
				item
				container
				sx={{
					width: "60%",
					maxWidth: "1140px",
					height: "100%",
				}}
			>
				<Grid
					item
					xs={12}
					md={7}
					sx={{
						textAlign: "left",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						order: isMobile ? 2 : 0,
					}}
				>
					<p className="hello">hello, I’m</p>
					<div className="PeirongWang">
						<span>Peirong Wang.</span>
					</div>
					<p className="designer">A Creative Designer.</p>
					<p className="introduction">
						I put my passion into crafting meaningful experiences and
						connections via design. My journey revolves around
						<a href="design.html">
							<strong> UX/UI</strong>
						</a>
						<a href="#visual">
							<strong>, visual design</strong>
						</a>{" "}
						including graphic and branding. Let's dive into impactful visual
						stories together.
					</p>
					<a className="learnMoreButton" href="about.html">
						LEARN MORE
					</a>
				</Grid>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						order: isMobile ? 1 : 0,
					}}
				>
					<img
						src="/images/Artboard.svg"
						alt="Peirong Wang"
						className="profile"
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default IntroductionSection;
