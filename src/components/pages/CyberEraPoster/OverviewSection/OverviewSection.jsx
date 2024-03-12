import React from "react";

import { Grid, Box } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import { useInView } from "react-intersection-observer";
import InViewContext from "components/context/InViewContext";

const OverviewSection = () => {
	const [ref1, inView1] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});
	const [ref2, inView2] = useInView({
		triggerOnce: false,
		threshold: 0.2,
	});
	const [ref3, inView3] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});
	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "design process" },
		{ to: "6", label: "deliverable" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "MAR - APR 2023" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "Illustrator, Photoshop" },
	];
	return (
		<InViewContext.Provider value={[inView1, inView2, inView3]}>
			<ProjectContentContainer navItems={navItems}>
				<div ref={ref1}>
					<ProjectStepSection title="Overview" id="1">
						<ProjectOverviewList listItems={listItems} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									The 'Cyber Era' poster was created to deliver a compelling
									visual narrative for a digital audience, blending photography
									with original vector illustrations in a non-destructive manner
									to demonstrate the application of design principles and
									technical skill.
								</Body1>
							</Grid>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref2}>
					<ProjectStepSection title="Conceptualization" id="2">
						<Grid container justifyContent="space-between">
							<Body1 sx={{ marginTop: "1rem" }}>
								The design process began with selecting a character to serve as
								the focal point of the poster. The character's image was refined
								to fit the futuristic concept by digitally painting over a
								created mask, enhancing the hair and body with smooth gradients,
								subtle shading, and highlights to add depth and a surreal
								appearance. The eyeballs were colored to shift from a natural
								human look to a more robotic appearance, aligning with the
								cybernetic theme.
							</Body1>
							<Image
								src="/images/project-6-concept.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Design" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								Attention then turned to integrating goggles, which were
								designed in Illustrator and brought into Photoshop for
								enhancement. Here, they received a realistic glow and
								three-dimensional appearance through strategic use of bevel,
								emboss, and overlay layers, further anchoring the character in a
								futuristic realm.
							</Body1>
							<Box
								component="img"
								src="/images/cyber-era-glass.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<Box sx={{ display: "block" }}>
								<Image
									src="/images/cyber-era-vertical.webp"
									sx={{
										float: "right",
										marginLeft: "20px",
										marginBottom: "10px",
										width: { sm: "100%", md: "50%" },
									}}
								/>
								<Body1>
									Next I proceeded to create cybernetic details, using the pen
									tool to draw lines across the body and face, simulating
									artificial carvings by applying bevel and emboss effects. To
									depict the AI robot's inner mechanics, I layered photographs
									of electronic components beneath the carved facial features,
									using adjustment layers and the pen tool to achieve a humanoid
									appearance. The arms were created utilizing a photograph of a
									microchip to maintain the cybernetic theme.
								</Body1>
							</Box>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Composition" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								The background was composed of a cityscape photo merged with
								line art vectors from Illustrator, enriched with sparkling
								diamond shapes, smoke effects, and a Matrix-inspired binary code
								rain. This binary code was transformed from text to shapes and
								layered to create depth, then highlighted with glow effects to
								underscore the cyber atmosphere.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Finalization" id="5">
						<Grid container justifyContent="space-between">
							<Body1>
								To finalize the visual concept, I incorporated a digital glitch
								effect that simulated the appearance of a technological
								malfunction. This was achieved by employing a palette of
								contrasting neon colors that stand out against the composition.
								With the visual narrative nearly complete, the next step was to
								overlay the typography. Additional adjustments were made across
								the design to ensure visual harmony and to solidify the
								connection between the poster elements and the narrative of the
								TV series.
							</Body1>
							<Body1>
								All elements are from real photographs or vectors I made. And
								aim to create a non-destructive design. Creative and skilled
								usage of the Principles of Design and Elements of Art.
								Compositional Unity achieved. Creative and exemplary technical
								skills demonstrated in file construction.
							</Body1>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref3}>
					<ProjectStepSection title="Deliverable" id="6">
						<Grid container justifyContent="space-between">
							<Image src="/images/cyber-era-final.jpg" alt="Problem" />
						</Grid>
					</ProjectStepSection>
				</div>
			</ProjectContentContainer>
		</InViewContext.Provider>
	);
};

export default OverviewSection;
