import React, { useEffect } from "react";
import OverviewSection from "./OverviewSection/OverviewSection";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";

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
		</div>
	);
};

export default RadioVectorArt;
