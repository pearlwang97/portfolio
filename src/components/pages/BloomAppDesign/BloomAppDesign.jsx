import React from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const BloomAppDesign = () => {
	return (
		<div>
			<ProjectBanner
				title="Bloom App Design"
				imageSrc="/images/bloom-app-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons
				prevLink="/furniture-banner-design"
				nextLink="/furniture-banner-design"
			/>
		</div>
	);
};

export default BloomAppDesign;
