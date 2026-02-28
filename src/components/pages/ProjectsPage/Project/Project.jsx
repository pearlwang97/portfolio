import React from "react";
import { Box, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Image from "components/shared/Image/Image";
import H2 from "components/shared/H2/H2";
import Body1 from "components/shared/Body1/Body1";
import Body2 from "components/shared/Body2/Body2";
import StyledLink from "components/shared/StyledLink/StyledLink";

const Project = ({ title, image, link, description, category, tools }) => {
	const isVideo = category === "Motion Graphic";

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
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.01 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<StyledLink to={link}>
					{!isVideo ? (
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
							<Image
								src={image}
								alt={title}
								sx={{
									height: "100%",
									transition: "transform 0.3s ease-in-out",
								}}
							/>
						</Box>
					) : (
						<Box
							sx={{
								width: "100%",
								paddingTop: "75%", // This creates an aspect ratio box with a ratio of 4:3
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
								title="YouTube video player"
								frameBorder="0"
								loading="lazy"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</Box>
					)}
				</StyledLink>
				<Box>
					<Body2
						sx={{
							marginTop: "10px",
							fontFamily: "'Lato', sans-serif !important",
						}}
					>
						{category}
					</Body2>
					<StyledLink to={link}>
						<H2
							sx={{
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
							}}
						>
							{title}
						</H2>
					</StyledLink>
					<StyledLink to={link}>
						<Body1>{description}</Body1>
					</StyledLink>
					{tools.map((tool) => (
						<Chip
							variant="outlined"
							label={tool}
							key={tool}
							sx={{
								marginRight: "5px",
								color: "black",
								"& .MuiChip-label": {
									// Target the label inside the Chip
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

export default Project;
