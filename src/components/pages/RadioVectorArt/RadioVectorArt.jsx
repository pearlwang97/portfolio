import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	getRadioVectorArtNavGroups,
	radioVectorArtOverviewItems,
	radioVectorArtProject,
} from "../../../content/projects/radioVectorArtContent";

const RadioVectorArt = () => {
	const navGroups = getRadioVectorArtNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={radioVectorArtOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...radioVectorArtProject} navGroups={navGroups} />
	);
};

export default RadioVectorArt;
