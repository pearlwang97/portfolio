import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	cupidLyricVideoOverviewItems,
	cupidLyricVideoProject,
	getCupidLyricVideoNavGroups,
} from "../../../content/projects/cupidLyricVideoContent";

const CupidLyricVideo = () => {
	const navGroups = getCupidLyricVideoNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={cupidLyricVideoOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...cupidLyricVideoProject} navGroups={navGroups} />
	);
};

export default CupidLyricVideo;
