import React from "react";

import { Grid } from "@mui/material";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import Image from "components/shared/Image/Image";

const OverviewSection = () => {
	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "design process" },
		{ to: "6", label: "deliverable" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "Feb 2024" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "Illustrator, Photoshop" },
	];
	return (
		<ProjectContentContainer navItems={navItems}>
			<ProjectStepSection title="Overview" id="1">
				<ProjectOverviewList listItems={listItems} />
				<Grid container justifyContent="space-between">
					<Grid item xs={12}>
						<Body1>
							The project began with an analysis of the client's requirements
							for their Spring Sale promotion. This involved identifying the
							target audience, the key message of offering up to 30% off, and
							the desired action I wanted the audience to take—visiting the
							website to make a purchase.
						</Body1>
					</Grid>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Understanding the Brief" id="2">
				<Grid container justifyContent="space-between">
					<Body1 sx={{ marginTop: "1rem" }}>
						The design process began with selecting a character to serve as the
						focal point of the poster. The character's image was refined to fit
						the futuristic concept by digitally painting over a created mask,
						enhancing the hair and body with smooth gradients, subtle shading,
						and highlights to add depth and a surreal appearance. The eyeballs
						were colored to shift from a natural human look to a more robotic
						appearance, aligning with the cybernetic theme.
					</Body1>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Concept Development" id="3">
				<Grid container justifyContent="space-between">
					<Body1>
						The next step involved brainstorming and sketching initial concepts.
						The focus was on how to effectively communicate the sale's value
						proposition across different banner sizes while ensuring a unified
						look and feel. This phase resulted in the selection of a fresh color
						scheme and a clear call to action that would be consistent across
						all banners.
					</Body1>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Design Execution" id="4">
				<Grid container justifyContent="space-between">
					<Body1>
						This involved creating the visual elements, selecting typography,
						and placing the call to action in a prominent position. Each banner
						size was optimized with its layout while maintaining the overall
						design language and message coherence. For better readability and
						visual appeal, modifying text sizes, repositioning images, and
						adjusting elements were achieved to fit within the constraints of
						each banner size.
					</Body1>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Review and Refinement" id="5">
				<Grid container justifyContent="space-between">
					<Body1>
						In the final phase, the designs went through a review for
						consistency, message clarity, and visual impact. This involved
						seeking feedback from peers and potential users, ensuring the banner
						package was polished and effectively communicated its intended
						message.
					</Body1>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Deliverable" id="6">
				<Grid container justifyContent="space-between">
					<Image src="/images/feature-work-7.jpg" alt="Furniture Banner Design" />
				</Grid>
			</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
