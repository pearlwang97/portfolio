import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

const ChineseZodiac = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProjectBanner
				title="Papercut Illustrations: Chinese Zodiac Collection"
				imageSrc="images/chinese-zodiac-banner.webp"
			/>
			<OverviewSection />
		</div>
	);
};

export default ChineseZodiac;
