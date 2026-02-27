import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import Button from "components/shared/Button/Button";

const H1 = styled("h1")(({ theme }) => ({
	fontSize: "2.5rem",
	fontWeight: "semi-bold",
	textAlign: "left",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
	},
	fontFamily: "utopia-std, serif",
}));

const SelfIntroductionSection = () => {
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
			}}
		>
			<Grid container></Grid>
			<Grid
				container
				sx={{
					alignItems: "top",
					justifyContent: "space-between",
				}}
			>
				<Grid
					item
					xs={12}
					lg={5}
					sx={{
						width: { sm: "100%", md: "50%" },
					}}
				>
					<Image
						sx={{
							maxWidth: "475px",
						}}
						src="/images/about-me-selfie.JPG"
						alt="peirong wang selfies"
					/>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid>
						<Box
							sx={{
								marginBottom: "10px",
							}}
						>
							<H1>Hiii</H1>
							<H1>I'm Peirong!</H1>
						</Box>

						<Box
							sx={{
								lineHeight: "1.73",
							}}
						>
							<Body1>
								{/* A{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
										// backgroundSize: "100% 200%",
									}}
								>
									UI/UX and graphic designer
								</span>{" "}
								who is originally from China, currently based in Vancouver, BC. */}
								Originally from China and now based in Vancouver, I started in economics before transitioning into
								{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
										// backgroundSize: "100% 200%",
									}}
								>
									digital design
								</span>{" "}
								and
								{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
										// backgroundSize: "100% 200%",
									}}
								>
									marketing
								</span>{" "}
								—a blend of analytical thinking and creativity that shapes my approach.

							</Body1>
							<Body1
								sx={
									{
										// marginBottom: "20px",
									}
								}
							>
								{/* With a solid foundation in economics from the University of
								Victoria, I discovered my passion for new media design
								post-graduation. */}
								Through my experiences in content strategy, branding, and digital marketing, I've learned to balance data-driven insights with impactful storytelling. I’m passionate about how design, marketing, and analytics work together to shape brands and create meaningful user experiences.

							</Body1>
							<Body1
								sx={
									{
										// marginBottom: "20px",
									}
								}
							>
								{/* Committed to creating meaningful, user-centric graphics, I
								infuse each project with{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
									}}
								>
									passion
								</span>{" "}
								and a{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
									}}
								>
									diverse
								</span>{" "}
								mindset. Eager to continually learn and grow in the dynamic
								world of design, I'm dedicated to bridging cultures and ideas
								through innovative and impactful visual solutions. */}
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, transparent 50%, rgba(219, 163, 154, 0.6) 50%)",
										// backgroundSize: "100% 200%",
									}}
								>
									Always eager to learn and grow
								</span>{" "}
								, I thrive on solving challenges and exploring new ideas. Let's connect!
							</Body1>
						</Box>
						{/* <a
							href="/files/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								marginRight: "20px",
							}}
						>
							<Button
								sx={{
									"&:hover": {
										color: "#333333",
									},
								}}
							>
								View Resume
							</Button>
						</a> */}

						<a
							href="mailto:pearlwang1997@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								sx={{
									border: "1px solid #dba39a",
									backgroundColor: "transparent",
									color: "#d5927c",
									"&:hover": {
										backgroundColor: "#dba39a",
										color: "white",
									},
								}}
							>
								Contact Me
							</Button>
						</a>
					</Grid>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default SelfIntroductionSection;
