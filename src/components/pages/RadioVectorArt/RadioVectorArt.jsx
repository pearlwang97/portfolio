import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const RadioVectorArt = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="2D Realistic Radio Vector Art"
				imageSrc="/images/design-3.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/bloom-box-logo" nextLink="/chinese-zodiac" />
		</div>
	);
};

export default RadioVectorArt;
