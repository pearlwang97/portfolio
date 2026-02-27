import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const DominoAppRedesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Domino’s APP Redesign"
				imageSrc="/images/project-1-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/cupid-lyric-video" nextLink="/bloom-app-design" />
		</div>
	);
};

export default DominoAppRedesign;
