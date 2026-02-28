import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	bloomAppDesignOverviewItems,
	bloomAppDesignProject,
	getBloomAppDesignNavGroups,
} from "../../../content/projects/bloomAppDesignContent";

const BloomAppDesign = () => {
	const navGroups = getBloomAppDesignNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={bloomAppDesignOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...bloomAppDesignProject} navGroups={navGroups} />
	);
};

export default BloomAppDesign;
