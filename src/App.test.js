import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the main navigation", () => {
	window.scrollTo = jest.fn();

	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	expect(screen.getAllByRole("link", { name: /projects/i }).length).toBeGreaterThan(0);
	expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThan(0);
});
