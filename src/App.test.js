import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the main navigation", async () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	expect((await screen.findAllByRole("link", { name: /projects/i })).length).toBeGreaterThan(0);
	expect((await screen.findAllByRole("link", { name: /about/i })).length).toBeGreaterThan(0);
});
