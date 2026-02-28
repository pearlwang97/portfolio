import React from "react";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import {
	furnitureBannerDesignOverviewItems,
	furnitureBannerDesignProject,
	getFurnitureBannerDesignNavGroups,
} from "../../../content/projects/furnitureBannerDesignContent";

const FurnitureBannerDesign = () => {
	const navGroups = getFurnitureBannerDesignNavGroups({
		OverviewList: () => (
			<ProjectOverviewList listItems={furnitureBannerDesignOverviewItems} />
		),
	});

	return (
		<ProjectDetailTemplate
			{...furnitureBannerDesignProject}
			navGroups={navGroups}
		/>
	);
};

export default FurnitureBannerDesign;
