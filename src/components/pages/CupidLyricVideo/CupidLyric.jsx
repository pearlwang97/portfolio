import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const CupidLyricVideo = () => {
	const project = getProjectByRoute("/cupid-lyric-video");

	return <ProjectDetailTemplate project={project} />;
};

export default CupidLyricVideo;
