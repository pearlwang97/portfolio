import React from "react";

import { Grid } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";

const OverviewSection = () => {
	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "brainstorm" },
		{ to: "3", label: "logo design" },
		{ to: "4", label: "Typography & Color" },
		{ to: "5", label: "Finalization" },
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
					<Grid item xs={12}>
						<Body1>
							The aim of this assignment is to develop multiple logo variations
							for a product or service. This project highlights the student's
							skill in combining creativity with strategic branding, showcasing
							proficiency in visual design, brand consistency, and technical
							skills in Adobe Illustrator. BloomBox, a Vancouver-based floral
							service, offers convenient flower purchase options, including
							one-time buys and a monthly subscription. Their signature service
							is a mystery box with a themed assortment of fresh flowers
							delivered periodically.
						</Body1>
						<Image src="/images/bloom-box-overview.jpg" />
					</Grid>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="BrainStorm" id="2">
				<Grid container justifyContent="space-between">
					<Body1 sx={{ marginTop: "1rem" }}>
						The brainstorming phase focused on integrating BloomBox’s essence
						into the design, combining floral elements with their distinct box
						delivery. The designs aimed for simplicity and modernity, reflecting
						bloom, growth, and tranquility.
					</Body1>
					<Image
						src="/images/bloom-box-brainstorm.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Logo Design" id="3">
				<Grid container justifyContent="space-between">
					<Body1>
						In the sketching phase, I came up with six designs that combined
						geometric shapes and abstract floral patterns. These sketches laid
						the groundwork for the final logos. From these initial ideas, I
						selected one to develop into the main logo, a secondary logo, and a
						submark. The main logo showcases an abstract flower inside a square,
						representing a petal unfolding and a delivery box. The secondary
						logo displays the brand name in a horizontal layout. The submark
						simplifies BloomBox's "B," ensuring the brand remains consistent
						across all versions.
					</Body1>
					<Image
						src="/images/bloom-box-logo-design.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Typography and Color" id="4">
				<Grid container justifyContent="space-between">
					<Body1>
						Antipol VF was selected as the primary font for its modernity, and
						Century Gothic Pro as the secondary font for clarity. The color
						palette consisted of soft pastels in pink and green, representing
						flowers and leaves, complemented by off-white for contrast and
						readability.
					</Body1>
					<Image
						src="/images/bloom-box-color.jpg"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
			<ProjectStepSection title="Finalization" id="5">
				<Grid container justifyContent="space-between">
					<Body1>
						In the final stage, I brought together the chosen colors and
						typography to finalize the BloomBox logo. We also created mockups to
						showcase the logo in various applications.
					</Body1>
					<Image
						src="/images/bloom-box-final.jpg"
						alt="Problem"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
