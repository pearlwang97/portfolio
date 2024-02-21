import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const ProjectPage4 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="BloomBox Logo Design"
				imageSrc="images/bloom-box-banner.jpg"
			/>
			<OverviewSection />
		</div>
	);
};

export default ProjectPage4;
