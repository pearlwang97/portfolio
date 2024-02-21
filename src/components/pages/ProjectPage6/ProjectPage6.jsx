import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const ProjectPage6 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Cyber Era Poster Design"
				imageSrc="images/cyber-era-1.jpg"
			/>
			<OverviewSection />
		</div>
	);
};

export default ProjectPage6;
