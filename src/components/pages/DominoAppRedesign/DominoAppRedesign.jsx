import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const DominoAppRedesign = () => {
	const project = getProjectByRoute("/domino-app-redesign");

	return <ProjectDetailTemplate project={project} />;
};

export default DominoAppRedesign;
