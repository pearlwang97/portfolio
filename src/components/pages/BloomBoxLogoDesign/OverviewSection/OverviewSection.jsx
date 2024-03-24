import React from "react";

import { Grid } from "@mui/material";
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
		threshold: 0.6,
	});

	const [ref3, inView3] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "branding" },
		{ to: "3", label: "Mockups" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "AUG - OCT 2023" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "Illustrator, Photoshop, InDesign" },
		{
			key: "Skills",
			value: "Branding & Marketing, Layout Design, Email Newsletter Creation",
		},
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
									The aim of this assignment is to develop branding for
									BloomBox, a Vancouver-based floral service. This project
									highlights the skill in combining creativity with strategic
									branding and marketing, showcasing proficiency in brand
									consistency and visual design.
								</Body1>
							</Grid>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref2}>
					<ProjectStepSection title="Branding" id="2">
						<Grid container justifyContent="space-between">
							<Body1 sx={{ marginTop: "1rem" }}>
								BloomBox offers convenient flower purchase options, including
								one-time buys and a monthly subscription. Their signature
								service is a mystery box with a themed assortment of fresh
								flowers delivered periodically.
							</Body1>
							<Body1 sx={{ marginTop: "1rem" }}>
								The branding focused on integrating brand essence into the
								design, combining floral elements with their distinct box
								delivery. The designs aimed for simplicity and modernity,
								reflecting bloom, growth, and tranquility.
							</Body1>
							<Image
								src="/images/bloombox-style-guide.webp"
								alt="Problem"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref3}>
					<ProjectStepSection title="Newsletter & Mockups" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								After finalizing the style guide, I created a newsletter and
								mockups to showcase the branding in various applications while
								ensure the brand consistency.
							</Body1>
							<Image
								src="/images/bloombox-newsletter.webp"
								alt="bloombox newsletter"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-1.webp"
								alt="bloombox mockup 1"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-2.webp"
								alt="bloombox mockup 2"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-3.webp"
								alt="bloombox mockup 3"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-4.webp"
								alt="bloombox mockup 4"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-5.webp"
								alt="bloombox mockup 5"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-6.webp"
								alt="bloombox mockup 6"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-7.webp"
								alt="bloombox mockup 7"
								sx={{
									width: { sm: "100%" },
								}}
							/>
							<Image
								src="/images/bloombox-mockup-8.webp"
								alt="bloombox mockup 8"
								sx={{
									width: { sm: "100%" },
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
