import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const BloomAppDesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Bloom App Design"
				imageSrc="/images/bloom-app-banner.jpg"
			/>
			<OverviewSection />
		</div>
	);
};

export default BloomAppDesign;