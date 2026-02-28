import React from "react";
import { Box, Chip, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import Body2 from "components/shared/Body2/Body2";
import H2 from "components/shared/H2/H2";
import StyledLink from "components/shared/StyledLink/StyledLink";

const motionProps = {
	initial: { opacity: 0, y: 50 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.01 },
	transition: { duration: 0.5, ease: "easeOut" },
};

const titleSx = {
	textAlign: "left",
	margin: {
		xs: "5px 0",
		sm: "5px 0",
		md: "10px 0",
		lg: "10px 0",
	},
	fontSize: {
		xs: "1.45rem",
		sm: "1.55rem",
		md: "1.65rem",
		lg: "1.75rem",
	},
};

const renderMedia = ({ image, title, isVideo }) => {
	if (!isVideo) {
		return (
			<Image
				src={image}
				alt={title}
				sx={{
					height: "100%",
					transition: "transform 0.3s ease-in-out",
				}}
			/>
		);
	}

	return (
		<Box
			sx={{
				width: "100%",
				paddingTop: "75%",
				position: "relative",
			}}
		>
			<iframe
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				src={image}
				title={`${title} video preview`}
				frameBorder="0"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</Box>
	);
};

const ProjectCard = ({ project, variant = "standard" }) => {
	const isVideo = project.category === "Motion Graphic";
	const isFeatured = variant === "featured";

	if (isFeatured) {
		return (
			<Grid
				item
				sm={12}
				md={5.9}
				lg={5.9}
				sx={{
					position: "relative",
					marginBottom: {
						xs: "10px",
						sm: "10px",
						md: "15px",
						lg: "20px",
					},
					overflow: "hidden",
					"&:hover": {
						"& img": {
							transform: "scale(1.1)",
						},
					},
				}}
			>
				<StyledLink to={project.link}>
					<motion.div {...motionProps}>
						{renderMedia({ image: project.image, title: project.title, isVideo })}
						<Box
							sx={{
								position: "absolute",
								height: "100%",
								margin: 0,
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								background: "rgba(0, 0, 0, 0.5)",
								transition: "opacity 1s ease",
								padding: {
									xs: "30px 22.5px",
									sm: "36px 27px",
									md: "48px 36px",
									lg: "60px 45px",
								},
								color: "white",
								opacity: 0,
								"&:hover": {
									opacity: 1,
								},
							}}
						>
							<Body2
								sx={{
									display: "inline-block",
									border: "1px solid white",
									borderRadius: "10px",
									padding: "5px 10px",
									fontFamily: "'Lato', sans-serif !important",
								}}
							>
								{project.category}
							</Body2>
							<H2 sx={titleSx}>{project.title}</H2>
							<Body1
								sx={{
									lineHeight: "1.4",
								}}
							>
								{project.description}
							</Body1>
							{project.tools.map((tool) => (
								<Chip
									variant="outlined"
									label={tool}
									key={tool}
									sx={{
										marginRight: "5px",
										color: "white",
										"& .MuiChip-label": {
											fontFamily: "'Lato', sans-serif !important",
										},
									}}
								/>
							))}
						</Box>
					</motion.div>
				</StyledLink>
			</Grid>
		);
	}

	return (
		<Grid
			item
			sm={12}
			md={5.9}
			lg={5.9}
			sx={{
				position: "relative",
				marginBottom: {
					xs: "30px",
					sm: "30px",
					md: "15px",
					lg: "20px",
				},
			}}
		>
			<motion.div {...motionProps}>
				<StyledLink to={project.link}>
					<Box
						sx={{
							overflow: "hidden",
							"&:hover": {
								"& img": {
									transform: "scale(1.1)",
								},
							},
						}}
					>
						{renderMedia({ image: project.image, title: project.title, isVideo })}
					</Box>
				</StyledLink>
				<Box>
					<Body2
						sx={{
							marginTop: "10px",
							fontFamily: "'Lato', sans-serif !important",
						}}
					>
						{project.category}
					</Body2>
					<StyledLink to={project.link}>
						<H2 sx={titleSx}>{project.title}</H2>
					</StyledLink>
					<StyledLink to={project.link}>
						<Body1>{project.description}</Body1>
					</StyledLink>
					{project.tools.map((tool) => (
						<Chip
							variant="outlined"
							label={tool}
							key={tool}
							sx={{
								marginRight: "5px",
								color: "black",
								"& .MuiChip-label": {
									fontFamily: "'Lato', sans-serif !important",
								},
							}}
						/>
					))}
				</Box>
			</motion.div>
		</Grid>
	);
};

export default ProjectCard;
