import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const RadioVectorArt = () => {
	const project = getProjectByRoute("/2d-radio-vector-art");

	return <ProjectDetailTemplate project={project} />;
};

export default RadioVectorArt;
