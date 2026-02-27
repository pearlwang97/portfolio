import React from "react";

import { Grid } from "@mui/material";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import { useInView } from "react-intersection-observer";
import InViewContext from "components/context/InViewContext";

const OverviewSection = () => {
	const [ref1, inView1] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});
	const [, inView2] = useInView({
		triggerOnce: false,
		threshold: 0.2,
	});
	const [, inView3] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});
	const listItems = [
		{ key: "TIMELINE", value: "DEC 2023" },
		{ key: "ROLE", value: "Motion Graphic Designer" },
		{ key: "Video Render", value: "720p, 30fps, H.264." },
		{ key: "Tools", value: "After Effect, Illustrator, Photoshop" },
	];
	return (
		<InViewContext.Provider value={[inView1, inView2, inView3]}>
			<ProjectContentContainer>
				<div ref={ref1}>
					<ProjectStepSection title="Overview" id="1" noPadding>
						<ProjectOverviewList listItems={listItems} />
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
				</div>
			</ProjectContentContainer>
		</InViewContext.Provider>
	);
};

export default OverviewSection;
