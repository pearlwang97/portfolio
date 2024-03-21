import React from "react";

import { Grid, Box } from "@mui/material";
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
		{ key: "TIMELINE", value: "JUL - AUG 2023" },
		{ key: "ROLE", value: "UI/UX Designer" },
		{ key: "Tools", value: "Figma, Illustrator" },
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
									The Bloom project aimed to design a user-friendly flower
									delivery app, focusing on delivering a visually appealing and
									intuitive interface for users. As the UI designer on the team,
									I played a role in shaping the visual aspects of the app,
									utilizing Figma to bring the concept to life. This project was
									executed following the structured phases of the waterfall
									methodology, ensuring a systematic approach from concept to
									final design.
								</Body1>
							</Grid>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref2}>
					<ProjectStepSection title="Initiation" id="2">
						<Grid container justifyContent="space-between">
							<Body1 sx={{ marginTop: "1rem" }}>
								The project began with a kickoff meeting where the team outlined
								the goals for the "Bloom" flower delivery app. Given the
								project's context and constraints, initial research was limited
								but focused on understanding basic user needs and existing
								flower delivery services. This phase was about aligning the
								team's understanding of the project scope and objectives,
								particularly emphasizing the UI components I would be
								responsible for designing.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Design Conceptualization" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								​​With a basic understanding of the project's goals, I moved
								into the design conceptualization phase. This step involved
								brainstorming and sketching initial design ideas for the app's
								interface. I focused on creating wireframes in Figma to
								establish a visual structure for the app, including the layout
								of key screens such as the homepage, product selection, and
								checkout process. The aim was to develop a coherent design
								language that would make the app intuitive and engaging for
								users.
							</Body1>
							{/* <Box
								component="img"
								src="/images/project-2-gallery-5.png"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/> */}
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Hi-Fi Wireframe & Prototype" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								Transitioning from wireframes, I then developed high-fidelity
								wireframes. This phase was dedicated to applying color schemes,
								typography, and visual elements to the wireframes, transforming
								them into detailed mockups that closely represented the final
								product. Special attention was paid to the UI components, such
								as buttons, icons, and input fields.
							</Body1>
							<Box
								component="img"
								src="/images/project-2-gallery-7.png"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
							<Body1>
								Once the high-fidelity designs were completed, I created an
								interactive prototype that simulated the user experience,
								allowing the team to navigate through the app and interact with
								the UI elements.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Finalization" id="5">
						<Grid container justifyContent="space-between">
							<Body1>
								In the project's concluding stage, I finalized the "Bloom" app's
								design, transforming initial sketches into an interactive
								prototype. This phase emphasized refining UI components and
								design choices, demonstrating the team's capacity to achieve a
								visually appealing and user-friendly app interface, led by my
								focus on UI design, all within the educational scope of the
								project.
							</Body1>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref3}>
					<ProjectStepSection title="Deliverable" id="6">
						<Grid container justifyContent="space-between">
							<Box
								component="img"
								src="/images/project-2-gallery-8.png"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
						</Grid>
					</ProjectStepSection>
				</div>
			</ProjectContentContainer>
		</InViewContext.Provider>
	);
};

export default OverviewSection;
