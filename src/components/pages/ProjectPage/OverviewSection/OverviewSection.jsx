import React from "react";

import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Divider from "../../../Divider/Divider";

const Title = styled("h3")({
	fontSize: "80px",
	fontWeight: "bold",
	textAlign: "left",
	textTransform: "uppercase",
});

const StyledListItemKey = styled("span")({
	fontSize: "19.2px",
	fontWeight: "bold",
	paddingRight: "0.5rem",
	textTransform: "uppercase",
});

const StyledListItemValue = styled("p")({
	fontSize: "19.2px",
	fontWeight: "normal",
	textTransform: "uppercase",
});

const StyledListItem = styled("li")({
	display: "grid",
	gridColumnGap: "1rem",
	columnGap: "1rem",
	gridTemplateColumns: "30% 70%",
	padding: "0.25rem 0",
});

const StyledList = styled("ul")({
	listStyle: "none",
	padding: "3rem 0",
	verticalAlign: "initial",
});

const StyledNavItem = styled("a")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
	fontSize: "16px",
	fontWeight: "semi-bold",
	justifyContent: "center",
	lineHeight: "1",
	textAlign: "center",
	textTransform: "uppercase",
	transform: "rotate(180deg)",
	writingMode: "vertical-rl",
	textDecoration: "none",
	"&:hover": {
		color: "inherit",
		textDecoration: "none",
	},
	"&:visited": {
		color: "inherit", // Add this line
	},
}));

const StyledImage = styled("img")({
	width: "80%",
	height: "auto",
});

const OverviewSection = () => {
	return (
		<Grid
			container
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				container
				sx={{
					width: "80%",
					height: "100%",
					position: "relative",
				}}
			>
				<Grid
					item
					xs={1}
					sx={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						height: "calc(100vh - 120px - 2rem)",
						justifyContent: "space-between",
						position: "sticky",
						top: "calc(60px + 1rem)",
					}}
				>
					<StyledNavItem>overview</StyledNavItem>
					<StyledNavItem>overview</StyledNavItem>
					<StyledNavItem>overview</StyledNavItem>
					<StyledNavItem>overview</StyledNavItem>
					<StyledNavItem href="#overview">overview</StyledNavItem>
				</Grid>
				<Grid
					xs={11}
					item
					sx={{
						border: "1px solid #6b6b6b",
						borderRadius: "50px",
						width: "100%",
						height: "100%",
						overflow: "hidden",
						position: "relative",
						margin: 0,
						padding: 0,
						verticalAlign: "initial",
					}}
				>
					<Title>OVERViEW</Title>
					<Divider width="90%" />
					<StyledList>
						<StyledListItem>
							<StyledListItemKey>TIMELINE</StyledListItemKey>
							<StyledListItemValue>MAY - JUN 2023</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>ROLE</StyledListItemKey>
							<StyledListItemValue>UI/UX Designer</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>Tools</StyledListItemKey>
							<StyledListItemValue>Figma Illustrator</StyledListItemValue>
						</StyledListItem>
					</StyledList>
					<Grid container>
						<Grid item xs={6}>
							<p>
								The objective of this project is to create a user-centered,
								modern interface for the existing Domino’s App using Figma and
								Adobe Illustrator in UI / UX Strategy 1 course (MDIA2540).
							</p>
						</Grid>
						<Grid item xs={6}>
							<p>
								The primary aim of this project is to demonstrate how the
								student apply user research principles and utilize Figma & Adobe
								Illustrator effectively to construct UI elements and interactive
								design to enhance usability and user experience.
							</p>
						</Grid>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}
						>
							<StyledImage src="/images/domino.png" alt="domino" />
						</Box>
					</Grid>
					<Title>OVERViEW</Title>
					<Divider width="90%" />
					<StyledList>
						<StyledListItem>
							<StyledListItemKey>TIMELINE</StyledListItemKey>
							<StyledListItemValue>MAY - JUN 2023</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>ROLE</StyledListItemKey>
							<StyledListItemValue>UI/UX Designer</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>Tools</StyledListItemKey>
							<StyledListItemValue>Figma Illustrator</StyledListItemValue>
						</StyledListItem>
					</StyledList>
					<Grid container>
						<Grid item xs={6}>
							<p>
								The objective of this project is to create a user-centered,
								modern interface for the existing Domino’s App using Figma and
								Adobe Illustrator in UI / UX Strategy 1 course (MDIA2540).
							</p>
						</Grid>
						<Grid item xs={6}>
							<p>
								The primary aim of this project is to demonstrate how the
								student apply user research principles and utilize Figma & Adobe
								Illustrator effectively to construct UI elements and interactive
								design to enhance usability and user experience.
							</p>
						</Grid>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}
						>
							<StyledImage src="/images/domino.png" alt="domino" />
						</Box>
					</Grid>
					<Title id="overview">OVERViEW</Title>
					<Divider width="90%" />
					<StyledList>
						<StyledListItem>
							<StyledListItemKey>TIMELINE</StyledListItemKey>
							<StyledListItemValue>MAY - JUN 2023</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>ROLE</StyledListItemKey>
							<StyledListItemValue>UI/UX Designer</StyledListItemValue>
						</StyledListItem>
						<StyledListItem>
							<StyledListItemKey>Tools</StyledListItemKey>
							<StyledListItemValue>Figma Illustrator</StyledListItemValue>
						</StyledListItem>
					</StyledList>
					<Grid container>
						<Grid item xs={6}>
							<p>
								The objective of this project is to create a user-centered,
								modern interface for the existing Domino’s App using Figma and
								Adobe Illustrator in UI / UX Strategy 1 course (MDIA2540).
							</p>
						</Grid>
						<Grid item xs={6}>
							<p>
								The primary aim of this project is to demonstrate how the
								student apply user research principles and utilize Figma & Adobe
								Illustrator effectively to construct UI elements and interactive
								design to enhance usability and user experience.
							</p>
						</Grid>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}
						>
							<StyledImage src="/images/domino.png" alt="domino" />
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default OverviewSection;
