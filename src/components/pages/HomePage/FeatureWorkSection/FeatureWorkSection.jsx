import React from "react";
import { Box, Grid } from "@mui/material";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import FeatureWorkItem from "components/pages/HomePage/FeatureWorksItem/FeatureWorksItem";
import Link from "components/shared/StyledLink/StyledLink";
import AnimatedButton from "components/shared/AnimatedButton/AnimatedButton";
import { projects } from "components/constants/constants";

const FeatureWorksSection = () => {
	const FeatureWorkItems = projects.slice(0, 4);
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
					<Link sx={{marginTop: "30px"}}to="/works">
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
