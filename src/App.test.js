import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "components/Header/Header";

test("renders the main navigation", async () => {
	render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);

	expect((await screen.findAllByRole("link", { name: /projects/i })).length).toBeGreaterThan(0);
	expect((await screen.findAllByRole("link", { name: /about/i })).length).toBeGreaterThan(0);
});
