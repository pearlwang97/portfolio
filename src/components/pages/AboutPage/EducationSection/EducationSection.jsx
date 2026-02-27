import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Divider from "components/shared/Divider/Divider";
import H2 from "components/shared/H2/H2";
import H3 from "components/shared/H3/H3";
import H4 from "components/shared/H4/H4";
import H5 from "components/shared/H5/H5";
import Image from "components/shared/Image/Image";

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
				marginBottom: {
					xs: "20px",
					sm: "30px",
					md: "40px",
					lg: "50px",
				},
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			<Box sx={{ width: "100%" }}>
				<Divider
					sx={{
						width: {
							xs: "50%",
							md: "40%",
							lg: "25%",
						},
					}}
					alignLeft={true}
				/>
				<H2
					sx={{
						textAlign: "left",
						margin: {
							xs: "20px 0",
							sm: "20px 0",
							md: "40px 0",
							lg: "40px 0",
						},
					}}
				>
					Education
				</H2>
			</Box>

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
						src="images/bcit-logo.svg"
						alt="British Columbia Institute of Technology logo"
					/>
					<H3
						sx={{
							fontSize: {
								xs: "1.125rem",
								sm: "1.125rem",
								md: "1.25rem",
								lg: "1.375rem",
							},
							fontWeight: "550",
						}}
					>
						New Media Design & Web Development
					</H3>
					<Company
						sx={{
							fontSize: {
								xs: "1.025rem",
								sm: "1.025rem",
								md: "1.15rem",
								lg: "1.275rem",
							},
						}}
					>
						British Columbia Institute of Technology
					</Company>
					<Time>Jan 2023 – Aug 2024</Time>
				</Grid>
				<Grid item xs={12} md={5.5}>
					<EducationLogo
						src="images/uvic-logo.svg"
						alt="University of Victoria logo"
					/>
					<H3
						sx={{
							fontSize: {
								xs: "1.125rem",
								sm: "1.125rem",
								md: "1.25rem",
								lg: "1.375rem",
							},
							fontWeight: "550",
						}}
					>
						Bachelor in Economics
					</H3>
					<Company
						sx={{
							fontSize: {
								xs: "1.025rem",
								sm: "1.025rem",
								md: "1.15rem",
								lg: "1.275rem",
							},
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
