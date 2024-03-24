import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectNavBar from "components/shared/ProjectNavBar/ProjectNavBar";

const OuterContainer = styled(Box)(({ theme }) => ({

	width: "1000px",
	height: "auto",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	columnGap: "2rem",
	gridTemplateColumns: "auto 1fr",
	[theme.breakpoints.down("lg")]: {
		width: "840px",
		maxWidth: "912px",
	},
	[theme.breakpoints.down("md")]: {
		width: "540px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "320px",
	},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
	overflow: "hidden",
	position: "relative",
	width: "100%",
}));

const ProjectContentContainer = ({ navItems, children }) => {
	return (
		<OuterContainer
			sx={{
				marginBottom: {
					lg: "50px",
					md: "30px",
					sm: "20px",
					xs: "20px",
				},
			}}
		>
			{/* <ProjectNavBar navItems={navItems} /> */}
			{navItems && <ProjectNavBar navItems={navItems} />}
			<InnerContainer>{children}</InnerContainer>
		</OuterContainer>
	);
};

export default ProjectContentContainer;
