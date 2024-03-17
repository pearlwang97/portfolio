import React from "react";
import { Grid, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import Body2 from "components/shared/Body2/Body2";
import H2 from "components/shared/H2/H2";
import Link from "components/shared/StyledLink/StyledLink";

const FeatureWorksItem = ({
	title,
	image,
	link,
	description,
	category,
	tools,
}) => {
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
			<Link to={link}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<Image
						src={image}
						alt={title}
						sx={{
							height: "100%",
							transition: "transform 0.3s ease-in-out",
						}}
					/>
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
							opacity: 0, // Hide the overlay and text by default
							"&:hover": {
								opacity: 1, // Show the overlay and text when the user hovers over the image
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
							{category}
						</Body2>
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
						<Body1
							sx={{
								lineHeight: "1.4",
							}}
						>
							{description}
						</Body1>
						{tools.map((tool, index) => (
							<Chip
								// color="white"
								variant="outlined"
								label={tool}
								key={tool}
								sx={{
									marginRight: "5px",
									color: "white",
									"& .MuiChip-label": {
										// Target the label inside the Chip
										fontFamily: "'Lato', sans-serif !important",
									},
								}}
							/>
						))}
					</Box>
				</motion.div>
			</Link>
		</Grid>
	);
};

export default FeatureWorksItem;
