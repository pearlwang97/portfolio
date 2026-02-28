import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const BloomBoxLogoDesign = () => {
	const project = getProjectByRoute("/bloom-box-logo");

	return <ProjectDetailTemplate project={project} />;
};

export default BloomBoxLogoDesign;
