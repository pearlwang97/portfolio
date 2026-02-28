import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import H3 from "components/shared/H3/H3";
import H4 from "components/shared/H4/H4";
import H5 from "components/shared/H5/H5";
import Image from "components/shared/Image/Image";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import {
	SECTION_LAYOUTS,
	SECTION_MARGINS,
	TEXT_SCALES,
} from "components/constants/styleTokens";

const Time = styled(H5)({
	fontStyle: "italic",
	fontWeight: "light",
	marginBottom: "20px",
});

const Company = styled(H4)({
	marginBottom: "10px",
});

const EducationLogo = styled(Image)(({ theme }) => ({
	maxWidth: "240px",
	maxHeight: "84px",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "192px",
		maxHeight: "67.2px",
	},
}));

const EducationSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: SECTION_MARGINS.compact,
				...SECTION_LAYOUTS.wrapped,
			}}
		>
			<SectionHeader title="Education" showDivider alignLeft />

			<Grid
				container
				direction="row"
				sx={{
					width: "100%",
					justifyContent: "space-between",
					gap: "30px",
					alignItems: "top",
					textAlign: "left",
					fontFamily: "'Montserrat', sans-serif",
				}}
			>
				<Grid item xs={12} md={5.5}>
					<EducationLogo
						src="/images/bcit-logo.svg"
						alt="British Columbia Institute of Technology logo"
					/>
					<H3
						sx={{
							...TEXT_SCALES.detailTitle,
						}}
					>
						New Media Design & Web Development
					</H3>
					<Company
						sx={{
							...TEXT_SCALES.detailSubtitle,
						}}
					>
						British Columbia Institute of Technology
					</Company>
					<Time>Jan 2023 – Aug 2024</Time>
				</Grid>
				<Grid item xs={12} md={5.5}>
					<EducationLogo
						src="/images/uvic-logo.svg"
						alt="University of Victoria logo"
					/>
					<H3
						sx={{
							...TEXT_SCALES.detailTitle,
						}}
					>
						Bachelor in Economics
					</H3>
					<Company
						sx={{
							...TEXT_SCALES.detailSubtitle,
						}}
					>
						University of Victoria
					</Company>
					<Time>Sep 2016 – Apr 2020</Time>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default EducationSection;
