import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import StyledP from "components/shared/StyledP/StyledP";

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
					sm: "50px",
					md: "75px",
					lg: "100px",
				},
			}}
		>
			<Box sx={{ display: "block", position: "relative" }}>
				<Box
					sx={{
						float: "left",
						// marginLeft: "20px",
						marginRight: "10px",
						marginBottom: "10px",
						width: { sm: "100%", md: "50%" },
					}}
				>
					<Image src="/images/about-me-selfie.JPG" alt="peirong wang selfies" />
					<SpinImage
						sx={{
							width: "20%",
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 2,
						}}
						src="/images/flower.png"
						alt="spinning flower"
					/>
				</Box>
				<H1>Hiii</H1>
				<H1>I'm Peirong!</H1>
				<StyledP>
					I'm passionate with a love for design. Born in China and having
					relocated to Vancouver during my high school years, I've had the
					chance to experience two distinct worlds and cultures. My past
					experience enhanced my adaptability and approach things with an
					inclusive and diverse mindset.
				</StyledP>
				<StyledP>
					Driven by a foundational background in economics from the University
					of Victoria, my journey into New Media was serendipitous. I stumbled
					upon my passion for digital design after graduation. Now in my career,
					I aim to establish myself as a digital designer. I want to blend my
					knowledge of marketing strategy with my technical design expertise to
					provide a positive user experience.
				</StyledP>
				<StyledP>
					I believe design builds a channel for communication, connecting my
					thoughts and ideas with my audience. Therefore, I aspire to create
					design works that offer solutions and build connections with people.
				</StyledP>
			</Box>
		</MainContainer>
	);
};

export default SelfIntroductionSection;
