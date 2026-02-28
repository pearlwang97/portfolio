import React from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const FurnitureBannerDesign = () => {
	return (
		<div>
			<ProjectBanner
				title="Weekends Catalog &  Campaign"
				imageSrc="/images/weekend-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/bloom-app-design" nextLink="/bloom-box-logo" />
		</div>
	);
};

export default FurnitureBannerDesign;
