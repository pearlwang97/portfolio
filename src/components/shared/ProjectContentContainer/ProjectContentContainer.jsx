import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectNavBar from "components/shared/ProjectNavBar/ProjectNavBar";

const OuterContainer = styled(Box)(({ theme }) => ({
	// width: "60%",
	// maxWidth: "100px",
	width: "1000px",
	height: "auto",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	columnGap: "2rem",
	gridTemplateColumns: "auto 1fr",
	// [theme.breakpoints.down("lg")]: {
	// 	width: "80%",
	// },
	// [theme.breakpoints.down("md")]: {
	// 	width: "90%",
	// },
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
	// display: "flex",
	// justifyContent: "center",
}));

const ProjectContentContainer = ({ navItems, children }) => {
	return (
		<OuterContainer
			sx={{
				marginBottom: {
					lg: "200px",
					md: "150px",
					sm: "100px",
					xs: "100px",
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
