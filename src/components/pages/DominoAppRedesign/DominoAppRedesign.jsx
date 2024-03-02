import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const DominoAppRedesign = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Domino’s APP Redesign"
				imageSrc="images/project-1-banner.jpg"
			/>
			<OverviewSection />
		</div>
	);
};

export default DominoAppRedesign;
