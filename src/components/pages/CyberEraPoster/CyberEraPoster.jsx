import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const CyberEraPoster = () => {
	const project = getProjectByRoute("/cyber-era-poster");

	return <ProjectDetailTemplate project={project} />;
};

export default CyberEraPoster;
