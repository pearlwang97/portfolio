import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const FurnitureBannerDesign = () => {
	const project = getProjectByRoute("/furniture-banner-design");

	return <ProjectDetailTemplate project={project} />;
};

export default FurnitureBannerDesign;
