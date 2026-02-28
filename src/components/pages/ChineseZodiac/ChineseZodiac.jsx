import React from "react";
import { getProjectByRoute } from "content/projects/projectRegistry";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";

const ChineseZodiac = () => {
	const project = getProjectByRoute("/chinese-zodiac");

	return <ProjectDetailTemplate project={project} />;
};

export default ChineseZodiac;
