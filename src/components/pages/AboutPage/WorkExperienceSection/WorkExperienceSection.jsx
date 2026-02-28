import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import H3 from "components/shared/H3/H3";
import H4 from "components/shared/H4/H4";
import H5 from "components/shared/H5/H5";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import {
	SECTION_LAYOUTS,
	SECTION_MARGINS,
	TEXT_SCALES,
} from "components/constants/styleTokens";

const StyledUl = styled("ul")({
	paddingLeft: "20px",
	textAlign: "left",
});

const StyledLi = styled("li")({
	margin: "10px 0",
	paddingLeft: "16px",
	lineHeight: "1.5",
});

const Time = styled(H5)({
	fontStyle: "italic",
	fontWeight: "light",
	// fontSize: "1.1rem",
	marginBottom: "20px",
});

const Company = styled(H4)({
	marginBottom: "10px",
});

const WorkExperienceSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: SECTION_MARGINS.compact,
				...SECTION_LAYOUTS.wrapped,
			}}
		>
			<SectionHeader title="Work Experience" showDivider alignLeft />

			<Grid
				item
				container
				sx={{
					width: "100%",
					justifyContent: "space-between",
					alignItems: "top",
					textAlign: "left",
					fontFamily: "'Montserrat', sans-serif",
				}}
			>
				<Grid item xs={12} md={5.5}>
					<H3
						sx={{
							...TEXT_SCALES.detailTitle,
							marginTop: "0",
						}}
					>
						Marketing Coordinator
					</H3>
					<Company
						sx={{
							...TEXT_SCALES.detailSubtitle,
						}}
					>
						Amber Financial Services Corp.
					</Company>
					<Time>Jan 2021 – Jan 2022</Time>
					<StyledUl>
						<StyledLi>
							{/* <Body1> */}
							Designed and implemented targeted marketing campaigns aligned with
							the company's branding
							{/* </Body1> */}
						</StyledLi>
						<StyledLi>
							{/* <Body1> */}
							Developed strategic marketing initiatives for market goal and
							conducted competitive analysis to inform marketing strategies
							{/* </Body1> */}
						</StyledLi>
						<StyledLi>
							{/* <Body1> */}
							Enhanced brand presence across multiple media platforms
							{/* </Body1> */}
						</StyledLi>
						<StyledLi>
							{/* <Body1> */}
							Coordinated monthly activities, improving service visibility and
							customer engagement
							{/* </Body1> */}
						</StyledLi>
					</StyledUl>
				</Grid>
				<Grid item xs={12} md={5.5}>
					<H3
						sx={{
							...TEXT_SCALES.detailTitle,
							marginTop: "0",
						}}
					>
						Front Desk Admin
					</H3>
					<Company
						sx={{
							...TEXT_SCALES.detailSubtitle,
						}}
					>
						PIU Entertainment Ltd.
					</Company>
					<Time>Feb 2019 – Sept 2020</Time>
					<StyledUl>
						<StyledLi>
							{/* <Body1> */}
							Provided client support by addressing inquiries and resolving
							technical issues
							{/* </Body1> */}
						</StyledLi>
						<StyledLi>
							{/* <Body1> */}
							Generated and structured reports to support business operations
							and management
							{/* </Body1> */}
						</StyledLi>
					</StyledUl>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default WorkExperienceSection;
