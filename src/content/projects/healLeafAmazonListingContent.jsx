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
		value: "Amazon listing images and A+ content modules",
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
					This project involved the design of Amazon product listing visuals, including both the main product images and the A+ / detail page graphics.
				</Body1>
				<Body1 sx={{ marginTop: "1rem" }}>
					I was responsible for the visual design and layout, creating a clean, engaging, and conversion-focused presentation tailored for e-commerce. While all design direction, composition, and page structure were developed by me, I also used AI tools strategically to generate realistic product imagery that supported the visual storytelling. All images used in this project were AI-generated, then refined and integrated into the final designs to create polished, brand-ready marketing assets.
				</Body1>
			</ProjectStepSection>
		),
	},
	{
		id: "2",
		label: "main images",
		render: () => (
			<ProjectStepSection title="Amazon Main Images" id="2">
				<SquareGallery images={amazonMainImages} />
			</ProjectStepSection>
		),
	},
	{
		id: "3",
		label: "a+ design",
		render: () => (
			<ProjectStepSection title="Amazon A+ Page Design" id="3">
				<FullWidthGallery images={amazonAplusImages} />
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
