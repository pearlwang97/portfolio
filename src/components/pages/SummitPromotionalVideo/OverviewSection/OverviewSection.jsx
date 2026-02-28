import React from "react";

import { Grid } from "@mui/material";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";

const OverviewSection = () => {
	const listItems = [
		{ key: "TIMELINE", value: "OCT 2023" },
		{ key: "ROLE", value: "Video Producer" },
		{ key: "Video Render", value: "720p, 30fps, H.264." },
		{ key: "Tools", value: "Premiere Pro, After Effect, Illustrator" },
	];
	return (
		<ProjectContentContainer>
					<ProjectStepSection title="Overview" id="1" noPadding>
						<ProjectOverviewList listItems={listItems} />
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
		</ProjectContentContainer>
	);
};

export default OverviewSection;
