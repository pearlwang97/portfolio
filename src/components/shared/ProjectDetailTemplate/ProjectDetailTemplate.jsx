import React from "react";
import { Element } from "react-scroll";
import ProjectBanner from "components/shared/ProjectBanner/ProjectBanner";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectNavButtons from "components/shared/ProjectsNavButtons/ProjectsNavButtons";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";

const ProjectDetailTemplate = ({
	project,
	title,
	imageSrc,
	videoSrc,
	navGroups,
	navItems,
	prevLink,
	nextLink,
	children,
}) => {
	const resolvedProject = project || {
		title,
		imageSrc,
		videoSrc,
		navGroups,
		prevLink,
		nextLink,
	};

	const overviewList = () => (
		<ProjectOverviewList listItems={resolvedProject.overviewItems || []} />
	);

	const rawNavGroups =
		resolvedProject.navGroups ||
		resolvedProject.getNavGroups?.({
			OverviewList: overviewList,
		});

	const resolvedNavGroups =
		rawNavGroups?.map((navGroup) =>
			navGroup.sections
				? navGroup
				: {
						id: navGroup.id,
						label: navGroup.label,
						spyId: navGroup.spyId,
						sections: [
							{
								id: navGroup.id,
								content:
									typeof navGroup.render === "function"
										? navGroup.render()
										: navGroup.render,
							},
						],
				  }
		) || null;

	const shouldShowNav = !resolvedProject.hideNav;

	const resolvedNavItems =
		shouldShowNav
			? resolvedNavGroups?.map((navGroup) => ({
					to: navGroup.spyId || navGroup.id,
					label: navGroup.label,
			  })) || navItems
			: null;

	const renderedContent = resolvedNavGroups
		? resolvedNavGroups.map((navGroup) => {
				return (
					<Element key={navGroup.id} name={navGroup.spyId || navGroup.id}>
						{navGroup.sections.map((section, index) => {
							if (section.title) {
								return (
									<ProjectStepSection
										key={section.id || `${navGroup.id}-${index}`}
										title={section.title}
										id={section.id}
										noPadding={section.noPadding}
									>
										{section.showOverviewList && overviewList()}
										{section.content}
									</ProjectStepSection>
								);
							}

							return (
								<React.Fragment key={section.id || `${navGroup.id}-${index}`}>
									{section.content}
								</React.Fragment>
							);
						})}
					</Element>
				);
		  })
		: children;

	return (
		<div>
			<ProjectBanner
				title={resolvedProject.title}
				imageSrc={resolvedProject.imageSrc}
				videoSrc={resolvedProject.videoSrc}
			/>
			<ProjectContentContainer navItems={resolvedNavItems}>
				{renderedContent}
			</ProjectContentContainer>
			{(resolvedProject.prevLink || resolvedProject.nextLink) && (
				<ProjectNavButtons
					prevLink={resolvedProject.prevLink}
					nextLink={resolvedProject.nextLink}
				/>
			)}
		</div>
	);
};

export default ProjectDetailTemplate;
