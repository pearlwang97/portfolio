import React from "react";
import { Grid } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";

export const bloomBoxLogoDesignProject = {
	title: "BloomBox Logo Design",
	imageSrc: "/images/bloom-box-logo/bloombox-banner.webp",
	prevLink: "/furniture-banner-design",
	nextLink: "/2d-radio-vector-art",
};

export const bloomBoxLogoDesignOverviewItems = [
	{ key: "TIMELINE", value: "AUG - OCT 2023" },
	{ key: "ROLE", value: "Graphic Designer" },
	{ key: "Tools", value: "Illustrator, Photoshop, InDesign" },
	{
		key: "Skills",
		value: "Branding & Marketing, Layout Design, Email Newsletter Creation",
	},
];

export const getBloomBoxLogoDesignNavGroups = ({ OverviewList }) => [
	{
		id: "1",
		label: "overview",
		render: () => (
			<ProjectStepSection title="Overview" id="1">
				<OverviewList />
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
		),
	},
	{
		id: "2",
		label: "branding",
		render: () => (
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
						src="/images/bloom-box-logo/bloombox-style-guide.webp"
						alt="bloombox style guide"
						sx={{
							marginBottom: "10px",
							width: { sm: "100%" },
						}}
					/>
				</Grid>
			</ProjectStepSection>
		),
	},
	{
		id: "3",
		label: "Mockups",
		render: () => (
			<ProjectStepSection title="Newsletter & Mockups" id="3">
				<Grid container justifyContent="space-between">
					<Body1>
						After finalizing the style guide, I created a newsletter and
						mockups to showcase the branding in various applications while
						ensure the brand consistency.
					</Body1>
					<Image src="/images/bloom-box-logo/bloombox-newsletter.webp" alt="bloombox newsletter" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-1.webp" alt="bloombox mockup 1" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-2.webp" alt="bloombox mockup 2" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-3.webp" alt="bloombox mockup 3" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-4.webp" alt="bloombox mockup 4" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-5.webp" alt="bloombox mockup 5" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-6.webp" alt="bloombox mockup 6" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-7.webp" alt="bloombox mockup 7" sx={{ width: { sm: "100%" } }} />
					<Image src="/images/bloom-box-logo/bloombox-mockup-8.webp" alt="bloombox mockup 8" sx={{ width: { sm: "100%" } }} />
				</Grid>
			</ProjectStepSection>
		),
	},
];

const bloomBoxLogoDesignContent = {
	slug: "bloom-box-logo",
	route: "/bloom-box-logo",
	category: "Graphic Design",
	cardImage: "/images/bloom-box-logo/bloombox-cover.webp",
	cardDescription: "Create branding with email newsletter design and mockups.",
	tools: ["Illustrator", "Photoshop", "InDesign"],
	project: bloomBoxLogoDesignProject,
	overviewItems: bloomBoxLogoDesignOverviewItems,
	getNavGroups: getBloomBoxLogoDesignNavGroups,
};

export default bloomBoxLogoDesignContent;
