import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	chineseZodiacOverviewItems,
	chineseZodiacProject,
	getChineseZodiacNavGroups,
} from "../../../content/projects/chineseZodiacContent";

const ChineseZodiac = () => {
	const navGroups = getChineseZodiacNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={chineseZodiacOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...chineseZodiacProject} navGroups={navGroups} />
	);
};

export default ChineseZodiac;
