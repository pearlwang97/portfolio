import React from "react";
import { Box, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Image from "components/shared/Image/Image";
import H2 from "components/shared/H2/H2";
import Body1 from "components/shared/Body1/Body1";
import Body2 from "components/shared/Body2/Body2";
import StyledLink from "components/shared/StyledLink/StyledLink";

const Project = ({ title, image, link, description, category, tools }) => {
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
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<StyledLink to={link}>
					<Image src={image} alt={title} />
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
					{tools.map((tool, index) => (
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
