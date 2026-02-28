import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	getSummitPromotionalVideoNavGroups,
	summitPromotionalVideoOverviewItems,
	summitPromotionalVideoProject,
} from "../../../content/projects/summitPromotionalVideoContent";

const SummitPromotionalVideo = () => {
	const navGroups = getSummitPromotionalVideoNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={summitPromotionalVideoOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate
			{...summitPromotionalVideoProject}
			navGroups={navGroups}
		/>
	);
};

export default SummitPromotionalVideo;
