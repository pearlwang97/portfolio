import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import IconTooltip from "components/shared/IconTooltip/IconTooltip";
import Image from "components/shared/Image/Image";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import {
	SECTION_LAYOUTS,
	SECTION_SPACING,
} from "components/constants/styleTokens";

const StyledIcon = styled(Image)(({ theme }) => ({
	height: "35px",
	width: "auto",
	[theme.breakpoints.up("sm")]: {
		height: "40px", // Increase height on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		height: "50px", // Increase height on medium devices and up
	},
}));

const SkillSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: SECTION_SPACING,
				...SECTION_LAYOUTS.wrapped,
			}}
		>
			<SectionHeader title="Skills" showDivider alignLeft />
			<Grid
				container
				sx={{
					width: "100%",
					justifyContent: "start",
					gap: "10px",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<IconTooltip title="Figma">
					<StyledIcon src="/images/figma-logo.svg" alt="Figma logo" />
				</IconTooltip>
				<IconTooltip title="InDesign">
					<StyledIcon src="/images/id-logo.svg" alt="InDesign logo" />
				</IconTooltip>
				<IconTooltip title="Illustrator">
					<StyledIcon src="/images/ai-logo.svg" alt="Illustrator logo" />
				</IconTooltip>
				<IconTooltip title="Photoshop">
					<StyledIcon src="/images/ps-logo.svg" alt="Photoshop logo" />
				</IconTooltip>
				<IconTooltip title="Premiere Pro">
					<StyledIcon src="/images/pr-logo.svg" alt="Premiere Pro logo" />
				</IconTooltip>
				<IconTooltip title="After Effects">
					<StyledIcon src="/images/ae-logo.svg" alt="After Effects logo" />
				</IconTooltip>
				<IconTooltip title="Dimension">
					<StyledIcon src="/images/dn-logo.svg" alt="Dimension logo" />
				</IconTooltip>
				<IconTooltip title="AR">
					<StyledIcon src="/images/ar-logo.jpg" alt="AR logo" />
				</IconTooltip>
				<IconTooltip title="CSS">
					<StyledIcon src="/images/css-logo.svg" alt="CSS logo" />
				</IconTooltip>
				<IconTooltip title="HTML">
					<StyledIcon src="/images/html-logo.svg" alt="HTML logo" />
				</IconTooltip>
				<IconTooltip title="JavaScript">
					<StyledIcon src="/images/js-logo.svg" alt="JavaScript logo" />
				</IconTooltip>
				<IconTooltip title="WordPress">
					<StyledIcon src="/images/wordpress-logo.svg" alt="WordPress logo" />
				</IconTooltip>
			</Grid>
		</MainContainer>
	);
};

export default SkillSection;
