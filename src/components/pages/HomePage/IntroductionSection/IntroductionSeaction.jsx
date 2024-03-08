import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Link from "components/shared/StyledLink/StyledLink";
import Body1 from "components/shared/Body1/Body1";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import AnimatedButton from "components/shared/AnimatedButton/AnimatedButton";

const StyledImageContainer = styled(Box)(({ theme }) => ({
	width: "50%",
	height: "auto",
	order: 2,
	[theme.breakpoints.down("md")]: {
		width: "50%",
		order: 2,
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		order: 1,
	},
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
	marginTop: "50px",
	width: "100%",
	height: "auto",
	order: 2,
	textAlign: "left",
}));

const StyledScrollTrigger = styled(motion.div)(({ theme }) => ({
	width: "50%",
	order: 1,
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		order: 2,
	},
}));
const StyledHello = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontFamily: "'Montserrat', sans-serif",
	// marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const StyledName = styled("p")(({ theme }) => ({
	backgroundColor: "#DBA39A",
	color: "#FEFCF3",
	display: "inline-block",
	fontSize: "2.5rem",
	marginBottom: "10px",
	width: "auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.875rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.25rem",
	},
}));

const Designer = styled("div")(({ theme }) => ({
	fontSize: "3rem",
	fontWeight: "500",
	fontFamily: "'New York', serif",
	// marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.25rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
	},
}));

const IntroductionSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
			}}
		>
			<StyledScrollTrigger
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<StyledTextContainer>
					<StyledHello>hello, I’m</StyledHello>
					<Designer>Peirong Wang.</Designer>
					<StyledName>
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString("A Creative Designer").start();
							}}
							options={{
								delay: 18,
							}}
						/>
					</StyledName>

					{/* <Designer>A Creative Designer.</Designer> */}
					<Body1>
						I put my passion into crafting meaningful experiences and
						connections via design. My journey revolves around &nbsp;
						<Link
							sx={{
								textDecoration: "underline",
								"&:hover": {
									color: "#333333",
									textDecorationColor: "#333333",
								},
							}}
							to="/works?category=ux-ui"
						>
							<Box component="strong">UX/UI</Box>
						</Link>
						,&nbsp;
						<Link
							sx={{
								textDecoration: "underline",
								"&:hover": {
									color: "#333333",
									textDecorationColor: "#333333",
								},
							}}
							to="/works?category=graphic-design"
						>
							<Box component="strong">Graphic Design</Box>
						</Link>
						&nbsp; including graphic and branding. Let's dive into impactful
						visual stories together.
					</Body1>
					<Link to="/about">
						<AnimatedButton>LEARN MORE</AnimatedButton>
					</Link>
				</StyledTextContainer>
			</StyledScrollTrigger>
			<StyledImageContainer>
				<Image src="/images/Artboard.svg" alt="painted woman" />
			</StyledImageContainer>
		</MainContainer>
	);
};

export default IntroductionSection;
