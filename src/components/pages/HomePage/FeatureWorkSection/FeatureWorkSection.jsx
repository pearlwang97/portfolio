import React from "react";
import { Box, Grid, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Body1 from "components/shared/Body1/Body1";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import FeatureWorkItem from "components/pages/HomePage/FeatureWorksItem/FeatureWorksItem";
import Link from "components/shared/StyledLink/StyledLink";
import AnimatedButton from "components/shared/AnimatedButton/AnimatedButton";

const FeatureWorksSection = () => {
	const FeatureWorkItems = [
		{
			title: "Domino’s APP Redesign",
			image: "/images/feature-work-1.jpg",
			link: "/project-1",
			description:
				"Create a user-centered, modern interface for the existing Domino's App.",
			category: "UI/UX Design",
			tools: ["Figma", "Illustrator"],
		},
		{
			title: "2D Realistic Radio Vector Art",
			image: "/images/feature-work-2.jpg",
			link: "/project-3",
			description:
				"Produce a photo-realistic 2D illustration that achieves a 3D effect.",
			category: "Graphic Design",
			tools: ["Illustrator"],
		},
		{
			title: "BloomBox Logo Design",
			image: "/images/feature-work-3.jpg",
			link: "/project-4",
			description: "Develop multiple logo variations for brand BloomBox.",
			category: "Graphic Design",
			tools: ["Illustrator"],
		},
		{
			title: "Chinese Zodiac Collection",
			image: "/images/feature-work-4.jpg",
			link: "/project-5",
			category: "Graphic Design",
			description:
				"Reimagine the Chinese zodiacs through the traditional art of papercutting.",
			tools: ["Illustrator", "Photoshop"],
		},
	];
	return (
		<Box
			sx={{
				marginBottom: {
					xs: "75px",
					md: "100px",
					lg: "150px",
				},
			}}
		>
			<MainContainer
				sx={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<H2
					sx={{
						width: "100%",
						marginBottom: {
							xs: "25px",
							sm: "25px",
							md: "50px",
							lg: "75px",
						},
					}}
				>
					Featured Works
				</H2>
				<Grid container justifyContent={{ xs: "center", md: "space-between" }}>
					{FeatureWorkItems.map((item, index) => (
						<FeatureWorkItem
							key={item.title}
							title={item.title}
							image={item.image}
							link={item.link}
							description={item.description}
							category={item.category}
							tools={item.tools}
						/>
					))}
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%", // take full width of the parent
					}}
				>
					<Link sx={{marginTop: "30px"}}to="/visualdesign">
						<AnimatedButton>
							MORE WORKS 
						</AnimatedButton>
					</Link>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default FeatureWorksSection;
