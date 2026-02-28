import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ProjectDetailTemplate from "components/shared/ProjectDetailTemplate/ProjectDetailTemplate";
import { getProjectByRoute } from "content/projects/projectRegistry";

const ProjectDetailPage = ({ projectRoute }) => {
	const location = useLocation();
	const route = projectRoute || location.pathname;
	const project = getProjectByRoute(route);

	if (!project) {
		return <Navigate replace to="/works" />;
	}

	return <ProjectDetailTemplate project={project} />;
};

export default ProjectDetailPage;
