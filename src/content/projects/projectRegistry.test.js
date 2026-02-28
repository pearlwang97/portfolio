import { getProjectByRoute, projectCards, projectRegistry, validateProjectRegistry } from "./projectRegistry";

describe("projectRegistry", () => {
	test("passes integrity validation", () => {
		expect(() => validateProjectRegistry(projectRegistry)).not.toThrow();
	});

	test("keeps cards aligned with registry entries", () => {
		expect(projectCards).toHaveLength(projectRegistry.length);

		projectRegistry.forEach((project) => {
			const card = projectCards.find((item) => item.link === project.route);

			expect(card).toBeDefined();
			expect(card.title).toBe(project.cardTitle);
			expect(card.description).toBe(project.cardDescription);
		});
	});

	test("returns a project by route", () => {
		const project = getProjectByRoute("/domino-app-redesign");

		expect(project).toBeDefined();
		expect(project.title).toMatch(/Domino/i);
	});
});
