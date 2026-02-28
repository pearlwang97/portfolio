import React from "react";

import { Grid, Box } from "@mui/material";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
const OverviewSection = () => {
	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "design process" },
		{ to: "5", label: "deliverable" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "DEC 2023 - JAN 2024" },
		{ key: "ROLE", value: "Graphic Designer" },
		{ key: "Tools", value: "Illustrator, Photoshop" },
	];
	return (
		<ProjectContentContainer navItems={navItems}>
					<ProjectStepSection title="Overview" id="1">
						<ProjectOverviewList listItems={listItems} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									The Chinese zodiac is a big part of Chinese traditions, it is
									a classification scheme based on the lunar calendar, the cycle
									repeats every 12 years with a represented zodiac animal. This
									assigns an animal to every person, these animals are: rat, ox,
									tiger, rabbit, dragon, snake, horse, goat, monkey, rooster,
									dog and pig, each one has unique attributes. As a Chinese
									individual living in a Western country, I've always wanted to
									showcase the Chinese zodiac in a fun and modern way to a
									broader audience. The aim of the "Chinese Zodiac Collection"
									project is to celebrate and promote Chinese cultural heritage
									through the fusion of traditional art and modern design by
									reimagining the Chinese zodiacs through the traditional art of
									papercutting. Through this project, I would like to connect
									people across cultures with the beauty and wisdom of the
									Chinese zodiac. The final deliverables include a mock-up
									informational website about the Chinese zodiacs and design
									mockups, including red bag designs.
								</Body1>
							</Grid>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Inspiration" id="2">
						<Grid container justifyContent="space-between">
							<Box sx={{ display: "block" }}>
								<Image
									src="/images/project-5-gallery-2.webp"
									alt="chinese zodiac papercut gallery image 1"
									sx={{
										float: "right",
										marginLeft: "20px",
										marginBottom: "10px",
										width: { sm: "100%", md: "50%" },
									}}
								/>
								<Body1 sx={{ marginTop: "1rem" }}>
									In this initial phase, inspiration was drawn from ancient
									Chinese art and symbols, including Dunhuang drawings and
									traditional motifs. The goal was to present the 12 Chinese
									zodiac signs through traditional paper cut shapes, aiming to
									incorporate the Ruyi pattern and wheel for a unique
									representation of all 12 animals. Complementary elements
									associated with the Chinese New Year, such as auspicious
									clouds, gold coins, and plum blossoms were selected to enrich
									the designs and highlight the cultural significance of the
									zodiac. In the color selection process, I wanted a modern
									twist on the traditional Chinese red, choosing a rich brick
									red complemented by a soft cream. This palette showcases the
									historical roots of the art form while introducing a
									contemporary elegance.
								</Body1>
							</Box>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Graphic Design" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								Using Adobe Illustrator, each zodiac sign was designed with a
								focus on realism transformed into paper cuts. The designs were
								infused with classic Chinese elements and symbols reflecting the
								unique character and cultural significance of each animal. The
								incorporation of Chinese typography next to each zodiac sign
								added a sense of cultural authenticity and visual interest. This
								decision aimed to enhance the overall narrative of the
								collection.
							</Body1>
							<Image
								src="/images/project-5-gallery-3.jpg"
								alt="chinese zodiac papercut gallery image 2"
								sx={{
									marginBottom: "10px",
								}}
							/>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Finalization" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								The final step involved bringing the illustrations to life
								through mockups created in Illustrator and Photoshop. This stage
								was about showcases practical applications and engaging
								presentations of the zodiac signs, aiming to make the artwork
								more relatable.
							</Body1>
						</Grid>
					</ProjectStepSection>
					<ProjectStepSection title="Deliverable" id="5">
						<Grid container justifyContent="space-between">
							<Grid item container xs={12}>
								<Grid item xs={12} sm={5.85}>
									<Image
										src="/images/project-5-gallery-1.webp"
										alt="chinese zodiac mockup set"
									/>
								</Grid>
								<Grid item xs={12} sm={6.15}>
									<Image
										src="/images/project-5-gallery-5.webp"
										alt="chinese zodiac poster mockup"
									/>
								</Grid>
								<Image
									src="/images/chinese-zodiac-banner.webp"
									alt="chinese zodiac collection banner"
								/>
							</Grid>
						</Grid>
					</ProjectStepSection>
		</ProjectContentContainer>
	);
};

export default OverviewSection;
