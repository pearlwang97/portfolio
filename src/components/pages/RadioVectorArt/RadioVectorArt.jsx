import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const RadioVectorArt = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			{/* <ProjectCarousel /> */}
			<ProjectBanner
				title="2D Realistic Radio Vector Art"
				imageSrc="/images/design-3.webp"
			/>
			<OverviewSection />
		</div>
	);
};

export default RadioVectorArt;
