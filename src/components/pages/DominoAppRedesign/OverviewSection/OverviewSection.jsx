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
									The objective of this project is to create a user-centered,
									modern interface for the existing Domino’s App using Figma and
									Adobe Illustrator. It highlights the application of user
									research principles and the strategic use of design tools to
									improve usability and user experience.
								</Body1>
								<Image src="/images/project-1-timeline.jpg" />
							</Grid>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref2}>
					<ProjectStepSection title="Initiation and Research" id="2">
						<Grid container justifyContent="space-between">
							<Grid item xs={12} md={6}>
								<Image
									src="/images/project-1-problem.png"
									alt="Problem"
									sx={{
										marginBottom: "10px",
										width: "100%",
									}}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Body1>
									The project came out with an initial planning phase to
									identify the main issues with the current Domino's App
									interface and brainstorm solutions. Initial research involved
									collecting user feedback directly from platforms such as
									Apple's App Store and Google Play, and conducting a detailed
									survey via Google Forms to understand users' habits with
									Domino's. This dual approach ensured a solid foundation for
									user-centered design decisions.
								</Body1>
							</Grid>

							<Box
								component="img"
								src="/images/project-1-user-review.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection
						title="Competitive Analysis and User Insight"
						id="3"
					>
						<Grid container justifyContent="space-between">
							<Body1>
								A detailed competitive analysis was conducted, comparing the
								Domino's App with its competitor, the Boston Pizza App, to
								identify strengths, weaknesses, and opportunities for
								improvement based on user ratings and feedback. Insights from
								this analysis helped in understanding the typical users of the
								Domino's App, leading to the creation of user personas and
								stories. This step was crucial for implementing the design to
								meet real user needs.
							</Body1>
							<Image
								src="/images/project-1-competitive-analysis.jpg"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/project-1-user-type.webp"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Design and Development" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								With a clear understanding of the user base, I moved to the
								design phase. The hand drawn wireframes were created to visually
								conceptualize the proposed changes and solutions, and then it
								turned into hi-fi wireframes and prototypes that incorporated
								user feedback and competitive insights. This prototype was then
								rigorously tested with identified user personas to ensure the
								design effectively addressed their needs and preferences.
							</Body1>
							<Image
								src="/images/project-1-iteration.jpg"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Testing" id="5">
						<Grid container justifyContent="space-between">
							<Body1>
								Testing revealed key areas for improvement, prompting a series
								of refinements to enhance the app's usability and user
								experience. Feedback from these sessions was integral in
								refining the design, ensuring the final product resonated with
								our target audience.
							</Body1>
							<Image
								src="/images/project-1-test.webp"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Finalization" id="6">
						<Grid container justifyContent="space-between">
							<Body1>
								The project culminated with the addition of final touches based
								on critique and insights from the presentation phase. Additional
								screens were developed in Figma, completing the redesign.
							</Body1>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref3}>
					<ProjectStepSection title="Deliverable" id="6">
						<Grid container justifyContent="space-between">
							<Image
								src="/images/domino_figma.webp"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
							<Box sx={{ width: "100%" }}>
								<iframe
									width="100%"
									height="500"
									src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfQF5Uochvt75Ijt4J4oe2X%2FDomino-Redesign%3Ftype%3Ddesign%26node-id%3D1-11%26t%3DiIeOpNetOoiM7BKO-1%26scaling%3Dscale-down%26page-id%3D1%253A2%26starting-point-node-id%3D1%253A619%26mode%3Ddesign"
									allowFullScreen
								></iframe>
							</Box>
						</Grid>
					</ProjectStepSection>
				</div>
			</ProjectContentContainer>
		</InViewContext.Provider>
	);
};

export default OverviewSection;
