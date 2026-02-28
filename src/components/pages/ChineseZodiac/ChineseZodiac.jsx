import React from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const ChineseZodiac = () => {
	return (
		<div>
			<ProjectBanner
				title="Papercut Illustrations: Chinese Zodiac Collection"
				imageSrc="/images/chinese-zodiac-banner.webp"
			/>
			<OverviewSection />
			<ProjectNavButtons prevLink="/bloom-box-logo" nextLink="/cyber-era-poster" />
		</div>
	);
};

export default ChineseZodiac;
