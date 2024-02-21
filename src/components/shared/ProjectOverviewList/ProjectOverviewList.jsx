import React from "react";

import { styled } from "@mui/material/styles";
import StyledP from "components/shared/StyledP/StyledP";

const StyledListItemKey = styled("span")(({ theme }) => ({
	fontSize: "1rem",
	fontWeight: "bold",
	paddingRight: "0.5rem",
	textTransform: "uppercase",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.2rem",
	},
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
                    <StyledListItemKey>{item.key}</StyledListItemKey>
                    <StyledP>{item.value}</StyledP>
                </StyledListItem>
            ))}
        </StyledList>
    );
}

export default ProjectOverviewList;