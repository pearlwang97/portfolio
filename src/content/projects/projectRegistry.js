import bloomAppDesignContent from "./bloomAppDesignContent";
import bloomBoxLogoDesignContent from "./bloomBoxLogoDesignContent";
import chineseZodiacContent from "./chineseZodiacContent";
import cupidLyricVideoContent from "./cupidLyricVideoContent";
import cyberEraPosterContent from "./cyberEraPosterContent";
import dominoAppRedesignContent from "./dominoAppRedesignContent";
import furnitureBannerDesignContent from "./furnitureBannerDesignContent";
import radioVectorArtContent from "./radioVectorArtContent";
import summitPromotionalVideoContent from "./summitPromotionalVideoContent";

const rawProjectContents = [
	dominoAppRedesignContent,
	bloomAppDesignContent,
	furnitureBannerDesignContent,
	bloomBoxLogoDesignContent,
	radioVectorArtContent,
	chineseZodiacContent,
	cyberEraPosterContent,
	summitPromotionalVideoContent,
	cupidLyricVideoContent,
];

const buildProjectEntry = (content, index, contents) => {
	const previousIndex = (index - 1 + contents.length) % contents.length;
	const nextIndex = (index + 1) % contents.length;

	return {
		...content.project,
		slug: content.slug,
		route: content.route,
		category: content.category,
		hideNav: content.hideNav || false,
		cardTitle: content.cardTitle || content.project.title,
		cardImage: content.cardImage,
		cardDescription: content.cardDescription,
		tools: content.tools,
		overviewItems: content.overviewItems,
		getNavGroups: content.getNavGroups,
		prevLink: contents[previousIndex].route,
		nextLink: contents[nextIndex].route,
	};
};

export const projectRegistry = rawProjectContents.map(buildProjectEntry);

export const projectsByRoute = projectRegistry.reduce((accumulator, project) => {
	accumulator[project.route] = project;
	return accumulator;
}, {});

export const getProjectByRoute = (route) => projectsByRoute[route];

export const projectCards = projectRegistry.map((project) => ({
	title: project.cardTitle,
	image: project.cardImage,
	link: project.route,
	description: project.cardDescription,
	category: project.category,
	tools: project.tools,
}));
