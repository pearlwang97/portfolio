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
				title="Cupid Lyric Video"
                videoSrc="https://www.youtube.com/embed/yylNn0qRsiY?si=LedKtuglcnC24dRV"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/summit-promotional-video" nextLink="/domino-app-redesign" />
		</div>
	);
};

export default RadioVectorArt;
