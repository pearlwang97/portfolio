import React, { useEffect } from "react";
// import DesignSection from "./DesignSection/DesignSection";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import OverviewSection from "./OverviewSection/OverviewSection";

const ProjectPage6 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectCarousel />
			<OverviewSection />
		</div>
	);
};

export default ProjectPage6;
