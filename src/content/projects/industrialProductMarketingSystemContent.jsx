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
This project focused on building cohesive marketing collateral for an industrial product line, including a brochure, datasheet, social media assets, website banners, and other print materials. The goal was to present product information in a clearer, more structured way.
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
