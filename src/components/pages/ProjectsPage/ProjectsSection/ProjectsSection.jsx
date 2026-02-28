import React, { useState, useEffect } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import { useLocation } from "react-router-dom";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import ProjectCard from "components/shared/ProjectCard/ProjectCard";
import { projects } from "components/constants/constants";
// import ScrollDownIndicator from "components/shared/ScrollDownIndicator/ScrollDownIndicator";

const ProjectsSection = () => {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(0);

	const filteredProjects = projects.filter((project) => {
		if (selectedTab === 0) {
			return true;
		} else if (selectedTab === 1) {
			return project.category === "UI/UX Design";
		} else if (selectedTab === 2) {
			return project.category === "Graphic Design";
		} else if (selectedTab === 3) {
			return project.category === "Motion Graphic";
		}

		return false;
	});

	const handleTabChange = (_, newValue) => {
		setSelectedTab(newValue);
	};

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const category = params.get("category");

		if (category === "ux-ui") {
			setSelectedTab(1);
		} else if (category === "graphic-design") {
			setSelectedTab(2);
		} else {
			setSelectedTab(0);
		}
	}, [location]);

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
					My Projects
				</H2>
				<Tabs
					role="navigation"
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
					sx={{
						marginBottom: "50px",
						"& .Mui-selected": { color: "#dba39a !important" }, // Increase the specificity
						"& .MuiTabs-indicator": { backgroundColor: "#dba39a" },
						"& .MuiTab-root": {
							// Target the root of the Tab
							fontSize: {
								xs: "0.75rem", // Set the font size for xs screens
								sm: "0.875rem", // Set the font size for sm screens
								md: "1rem", // Set the font size for md screens and up
							},
						},
					}}
					value={selectedTab}
					onChange={handleTabChange}
				>
					<Tab label="All" sx={{ minWidth: "auto" }} />
					<Tab label="UI/UX Design" sx={{ minWidth: "auto" }} />
					<Tab label="Graphic Design" sx={{ minWidth: "auto" }} />
					<Tab label="Motion Graphic" sx={{ minWidth: "auto" }} />
				</Tabs>
				<Grid container justifyContent={{ xs: "center", md: "space-between" }}>
					{filteredProjects.map((item) => (
						<ProjectCard key={item.title} project={item} />
					))}
				</Grid>
			</MainContainer>
		</Box>
	);
};

export default ProjectsSection;
