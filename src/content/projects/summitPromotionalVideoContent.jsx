import React from "react";
import { Grid } from "@mui/material";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";

export const summitPromotionalVideoProject = {
	title: "Summit Promotional Video",
	videoSrc: "https://www.youtube.com/embed/6uoTv0i-57Q?si=r04rmSMHP1AodJlO",
	prevLink: "/cyber-era-poster",
	nextLink: "/cupid-lyric-video",
};

export const summitPromotionalVideoOverviewItems = [
	{ key: "TIMELINE", value: "OCT 2023" },
	{ key: "ROLE", value: "Video Producer" },
	{ key: "Video Render", value: "720p, 30fps, H.264." },
	{ key: "Tools", value: "Premiere Pro, After Effect, Illustrator" },
];

export const getSummitPromotionalVideoNavGroups = ({ OverviewList }) => [
	{
		id: "1",
		label: "overview",
		render: () => (
			<ProjectStepSection title="Overview" id="1" noPadding>
				<OverviewList />
				<Grid container justifyContent="space-between">
					<Body1>Summit, a leading sport brand.</Body1>
					<Body1>
						This promotional video presents the dynamic and energetic
						essence of Summit.
					</Body1>
					<Body1>
						The goal of this project is to captivate and engage the
						audience, promoting Summit's dedication to inspiring an active
						and adventurous lifestyle through video storytelling.
					</Body1>
					<Body1>*Logo and all animations are original.</Body1>
				</Grid>
			</ProjectStepSection>
		),
	},
];
