import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Image from "components/shared/Image/Image";
import Body1 from "components/shared/Body1/Body1";
import Button from "components/shared/Button/Button";
import SocialLinks from "components/shared/SocialLinks/SocialLinks";
import {
	COLORS,
	SECTION_LAYOUTS,
	SECTION_SPACING,
	TEXT_HIGHLIGHTS,
} from "components/constants/styleTokens";
import {
	formatNaturalList,
	profile,
	siteContent,
} from "components/constants/profile";

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

const HighlightText = styled("span")(TEXT_HIGHLIGHTS.accentUnderline);

const SelfIntroductionSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: SECTION_SPACING,
				...SECTION_LAYOUTS.wrapped,
			}}
		>
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
						src="/images/about-me-selfie.jpg"
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
							<H1>{siteContent.about.greeting}</H1>
							<H1>
								{siteContent.about.introHeading.replace(
									"{firstName}",
									profile.firstName
								)}
							</H1>
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
								Originally from {profile.originCountry} and now based in {profile.currentLocation}, I started in {profile.previousField} before transitioning into
								{" "}
								<HighlightText>
									{profile.primaryDisciplines[0]}
								</HighlightText>{" "}
								and
								{" "}
								<HighlightText>
									{profile.primaryDisciplines[1]}
								</HighlightText>{" "}
								—a blend of analytical thinking and creativity that shapes my approach.

							</Body1>
							<Body1>
								{/* With a solid foundation in economics from the University of
								Victoria, I discovered my passion for new media design
								post-graduation. */}
								Through my experiences in content strategy, branding, and digital marketing, I've learned to balance data-driven insights with impactful storytelling. I’m passionate about how {formatNaturalList(profile.coreStrengths)} work together to shape brands and create meaningful user experiences.

							</Body1>
							<Body1>
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
								<HighlightText>
									{siteContent.about.growthHighlight}
								</HighlightText>{" "}
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

						<a href={profile.mailto}>
							<Button
								sx={{
									border: `1px solid ${COLORS.accent}`,
									backgroundColor: "transparent",
									color: COLORS.accentText,
									"&:hover": {
										backgroundColor: COLORS.accent,
										color: COLORS.white,
									},
								}}
							>
								{siteContent.about.contactButtonLabel}
							</Button>
						</a>
						<SocialLinks
							iconColor={COLORS.accentText}
							sx={{
								marginTop: "20px",
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default SelfIntroductionSection;
