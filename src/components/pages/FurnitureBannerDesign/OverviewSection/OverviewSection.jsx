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
		{ to: "2", label: "branding" },
		{ to: "3", label: "catalog & campaign" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "March 2024" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "InDesign, Illustrator, Photoshop" },
		{
			key: "Skills",
			value: "Branding & Marketing, Layout Design, Digital Campaign Creation",
		},
	];
	return (
		<ProjectContentContainer navItems={navItems}>
					<ProjectStepSection title="Overview" id="1">
						<ProjectOverviewList listItems={listItems} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									Designed a catalog and a series of digital campaign for a home
									& lifestyle brand Weekends, spotlighting their home goods in
									Vancouver, boosting brand visibility and engagement.
								</Body1>
							</Grid>
							<Grid container justifyContent="space-between">
								<Image src="/images/weekend-slogan.png" alt="weekend slogan" />
							</Grid>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Branding" id="2">
						<Grid container justifyContent="space-between">
							<Body1 sx={{ marginTop: "1rem" }}>
								The branding process for "Weekends" began with selecting a
								soothing and sophisticated color palette to reflect the brand’s
								ethos of comfort and leisure. A combination of muted earth tones
								and serene blues were chosen to evoke a sense of calm and
								relaxation. Combine with modern, readable typography, a cohesive
								visual identity that resonates with the "enjoy home just like
								weekends" concept of the brand was set.
							</Body1>
							<Image
								src="/images/weekend-style-guide.jpg"
								alt="weekend style guide"
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Catalog" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								In designing the "Weekends" catalog, the emphasis was on
								high-quality imagery and detailed product descriptions to both
								inform and allure customers. I utilized ample space to feature
								products with clear, attractive visuals and supportive text,
								trying to achieve a balance that reflects the brand’s ethos and
								resonates with the target audience’s expectations of a
								leisurely, weekend lifestyle at home.
							</Body1>
							<Image
								src="/images/weekend-mockup-1.webp"
								alt="weekend mockup 1"
							/>
							<Image
								src="/images/weekend-mockup-2.webp"
								alt="weekend mockup 2"
							/>
							<Image
								src="/images/weekend-mockup-3.webp"
								alt="weekend mockup 3"
							/>
							<Image
								src="/images/weekend-mockup-4.webp"
								alt="weekend mockup 4"
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Digital Banner" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								The digital banner suite was designed to effectively communicate
								the Spring Sale message, ensuring clarity and visual consistency
								across various sizes.
							</Body1>
							<Image
								src="/images/weekend-furniture-banners.webp"
								alt="weekend banners"
							/>
						</Grid>
					</ProjectStepSection>

					<ProjectStepSection title="Social Posts" id="5">
						<Grid container justifyContent="space-between">
							<Body1>
								Committing to an earth and sky-inspired color combo, the social
								posts for "Weekends" feature attractive images and engaging
								captions within a creatively designed layout.
							</Body1>
							<Image
								src="/images/weekend-social-posts.webp"
								alt="weekend social posts"
							/>
						</Grid>
					</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
