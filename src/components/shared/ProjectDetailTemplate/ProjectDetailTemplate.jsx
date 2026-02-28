import React from "react";
import { Element } from "react-scroll";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";

const ProjectDetailTemplate = ({
	title,
	imageSrc,
	videoSrc,
	navGroups,
	navItems,
	prevLink,
	nextLink,
	children,
}) => {
	const resolvedNavItems =
		navGroups?.map((navGroup) => ({
			to: navGroup.spyId || navGroup.id,
			label: navGroup.label,
		})) || navItems;

	const renderedContent = navGroups
		? navGroups.map((navGroup) => {
				const groupContent =
					typeof navGroup.render === "function"
						? navGroup.render()
						: navGroup.render;

				return (
					<Element key={navGroup.id} name={navGroup.spyId || navGroup.id}>
						{groupContent}
					</Element>
				);
		  })
		: children;

	return (
		<div>
			<ProjectBanner title={title} imageSrc={imageSrc} videoSrc={videoSrc} />
			<ProjectContentContainer navItems={resolvedNavItems}>
				{renderedContent}
			</ProjectContentContainer>
			{(prevLink || nextLink) && (
				<ProjectNavButtons prevLink={prevLink} nextLink={nextLink} />
			)}
		</div>
	);
};

export default ProjectDetailTemplate;
