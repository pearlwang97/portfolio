import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	getDominoAppRedesignNavGroups,
	dominoAppRedesignOverviewItems,
	dominoAppRedesignProject,
} from "../../../content/projects/dominoAppRedesignContent";

const DominoAppRedesign = () => {
	const navGroups = getDominoAppRedesignNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={dominoAppRedesignOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...dominoAppRedesignProject} navGroups={navGroups} />
	);
};

export default DominoAppRedesign;
