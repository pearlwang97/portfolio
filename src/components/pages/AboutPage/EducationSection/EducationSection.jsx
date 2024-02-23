import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Divider from "components/shared/Divider/Divider";
import H2 from "components/shared/H2/H2";
import H3 from "components/shared/H3/H3";
import Image from "components/shared/Image/Image";

const Time = styled("p")({
	fontStyle: "italic",
	fontWeight: "light",
	fontSize: "1.1rem",
	marginBottom: "20px",
});

const Company = styled("p")({
	fontSize: "1.2rem",
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
					xs: "50px",
					md: "75px",
					lg: "100px",
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
							sm: "20px 0",
							md: "40px 0",
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
					<H3>New Media Design & Web Development</H3>
					<Company>British Columbia Institute of Technology</Company>
					<Time>Jan 2023 – Present</Time>
				</Grid>
				<Grid item xs={12} md={5.5}>
					<EducationLogo
						src="images/uvic-logo.svg"
						alt="University of Victoria logo"
					/>
					<H3>Economics</H3>
					<Company>University of Victoria</Company>
					<Time>Sep 2016 – Apr 2020</Time>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default EducationSection;
