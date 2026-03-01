import React from "react";
import { Box, Grid } from "@mui/material";
import Body1 from "components/shared/Body1/Body1";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";

const amazonMainImages = [
	{
		src: "/images/heal-leaf/amazon-main/-1.webp",
		alt: "Heal Leaf shampoo and conditioner bundle hero image with packaging",
	},
	{
		src: "/images/heal-leaf/amazon-main/-2.webp",
		alt: "Heal Leaf shampoo and conditioner bundle hero image without props",
	},
	{
		src: "/images/heal-leaf/amazon-main/-3.jpg",
		alt: "Heal Leaf bundle multi-angle product comparison image",
	},
	{
		src: "/images/heal-leaf/amazon-main/-4.webp",
		alt: "Heal Leaf formula feature image with product and botanical ingredients",
	},
	{
		src: "/images/heal-leaf/amazon-main/-5.webp",
		alt: "Heal Leaf hair transformation benefit image",
	},
	{
		src: "/images/heal-leaf/amazon-main/-6.webp",
		alt: "Heal Leaf all hair types product image",
	},
	{
		src: "/images/heal-leaf/amazon-main/-7.webp",
		alt: "Heal Leaf lifestyle model holding shampoo bar",
	},
	{
		src: "/images/heal-leaf/amazon-main/-8.webp",
		alt: "Heal Leaf no additives formula benefits image",
	},
	{
		src: "/images/heal-leaf/amazon-main/-9.webp",
		alt: "Heal Leaf shampoo bar on bamboo tray",
	},
	{
		src: "/images/heal-leaf/amazon-main/-10.jpg",
		alt: "Heal Leaf shampoo bar in a minimal bathroom scene",
	},
	{
		src: "/images/heal-leaf/amazon-main/-11.jpg",
		alt: "Heal Leaf model holding shampoo bar product portrait",
	},
	{
		src: "/images/heal-leaf/amazon-main/-12.jpg",
		alt: "Heal Leaf wash routine triptych image",
	},
];

const amazonAplusImages = [
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_1.jpg",
		alt: "Heal Leaf botanical extract technology A plus image",
	},
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_2.jpg",
		alt: "Heal Leaf nature driven care A plus image",
	},
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_3.jpg",
		alt: "Heal Leaf complete wash and care bundle A plus image",
	},
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_4.jpg",
		alt: "Heal Leaf plant based formula A plus image",
	},
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_5.jpg",
		alt: "Heal Leaf four step usage guide A plus image",
	},
	{
		src: "/images/heal-leaf/amazon-aplus/Aplus_6.jpg",
		alt: "Heal Leaf lifestyle and sustainability A plus image",
	},
];

const SquareGallery = ({ images }) => (
	<Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
		{images.map((image) => (
			<Grid item xs={12} sm={6} key={image.src}>
				<Image src={image.src} alt={image.alt} />
			</Grid>
		))}
	</Grid>
);

const FullWidthGallery = ({ images }) => (
	<Box sx={{ marginTop: "0.5rem" }}>
		{images.map((image) => (
			<Box key={image.src}>
				<Image src={image.src} alt={image.alt} />
			</Box>
		))}
	</Box>
);

export const healLeafAmazonListingProject = {
	title: "Heal Leaf Amazon Listing Visuals",
	imageSrc: "/images/heal-leaf/project-banner.png",
	prevLink: "/industrial-graphic-design",
	nextLink: "/summit-promotional-video",
};

export const healLeafAmazonListingOverviewItems = [
	{ key: "Client", value: "Heal Leaf" },
	{
		key: "Deliverables",
		value: "12 square Amazon listing images and 6 Amazon A+ content modules",
	},
	{
		key: "AI Workflow",
		value:
			"Used AI image generation to build scenes, model visuals, and ingredient compositions, then refined each asset through retouching, compositing, and layout polishing.",
	},
	{
		key: "Focus",
		value:
			"Balanced Amazon compliance, product clarity, and a clean botanical brand story across both conversion-focused hero images and longer-form detail content.",
	},
];

export const getHealLeafAmazonListingNavGroups = ({ OverviewList }) => [
	{
		id: "1",
		label: "overview",
		render: () => (
			<ProjectStepSection title="Overview" id="1">
				<OverviewList />
				<Body1>
					This project brought together two connected Amazon asset systems for
					Heal Leaf: a square-format listing image set built to perform inside
					search and product detail pages, and a companion A+ content series
					designed to carry more brand story, usage guidance, and ingredient
					context further down the funnel.
				</Body1>
				<Body1 sx={{ marginTop: "1rem" }}>
					My role centered on AI-assisted art direction. I used generative
					imagery to accelerate concept exploration, build polished lifestyle
					scenes, and create ingredient-led composites, then moved into manual
					post-production to keep the final visuals aligned with Amazon
					requirements, product accuracy, and Heal Leaf’s soft natural palette.
				</Body1>
			</ProjectStepSection>
		),
	},
	{
		id: "2",
		label: "main images",
		render: () => (
			<ProjectStepSection title="Amazon Main Images" id="2">
				<Body1>
					The first image set was designed for the core listing gallery, where
					clarity and consistency matter most. The sequence starts with clean
					hero images, then expands into multi-angle views, formula highlights,
					hair-benefit storytelling, lifestyle use cases, and clean-ingredient
					claims. Because these deliverables were created for Amazon’s square
					image format, they are presented here in a two-column layout to
					preserve their intended composition.
				</Body1>
				<SquareGallery images={amazonMainImages} />
			</ProjectStepSection>
		),
	},
	{
		id: "3",
		label: "a+ content",
		render: () => (
			<ProjectStepSection title="Amazon A+ Content" id="3">
				<Body1>
					The A+ series extends the listing beyond quick-scan benefits into a
					more narrative product story. These modules explain the botanical
					formula, show the full wash-and-care bundle, map the usage flow,
					reinforce sustainability messaging, and frame the product as a
					premium but practical everyday routine.
				</Body1>
				<Body1 sx={{ marginTop: "1rem" }}>
					Compared with the main gallery, the A+ layouts lean more heavily on
					structured information design. I kept the visual system cohesive by
					repeating Heal Leaf’s blue-and-neutral palette, echoing the same
					product photography language, and pairing AI-generated imagery with
					cleaner text hierarchy for readability.
				</Body1>
				<FullWidthGallery images={amazonAplusImages} />
			</ProjectStepSection>
		),
	},
	{
		id: "4",
		label: "ai process",
		render: () => (
			<ProjectStepSection title="AI-Assisted Design Process" id="4">
				<Body1>
					AI was not used here as a shortcut to skip design decisions; it was
					used as a production accelerator. It helped generate believable
					lifestyle setups, broaden visual options for model-based scenes, and
					build supporting imagery that would have been time-intensive to stage
					or source manually.
				</Body1>
				<Body1 sx={{ marginTop: "1rem" }}>
					The final step was deliberate human refinement: selecting usable
					outputs, correcting details, retouching surfaces, balancing lighting,
					adjusting typography, and tightening layouts so every image felt
					consistent, on-brand, and ready for a real ecommerce environment.
				</Body1>
			</ProjectStepSection>
		),
	},
];

const healLeafAmazonListingContent = {
	slug: "heal-leaf-amazon-listing",
	route: "/heal-leaf-amazon-listing",
	category: "Graphic Design",
	cardImage: "/images/heal-leaf/thumbnail-1.png",
	cardDescription:
		"AI-assisted Amazon listing visuals for Heal Leaf, including square gallery images and A+ detail content.",
	tools: ["AI Image Generation", "Photoshop", "Image Compositing"],
	project: healLeafAmazonListingProject,
	overviewItems: healLeafAmazonListingOverviewItems,
	getNavGroups: getHealLeafAmazonListingNavGroups,
};

export default healLeafAmazonListingContent;
