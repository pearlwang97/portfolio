import React from "react";
import { Grid } from "@mui/material";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";

export const cupidLyricVideoProject = {
	title: "Cupid Lyric Video",
	videoSrc: "https://www.youtube.com/embed/yylNn0qRsiY?si=LedKtuglcnC24dRV",
	prevLink: "/summit-promotional-video",
	nextLink: "/domino-app-redesign",
};

export const cupidLyricVideoOverviewItems = [
	{ key: "TIMELINE", value: "DEC 2023" },
	{ key: "ROLE", value: "Motion Graphic Designer" },
	{ key: "Video Render", value: "720p, 30fps, H.264." },
	{ key: "Tools", value: "After Effect, Illustrator, Photoshop" },
];

export const getCupidLyricVideoNavGroups = ({ OverviewList }) => [
	{
		id: "1",
		label: "overview",
		render: () => (
			<ProjectStepSection title="Overview" id="1" noPadding>
				<OverviewList />
				<Grid container justifyContent="space-between">
					<Body1>
						This lyric video for the K-pop song 'Cupid' combines animated
						illustrations with synchronized lyrics to visually narrate the
						song's story.
					</Body1>
					<Body1>
						The goal of the video is to enhance the experience by making it
						more accessible and enjoyable for fans and new audiences alike.
					</Body1>
				</Grid>
			</ProjectStepSection>
		),
	},
];

const cupidLyricVideoContent = {
	slug: "cupid-lyric-video",
	route: "/cupid-lyric-video",
	category: "Motion Graphic",
	hideNav: true,
	cardTitle: "Cupid | Lyric Video",
	cardImage: "https://www.youtube.com/embed/yylNn0qRsiY?controls=0&rel=0",
	cardDescription: "Create a lyric video for K-pop song 'Cupid'.",
	tools: ["After Effect", "Illustrator", "Photoshop"],
	project: cupidLyricVideoProject,
	overviewItems: cupidLyricVideoOverviewItems,
	getNavGroups: getCupidLyricVideoNavGroups,
};

export default cupidLyricVideoContent;
