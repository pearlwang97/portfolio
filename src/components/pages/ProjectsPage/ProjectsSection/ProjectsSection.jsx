import React, { useState, useEffect } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import { useLocation } from "react-router-dom";
import MainContainer from "components/shared/MainContainer/MainContainer";
import ProjectCard from "components/shared/ProjectCard/ProjectCard";
import { projects } from "components/constants/constants";
import {
	COLORS,
	SECTION_HEADERS,
	SECTION_LAYOUTS,
	SECTION_MARGINS,
} from "components/constants/styleTokens";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
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
				marginBottom: SECTION_MARGINS.featured,
			}}
		>
			<MainContainer
				sx={{
					...SECTION_LAYOUTS.wrapped,
				}}
			>
				<SectionHeader
					title="My Projects"
					titleMargin={null}
					titleSx={{ marginBottom: SECTION_HEADERS.featureTitleMargin }}
				/>
				<Tabs
					role="navigation"
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
					sx={{
						marginBottom: "50px",
						"& .Mui-selected": { color: `${COLORS.accent} !important` },
						"& .MuiTabs-indicator": { backgroundColor: COLORS.accent },
						"& .MuiTab-root": {
							fontSize: {
								xs: "0.75rem",
								sm: "0.875rem",
								md: "1rem",
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
