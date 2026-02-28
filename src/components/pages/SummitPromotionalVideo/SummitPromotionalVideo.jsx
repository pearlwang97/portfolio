import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const SummitPromotionalVideo = () => {
	const project = getProjectByRoute("/summit-promotional-video");

	return <ProjectDetailTemplate project={project} />;
};

export default SummitPromotionalVideo;
