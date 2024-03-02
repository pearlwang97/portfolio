import React, { useState } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Project from "components/pages/ProjectsPage/Project/Project";
import { projects } from "components/constants/constants";

const ProjectsSection = () => {

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};
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
					My Works
				</H2>
				<Tabs
					sx={{
						marginBottom: "50px",
						"& .Mui-selected": { color: "#dba39a !important" }, // Increase the specificity
						"& .MuiTabs-indicator": { backgroundColor: "#dba39a" },
					}}
					value={selectedTab}
					onChange={handleTabChange}
				>
					<Tab label="All" />
					<Tab label="UI/UX Design" />
					<Tab label="Graphic Design" />
				</Tabs>
				<Grid container justifyContent={{ xs: "center", md: "space-between" }}>
					{projects
						.filter((project) => {
							if (selectedTab === 0) {
								return true;
							} else if (selectedTab === 1) {
								return project.category === "UI/UX Design";
							} else if (selectedTab === 2) {
								return project.category === "Graphic Design";
							}
						})
						.map((item, index) => (
							<Project
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
			</MainContainer>
		</Box>
	);
};

export default ProjectsSection;
