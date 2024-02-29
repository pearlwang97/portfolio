import React from "react";

import { styled } from "@mui/material/styles";
import Body1 from "components/shared/Body1/Body1";
import H3 from "components/shared/H3/H3";

const StyledListItemKey = styled("span")(({ theme }) => ({
	fontSize: "1rem",
	fontWeight: "bold",
	paddingRight: "0.5rem",
	textTransform: "uppercase",
}));

const StyledListItem = styled("li")(({ theme }) => ({
	paddingButtom: "0.7rem",
	[theme.breakpoints.up("sm")]: {
		display: "grid",
		gridColumnGap: "1rem",
		columnGap: "1rem",
		gridTemplateColumns: "30% 70%",
		padding: "0.25rem 0",
	},
}));

const StyledList = styled("ul")(({ theme }) => ({
	listStyle: "none",
	padding: "2rem 0",
	verticalAlign: "initial",
	[theme.breakpoints.up("md")]: {
		padding: "3rem 0",
	},
}));

const ProjectOverviewList = ({ listItems }) => {
	return (
		<StyledList>
			{listItems.map((item, index) => (
				<StyledListItem key={index}>
					<StyledListItemKey>
						<H3
							sx={{
								margin: "0",
							}}
						>
							{item.key}
						</H3>
					</StyledListItemKey>
					<Body1>{item.value}</Body1>
				</StyledListItem>
			))}
		</StyledList>
	);
};

export default ProjectOverviewList;
