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
				title="Summit Promotional Video"
                videoSrc="https://www.youtube.com/embed/6uoTv0i-57Q?si=r04rmSMHP1AodJlO"
			/>
			<OverviewSection />
		</div>
	);
};

export default RadioVectorArt;
