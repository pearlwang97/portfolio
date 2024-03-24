import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const CyberEraPoster = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Cyber Era Poster Design"
				imageSrc="images/cyber-era-1.jpg"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/chinese-zodiac" nextLink="/summit-promotional-video" />
		</div>
	);
};

export default CyberEraPoster;
