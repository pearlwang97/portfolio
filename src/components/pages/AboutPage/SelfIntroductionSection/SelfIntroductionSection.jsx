import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import "./SelfIntroductionSection.css";

const SelfIntroductionSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
				container
				sx={{
					width: "80%",
					height: "100%",
				}}
			>
				<Grid item xs={ isMobile ? 12 : 5}></Grid>
				<Grid
					className="selfIntroductionText"
					item
					xs={isMobile ? 12 : 7}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "left",
					}}
				>
					<h2>Hiii</h2>
					<h2>I'm Perong!</h2>
					<p>
						I'm passionate with a love for design. Born in China and having
						relocated to Vancouver during my high school years, I've had the
						chance to experience two distinct worlds and cultures. My past
						experience enhanced my adaptability and approach things with an
						inclusive and diverse mindset. I have always been drawn to various
						forms of creative expression, such as music, movies, or even the
						vibrant pop culture. In my free time, I enjoy crafting, doing nail
						art, playing games and hiking with my dog.
					</p>
					<p>
						Driven by a foundational background in economics from the University
						of Victoria, my journey into New Media was serendipitous. I stumbled
						upon my passion for digital design after graduation. Now in my
						career, I aim to establish myself as a digital designer. I want to
						blend my knowledge of marketing strategy with my technical design
						expertise to provide a positive user experience.
					</p>
					<p>
						I believe design builds a channel for communication, connecting my
						thoughts and ideas with my audience. Therefore, I aspire to create
						design works that offer solutions and build connections with people.
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SelfIntroductionSection;
