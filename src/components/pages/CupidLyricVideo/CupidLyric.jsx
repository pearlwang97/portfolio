import React from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const CupidLyricVideo = () => {
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

export default CupidLyricVideo;
