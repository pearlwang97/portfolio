import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import Button from "components/shared/Button/Button";

const SpinImage = styled("img")({
	animation: "spin 4s linear infinite",
	height: "auto",
	"@keyframes spin": {
		from: {
			transform: "rotate(0deg)",
		},
		to: {
			transform: "rotate(360deg)",
		},
	},
});

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
								marginBottom: "20px",
							}}
						>
							<H1>Hiii</H1>
							<H1>I'm Peirong!</H1>
						</Box>

						{/* <Body1>
							I'm passionate with a love for design. Born in China and having
							relocated to Vancouver during my high school years, I've had the
							chance to experience two distinct worlds and cultures. My past
							experience enhanced my adaptability and approach things with an
							inclusive and diverse mindset.
						</Body1>
						<Body1>
							Driven by a foundational background in economics from the
							University of Victoria, my journey into New Media was
							serendipitous. I stumbled upon my passion for digital design after
							graduation. Now in my career, I aim to establish myself as a
							digital designer. I want to blend my knowledge of marketing
							strategy with my technical design expertise to provide a positive
							user experience.
						</Body1>
						<Body1>
							I believe design builds a channel for communication, connecting my
							thoughts and ideas with my audience. Therefore, I aspire to create
							design works that offer solutions and build connections with
							people.
						</Body1> */}
						<Box
							sx={{
								lineHeight: "1.73",
							}}
						>
							<Body1
								sx={{
									marginBottom: "20px",
								}}
							>
								A graphic designer who is originally from China, currently based
								in Vancouver, BC.
							</Body1>
							<Body1
								sx={{
									marginBottom: "20px",
								}}
							>
								With a solid foundation in economics from the University of
								Victoria, I discovered my passion for new media design
								post-graduation.
							</Body1>
							<Body1
								sx={{
									marginBottom: "20px",
								}}
							>
								Committed to creating meaningful, user-centric graphics, I
								infuse each project with passion and a diverse mindset. Eager to
								continually learn and grow in the dynamic world of design, I'm
								dedicated to bridging cultures and ideas through innovative and
								impactful visual solutions.
							</Body1>
						</Box>
						<a
							href="/files/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button>View Resume</Button>
						</a>
					</Grid>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default SelfIntroductionSection;
