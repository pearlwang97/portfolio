import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const BloomAppDesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Bloom App Design"
				imageSrc="/images/bloom-app-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/furniture-banner-deisgn" nextLink="/furniture-banner-deisgn" />
		</div>
	);
};

export default BloomAppDesign;