import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const FurnitureBannerDesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Weekends Catalog &  Campaign"
				imageSrc="images/weekend-banner.webp"
			/>
			<OverviewSection />
		</div>
	);
};

export default FurnitureBannerDesign;
