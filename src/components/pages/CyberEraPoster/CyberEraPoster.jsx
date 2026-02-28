import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	cyberEraPosterOverviewItems,
	cyberEraPosterProject,
	getCyberEraPosterNavGroups,
} from "../../../content/projects/cyberEraPosterContent";

const CyberEraPoster = () => {
	const navGroups = getCyberEraPosterNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={cyberEraPosterOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...cyberEraPosterProject} navGroups={navGroups} />
	);
};

export default CyberEraPoster;
