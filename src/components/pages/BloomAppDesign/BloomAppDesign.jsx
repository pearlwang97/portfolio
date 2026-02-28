import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const BloomAppDesign = () => {
	const project = getProjectByRoute("/bloom-app-design");

	return <ProjectDetailTemplate project={project} />;
};

export default BloomAppDesign;
