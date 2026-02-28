import React from "react";
import { Box, Grid } from "@mui/material";
import MainContainer from "components/shared/MainContainer/MainContainer";
import ProjectCard from "components/shared/ProjectCard/ProjectCard";
import Link from "components/shared/StyledLink/StyledLink";
import AnimatedButton from "components/shared/AnimatedButton/AnimatedButton";
import { projects } from "components/constants/constants";
import {
	SECTION_HEADERS,
	SECTION_LAYOUTS,
	SECTION_MARGINS,
} from "components/constants/styleTokens";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";

const FeatureWorksSection = () => {
	const FeatureWorkItems = projects.slice(0, 4);
	return (
		<Box
			sx={{
				marginBottom: SECTION_MARGINS.featured,
			}}
		>
			<MainContainer
				sx={{
					...SECTION_LAYOUTS.wrapped,
				}}
			>
				<SectionHeader
					title="Featured Works"
					titleMargin={null}
					titleSx={{ marginBottom: SECTION_HEADERS.featureTitleMargin }}
				/>
				<Grid container justifyContent={{ xs: "center", md: "space-between" }}>
					{FeatureWorkItems.map((item) => (
						<ProjectCard key={item.title} project={item} variant="featured" />
					))}
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Link sx={{ marginTop: "30px" }} to="/works">
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
