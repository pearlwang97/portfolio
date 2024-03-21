import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import H2 from "components/shared/H2/H2";
import Divider from "components/shared/Divider/Divider";

const StyledSection = styled(Box)(({ theme, noPadding }) => ({
	padding: "0",
	textAlign: "left",
	[theme.breakpoints.up("sm")]: {
		padding: "0 2rem",
		padding: noPadding ? "0" : "0 2rem",
	},
}));

const ProjectStepSection = ({ children, title, id, noPadding }) => {
	return (
		<StyledSection
			noPadding={noPadding}
			sx={{
				marginBottom: "50px",
			}}
		>
			<H2
				id={id}
				sx={{
					textAlign: "left",
				}}
			>
				{title}
			</H2>
			<Divider width={"90%"} alignLeft />
			{children}
		</StyledSection>
	);
};

export default ProjectStepSection;
