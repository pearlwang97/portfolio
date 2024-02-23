import React from "react";
import ProjectOverview from "components/shared/ProjectOverview/ProjectOverview";

const UxDesignPage = () => {
	const projects = [
		{
			imageSrc: "/images/design-1.png",
			altText: "domino cover",
			linkTo: "/project-1",
			title: "Domino’s APP Redesign",
			goal: "The objective of this project is to create a user-centered, modern interface for the existing Domino’s App using Figma and Adobe Illustrator. It highlights the application of user research principles and the strategic use of design tools to improve usability and user experience.",
			role: "UI/UX Designer",
			tools: [
				{ title: "Figma", iconSrc: "/images/figma-logo.svg", altText: "Figma" },
				{ title: "Illustrator", iconSrc: "/images/ai-logo.svg", altText: "AI" },
			],
			horizontalAlign: "left",
		},
		{
			imageSrc: "/images/design-2.png",
			altText: "bloom photo",
			linkTo: "/project-2",
			title: "Bloom APP Design",
			goal: 'The goal of this project is to create a user-friendly flower delivery app "Bloom" using Figma for the Project Management course (MDIA2092). As the UI/UX designer, Peirong collaborated with team members, including a developer, designer, and project manager, following the waterfall methodology. The project primarily showcases the student\'s ability to integrate user research principles into Figma, creating effective design components and fostering a seamless interactive design through team collaboration.',
			role: "UI/UX Designer",
			tools: [
				{ title: "Figma", iconSrc: "/images/figma-logo.svg", altText: "Figma" },
			],
			horizontalAlign: "right",
		},
	];
	return (
		<div>
			{/* <DesignSection /> */}
			{projects.map((section, index) => (
				<ProjectOverview key={index} {...section} index={index} />
			))}
		</div>
	);
};

export default UxDesignPage;
