import React from "react";

import { Grid, Box } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import StyledP from "components/shared/StyledP/StyledP";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";

const OverviewSection = () => {
	const navItems = [
		{ to: "1-1", label: "overview" },
		{ to: "1-2", label: "planning" },
		{ to: "1-4", label: "design & development" },
		{ to: "1-6", label: "Finalization" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "MAY - JUN 2023" },
		{ key: "ROLE", value: "UI/UX Designer" },
		{ key: "Tools", value: "Figma, Illustrator" },
	];
	return (
		<ProjectContentContainer navItems={navItems}>
			<ProjectStepSection title="Overview" id="1-1">
				<ProjectOverviewList listItems={listItems} />
				<Grid container justifyContent="space-between">
					<Grid item xs={12}>
						<StyledP>
							The objective of this project is to create a user-centered, modern
							interface for the existing Domino’s App using Figma and Adobe
							Illustrator. It highlights the application of user research
							principles and the strategic use of design tools to improve
							usability and user experience.
						</StyledP>
						<Image src="/images/project-1-timeline.jpg" />
					</Grid>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Initiation and Research" id="1-2">
				<Grid container justifyContent="space-between">
					<Box sx={{ display: "block" }}>
						<Image
							src="/images/project-1-problem.jpg"
							alt="Problem"
							sx={{
								float: "right",
								marginLeft: "20px",
								marginBottom: "10px",
								width: { sm: "100%", md: "50%" },
							}}
						/>
						<StyledP sx={{ marginTop: "1rem" }}>
							The project came out with an initial planning phase to identify
							the main issues with the current Domino's App interface and
							brainstorm solutions. Initial research involved collecting user
							feedback directly from platforms such as Apple's App Store and
							Google Play, and conducting a detailed survey via Google Forms to
							understand users' habits with Domino's. This dual approach ensured
							a solid foundation for user-centered design decisions.
						</StyledP>
						<Box
							component="img"
							src="/images/project-1-user-review.jpg"
							alt="Problem"
							sx={{
								marginBottom: "10px",
								width: { sm: "100%" },
							}}
						/>
					</Box>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Competitive Analysis and User Insight" id="1-3">
				<Grid container justifyContent="space-between">
					<StyledP>
						A detailed competitive analysis was conducted, comparing the
						Domino's App with its competitor, the Boston Pizza App, to identify
						strengths, weaknesses, and opportunities for improvement based on
						user ratings and feedback. Insights from this analysis helped in
						understanding the typical users of the Domino's App, leading to the
						creation of user personas and stories. This step was crucial for
						implementing the design to meet real user needs.
					</StyledP>
					<Image
						src="/images/project-1-competitive-analysis.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
					<Image
						src="/images/project-1-user-type.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Design and Development" id="1-4">
				<Grid container justifyContent="space-between">
					<StyledP>
						With a clear understanding of the user base, I moved to the design
						phase. The hand drawn wireframes were created to visually
						conceptualize the proposed changes and solutions, and then it turned
						into hi-fi wireframes and prototypes that incorporated user feedback
						and competitive insights. This prototype was then rigorously tested
						with identified user personas to ensure the design effectively
						addressed their needs and preferences.
					</StyledP>
					<Image
						src="/images/project-1-iteration.jpg"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Testing" id="1-5">
				<Grid container justifyContent="space-between">
					<StyledP>
						Testing revealed key areas for improvement, prompting a series of
						refinements to enhance the app's usability and user experience.
						Feedback from these sessions was integral in refining the design,
						ensuring the final product resonated with our target audience.
					</StyledP>
					<Image
						src="/images/project-1-test.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Finalization" id="1-6">
				<Grid container justifyContent="space-between">
					<StyledP>
						The project culminated with the addition of final touches based on
						critique and insights from the presentation phase. Additional
						screens were developed in Figma, completing the redesign.
					</StyledP>
					<Box>
						<iframe
							width="450"
							height="500"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfQF5Uochvt75Ijt4J4oe2X%2FDomino-Redesign%3Ftype%3Ddesign%26node-id%3D1-11%26t%3DiIeOpNetOoiM7BKO-1%26scaling%3Dscale-down%26page-id%3D1%253A2%26starting-point-node-id%3D1%253A619%26mode%3Ddesign"
							allowFullScreen
						></iframe>
					</Box>
				</Grid>
			</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
