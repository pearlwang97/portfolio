import React from "react";
import { Grid, Box } from "@mui/material";
import Image from "components/shared/Image/Image";
import StyledP from "components/shared/StyledP/StyledP";
import ProjectCard from "components/pages/NewVisualDesignPage/ProjectCard";
import MainContainer from "components/shared/MainContainer/MainContainer";

const projects = [
	{
		name: "2D Realistic Radio Vector Art",
		description: `The objective of this project was to showcase advanced proficiency
      in Adobe Illustrator by creating a realistic 2d radio vector design
      that emulates 3d object for the Illustration class (MDIA2166). It
      aims to demonstrate the student’s expertise as a digital designer,
      particularly in mastering the fundamental tools for shaping objects
      and intricacies of crafting vector designs.`,
		image: "/images/design-3.png",
		tools: "Adobe Illustrator",
	},
];

const ProjectsSection = () => {
	return (
		<MainContainer
			sx={{
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			<Grid container spacing={2}>
				{projects.map((project, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<ProjectCard {...project} />
					</Grid>
				))}
			</Grid>
		</MainContainer>
	);
};

export default ProjectsSection;
