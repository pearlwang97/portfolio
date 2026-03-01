import bloomAppDesignContent from "./bloomAppDesignContent";
import bloomBoxLogoDesignContent from "./bloomBoxLogoDesignContent";
import chineseZodiacContent from "./chineseZodiacContent";
import cupidLyricVideoContent from "./cupidLyricVideoContent";
import cyberEraPosterContent from "./cyberEraPosterContent";
import dominoAppRedesignContent from "./dominoAppRedesignContent";
import furnitureBannerDesignContent from "./furnitureBannerDesignContent";
import industrialProductMarketingSystemContent from "./industrialProductMarketingSystemContent";
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
	industrialProductMarketingSystemContent,
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

const validateProjectRegistry = (projects) => {
	const seenRoutes = new Set();
	const seenSlugs = new Set();
	const knownRoutes = new Set(projects.map((project) => project.route));
	const StubOverviewList = () => null;

	projects.forEach((project) => {
		if (!project.slug || typeof project.slug !== "string") {
			throw new Error("Project registry entry is missing a valid slug.");
		}

		if (!project.route || typeof project.route !== "string" || !project.route.startsWith("/")) {
			throw new Error(`Project "${project.slug}" is missing a valid route.`);
		}

		if (seenSlugs.has(project.slug)) {
			throw new Error(`Duplicate project slug found: ${project.slug}`);
		}

		if (seenRoutes.has(project.route)) {
			throw new Error(`Duplicate project route found: ${project.route}`);
		}

		seenSlugs.add(project.slug);
		seenRoutes.add(project.route);

		if (!project.title || !project.cardTitle || !project.cardDescription) {
			throw new Error(`Project "${project.slug}" is missing required title or description fields.`);
		}

		if (!Array.isArray(project.tools) || project.tools.length === 0) {
			throw new Error(`Project "${project.slug}" must define at least one tool.`);
		}

		if (!Array.isArray(project.overviewItems) || project.overviewItems.length === 0) {
			throw new Error(`Project "${project.slug}" must define overview items.`);
		}

		if (typeof project.getNavGroups !== "function") {
			throw new Error(`Project "${project.slug}" must expose getNavGroups().`);
		}

		const navGroups = project.getNavGroups({ OverviewList: StubOverviewList });

		if (!Array.isArray(navGroups) || navGroups.length === 0) {
			throw new Error(`Project "${project.slug}" must return at least one nav group.`);
		}

		const seenNavGroupIds = new Set();

		navGroups.forEach((navGroup) => {
			if (!navGroup?.id || !navGroup?.label) {
				throw new Error(`Project "${project.slug}" has an invalid nav group definition.`);
			}

			if (seenNavGroupIds.has(navGroup.id)) {
				throw new Error(`Project "${project.slug}" has a duplicate nav group id: ${navGroup.id}`);
			}

			seenNavGroupIds.add(navGroup.id);

			const hasSections = Array.isArray(navGroup.sections) && navGroup.sections.length > 0;
			const hasLegacyRender = typeof navGroup.render === "function";

			if (!hasSections && !hasLegacyRender) {
				throw new Error(
					`Project "${project.slug}" nav group "${navGroup.id}" must define sections or render().`
				);
			}
		});

		if (!knownRoutes.has(project.prevLink) || !knownRoutes.has(project.nextLink)) {
			throw new Error(`Project "${project.slug}" has an invalid prev/next route.`);
		}
	});
};

if (process.env.NODE_ENV !== "production") {
	validateProjectRegistry(projectRegistry);
}

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

export { validateProjectRegistry };
