import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const BloomBoxLogoDesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="BloomBox Logo Design"
				imageSrc="images/bloombox-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/furniture-banner-deisgn" nextLink="/2d-radio-vector-art" />
		</div>
	);
};

export default BloomBoxLogoDesign;
