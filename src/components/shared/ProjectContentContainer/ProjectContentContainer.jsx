import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectNavBar from "components/shared/ProjectNavBar/ProjectNavBar";

const OuterContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	height: "auto",
	margin: "0 auto",
	display: "grid",
	columnGap: "2rem",
	gridTemplateColumns: "auto 1fr",
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
	overflow: "hidden",
	position: "relative",
	[theme.breakpoints.down("sm")]: {
		border: "none",
	},
}));

const ProjectContentContainer = ({ navItems, children}) => {
    return (
        <OuterContainer
            sx={{
                marginBottom: "50px",
            }}
        >
            <ProjectNavBar navItems={navItems} />
            <InnerContainer>
                {children}
            </InnerContainer>
        </OuterContainer>
    );
}

export default ProjectContentContainer;