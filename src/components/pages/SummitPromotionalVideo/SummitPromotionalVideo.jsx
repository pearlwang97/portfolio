import React from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const SummitPromotionalVideo = () => {
	return (
		<div>
			<ProjectBanner
				title="Summit Promotional Video"
				videoSrc="https://www.youtube.com/embed/6uoTv0i-57Q?si=r04rmSMHP1AodJlO"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/cyber-era-poster" nextLink="/cupid-lyric-video" />
		</div>
	);
};

export default SummitPromotionalVideo;
