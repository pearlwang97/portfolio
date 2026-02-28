import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectDetailPage from "./ProjectDetailPage";
import ProjectCard from "components/shared/ProjectCard/ProjectCard";
import { getProjectByRoute } from "content/projects/projectRegistry";

describe("Project detail smoke tests", () => {
	test("renders a known project detail page", async () => {
		render(
			<MemoryRouter initialEntries={["/domino-app-redesign"]}>
				<ProjectDetailPage />
			</MemoryRouter>
		);

		expect(
			await screen.findByRole("heading", { name: /Domino’s APP Redesign/i })
		).toBeInTheDocument();
	});

	test("renders a standard project card and a video project card", () => {
		const standardProject = getProjectByRoute("/domino-app-redesign");
		const videoProject = getProjectByRoute("/summit-promotional-video");

		render(
			<MemoryRouter>
				<div>
					<ProjectCard
						project={{
							title: standardProject.cardTitle,
							image: standardProject.cardImage,
							link: standardProject.route,
							description: standardProject.cardDescription,
							category: standardProject.category,
							tools: standardProject.tools,
						}}
					/>
					<ProjectCard
						project={{
							title: videoProject.cardTitle,
							image: videoProject.cardImage,
							link: videoProject.route,
							description: videoProject.cardDescription,
							category: videoProject.category,
							tools: videoProject.tools,
						}}
						variant="featured"
					/>
				</div>
			</MemoryRouter>
		);

		expect(screen.getByText(/Domino’s APP Redesign/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Summit \| Promotional Video video preview/i)).toBeInTheDocument();
	});
});
