import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	bloomBoxLogoDesignOverviewItems,
	bloomBoxLogoDesignProject,
	getBloomBoxLogoDesignNavGroups,
} from "../../../content/projects/bloomBoxLogoDesignContent";

const BloomBoxLogoDesign = () => {
	const navGroups = getBloomBoxLogoDesignNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={bloomBoxLogoDesignOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate {...bloomBoxLogoDesignProject} navGroups={navGroups} />
	);
};

export default BloomBoxLogoDesign;
