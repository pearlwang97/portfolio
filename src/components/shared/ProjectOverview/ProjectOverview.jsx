import React from "react";
import { Box, useMediaQuery, useTheme, Tooltip } from "@mui/material";

import { styled } from "@mui/material/styles";
import Link from "components/shared/StyledLink/StyledLink";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Body1 from "components/shared/Body1/Body1";
import H3 from "components/shared/H3/H3";
import Divider from "components/shared/Divider/Divider";
import IconTooltip from "components/shared/IconTooltip/IconTooltip";
import Image from "components/shared/Image/Image";

const TitleContainer = styled(Box)(({ theme }) => ({
	containerType: "inline-size",
	display: "flex",
	flexDirection: "row",
	[theme.breakpoints.up("md")]: {
		flexDirection: "column",
	},
}));

const ImageContainer = styled(Box)(({ theme, width }) => ({
	width: "100%",
	position: "relative",
	[theme.breakpoints.up("md")]: {
		width: "100%",
	},
	[theme.breakpoints.up("lg")]: {
		width: width,
	},
}));

const SubTitle = styled("H3")(({ textAlign, theme }) => ({
	fontSize: "1.3rem",
	fontWeight: "bold",
	margin: `0 0 5px 0`,
	textAlign: textAlign,
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.1rem",
		textAlign: "left",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.1",
		textAlign: "left",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledIcon = styled("img")(({ theme }) => ({
	height: "24px",
	width: "auto",
	[theme.breakpoints.up("sm")]: {
		height: "30px", // Increase height on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		height: "2cqw", // Increase height on medium devices and up
	},
}));

const StyledH3 = styled(H3)(({ theme, textAlign }) => ({
	"&:hover": {
		// Add this block
		textDecoration: "underline",
	},
	margin: 0,
	textAlign: textAlign,
	[theme.breakpoints.down("lg")]: {
		textAlign: "left",
	},
}));

const formatNumber = (number) => {
	return number < 10 ? `0${number}` : `${number}`;
};

const ProjectOverview = ({
	imageSrc,
	altText,
	linkTo,
	title,
	goal,
	role,
	tools,
	horizontalAlign,
	index,
}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const justifyContent =
		isMobile || horizontalAlign === "left" ? "flex-start" : "flex-end";
	const textAlign = isMobile || horizontalAlign === "left" ? "left" : "right";
	console.log("horizontalAligh", horizontalAlign);
	const sequenceNumber = formatNumber(index + 1);
	return (
		<MainContainer
			sx={{
				marginBottom: "30px",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: horizontalAlign === "right" ? "row-reverse" : "row",
			}}
		>
			<ImageContainer width="58%">
				<Link to={linkTo}>
					<Image src={imageSrc} alt={altText} />
				</Link>
			</ImageContainer>
			<ImageContainer width="36%">
				<TitleContainer>
					<Link to={linkTo}>
						{!isMobile && (
							<>
								<StyledH3 textAlign={textAlign}>{sequenceNumber}</StyledH3>
								<StyledH3 textAlign={textAlign}>{title}</StyledH3>
							</>
						)}
						{isMobile && <StyledH3>{`${sequenceNumber} ${title}`}</StyledH3>}
					</Link>
				</TitleContainer>
				<Divider width="25%" alignLeft={textAlign === "left" ? true : false} />
				<SubTitle textAlign={textAlign}>Goal</SubTitle>
				<Body1 sx={{ textAlign: textAlign }}>{goal}</Body1>
				<Divider width="25%" alignLeft={textAlign === "left" ? true : false} />
				<SubTitle textAlign={textAlign}>Role</SubTitle>
				<Body1 sx={{ textAlign: textAlign }}>{role}</Body1>
				<Box
					sx={{
						display: "flex",
						justifyContent: justifyContent,
						alignItems: "center",
						gap: "20px",
					}}
				>
					{tools.map((tool, index) => (
						<IconTooltip key={index} title={tool.title}>
							<StyledIcon src={tool.iconSrc} alt={tool.altText} />
						</IconTooltip>
					))}
				</Box>
			</ImageContainer>
		</MainContainer>
	);
};

export default ProjectOverview;
