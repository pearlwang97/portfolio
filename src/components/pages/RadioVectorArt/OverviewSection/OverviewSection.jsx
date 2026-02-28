import React from "react";

import { Grid, Box } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
const OverviewSection = () => {
	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "design process" },
		{ to: "6", label: "deliverable" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "MAY - JUN 2023" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "Illustrator" },
	];
	return (
		<ProjectContentContainer navItems={navItems}>
					<ProjectStepSection title="Overview" id="1">
						<ProjectOverviewList listItems={listItems} />
						<Grid container justifyContent="space-between">
							<Body1>
								The project produces a photo-realistic 2D illustration that
								achieves a 3D effect,utilizing the essential tools in Adobe
								Illustrator. The objective of this project is to showcase the
								ability to create lifelike 2D vector designs that mimic the
								complexity and depth of 3D objects. It demonstrates the
								expertise as a digital designer, particularly in mastering the
								fundamental tools for shaping objects and intricacies of
								crafting vector designs.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Inspiration" id="2">
						<Grid container justifyContent="space-between">
							<Body1 sx={{ marginTop: "1rem" }}>
								A reference photograph of a radio set the stage for this
								project, chosen for its complex mix of components. This
								photograph was imported into Illustrator and set as the base
								layer. This crucial step provided a precise reference for
								accurately capturing the intricate details and correct
								proportions in the vector illustration.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Outline and Color" id="3">
						<Grid container justifyContent="space-between">
							<Box>
								<Image
									src="/images/project-3-gallery-2.png"
									alt="radio vector illustration mockup"
									sx={{
										marginBottom: "10px",
										// width: { sm: "100%", md: "50%" },
									}}
								/>
								<Body1>
									In the initial phase of crafting the vector art, I outlined
									the radio, drawing each line with precision to ensure the
									vector closely mimicked the real object's form.
								</Body1>
								<Image
									src="/images/project-3-gallery-1.png"
									sx={{
										marginRight: "20px",
										// width: { sm: "100%", md: "50%" },
									}}
								/>
								<Body1>
									The coloring phase was integral to bringing the radio to life.
									I primarily used shades of grey, created by adjusting the
									tints of pure black in Adobe Illustrator. To amplify realism,
									the free-form gradient tool was mostly used, this accurately
									captured the interplay of light and shadow on the radio and
									everything from reflections to subtle shadows.
								</Body1>
								<Body1>
									The biggest challenge here was the numerous small holes in the
									radio, each of them required a distinct light and shadow
									effect. After a long time of tweaking them one by one, the
									final look was perfectly close to what it would look like in
									reality.
								</Body1>
							</Box>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Final Touch" id="5">
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<Body1>
									In the final stage, I added even more details to give the
									radio a 3D effect. This included putting text and icons on the
									digital display. To make the illustration look more realistic,
									I chose a simple solid color for the background and added a
									reflection under the radio. This reflection used a gradient
									effect to mimic how a shiny surface would reflect the radio. I
									also used the grain texture effect to give the radio's surface
									a realistic texture. Finally, a realistic 2D vector
									illustration of a radio was completed with its 3D essence.
								</Body1>
							</Box>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Deliverable" id="6">
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<Image
									src="/images/design-3.webp"
									sx={{
										marginBottom: "10px",
										width: { sm: "100%", md: "100%" },
									}}
								/>
							</Box>
						</Grid>
					</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
