import React from "react";
import { Grid } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";

export const industrialProductMarketingSystemProject = {
	title: "Industrial Graphic Design",
	imageSrc: "/images/industrial-brand-system/project-banner-2.png",
	prevLink: "/cyber-era-poster",
	nextLink: "/summit-promotional-video",
};

export const industrialProductMarketingSystemOverviewItems = [];

export const getIndustrialProductMarketingSystemNavGroups = ({ OverviewList }) => [
	{
		id: "1",
		label: "overview",
		render: () => (
			<ProjectStepSection title="Overview" id="1">
				<OverviewList />
				<Grid container justifyContent="space-between">
					<Grid item xs={12}>
						<Body1>
							This project focused on building a cohesive visual system for an
							industrial product line, centered around a technical brochure and
							extended into digital marketing and large-format applications.
							The goal was to present complex product information in a clearer,
							more structured, and more visually engaging way while keeping the
							overall identity consistent across every touchpoint.
						</Body1>
						<Image
							src="/images/industrial-brand-system/gasket-brochure-overview.png"
							alt="industrial product brochure spreads"
						/>
					</Grid>
				</Grid>
			</ProjectStepSection>
		),
	},
	{
		id: "2",
		label: "brochure design",
		render: () => (
			<ProjectStepSection title="Brochure and Datasheet Design" id="2">
				<Grid container justifyContent="space-between">
					<Body1>
						The brochure layout was designed to make dense technical content
						easier to scan. Product families, configuration charts, section
						views, and performance details were organized into a repeatable
						editorial structure using strong header bands, modular columns, and
						clear content blocks. Product photography was paired with diagrams
						and specification tables so the pages could feel informative without
						becoming visually overwhelming.
					</Body1>
					<Body1>
						A consistent blue, gold, and neutral palette helped unify the
						brochure while reinforcing an industrial tone. Subtle grid-based
						graphics and technical linework added context and supported the
						engineering-focused subject matter without distracting from the core
						information.
					</Body1>
					<Image
						src="/images/industrial-brand-system/gasket-product-lineup.jpg"
						alt="industrial gasket product lineup"
					/>
				</Grid>
			</ProjectStepSection>
		),
	},
	{
		id: "3",
		label: "website banner",
		render: () => (
			<ProjectStepSection title="Website Banner" id="3">
				<Grid container justifyContent="space-between">
					<Body1>
						The digital banner set translated the same visual language into web
						and social formats. Diagonal compositions, blueprint-inspired
						background textures, isolated product photography, and concise
						benefit-led headlines were used to keep each banner clear and
						immediately legible at a glance.
					</Body1>
					<Body1>
						Although the featured products vary, the layouts maintain a shared
						system through repeated spacing, consistent typography, and the same
						color hierarchy. This made it possible to create multiple campaign
						assets that feel connected while still highlighting different
						product categories.
					</Body1>
					<Image
						src="/images/industrial-brand-system/gaskets-banner.jpg"
						alt="industrial gaskets website banner"
					/>
					<Image
						src="/images/industrial-brand-system/linkedin-banner.jpg"
						alt="industrial linkedin banner"
					/>
					<Image
						src="/images/industrial-brand-system/tube-fittings-banner.jpg"
						alt="tube fittings banner design"
					/>
					<Image
						src="/images/industrial-brand-system/pressure-tech-banner.jpg"
						alt="pressure regulator banner design"
					/>
				</Grid>
			</ProjectStepSection>
		),
	},
	{
		id: "4",
		label: "other",
		render: () => (
			<ProjectStepSection title="Other" id="4">
				<Grid container justifyContent="space-between">
					<Body1>
						The system was also extended into physical applications, including
						facility signage, a fabricated specification tag, and trade show
						display graphics. These pieces required the identity to hold up at
						different scales and in real-world production contexts, from outdoor
						visibility to engraved information panels.
					</Body1>
					<Body1>
						Across these applications, the design approach stayed focused on
						clarity, durability, and recognition. Strong contrast, simplified
						information zones, and repeatable framing elements helped the
						graphics remain functional while still feeling part of the same
						marketing system.
					</Body1>
					<Image
						src="/images/industrial-brand-system/facility-signage.png"
						alt="facility signage mockup"
					/>
					<Image
						src="/images/industrial-brand-system/specification-tag.png"
						alt="specification tag design"
					/>
					<Image
						src="/images/industrial-brand-system/tradeshow-tent.png"
						alt="trade show tent graphic design"
					/>
				</Grid>
			</ProjectStepSection>
		),
	},
];

const industrialProductMarketingSystemContent = {
	slug: "industrial-graphic-design",
	route: "/industrial-graphic-design",
	category: "Graphic Design",
	cardImage: "/images/industrial-brand-system/thumbnail-2.png",
	cardDescription:
		"Designed a cohesive brochure, banner suite, and environmental graphics system for industrial products.",
	tools: ["InDesign", "Illustrator", "Photoshop"],
	project: industrialProductMarketingSystemProject,
	overviewItems: industrialProductMarketingSystemOverviewItems,
	getNavGroups: getIndustrialProductMarketingSystemNavGroups,
};

export default industrialProductMarketingSystemContent;
