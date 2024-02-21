import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainContainer from "components/shared/MainContainer/MainContainer";
import Divider from "components/shared/Divider/Divider";
import H2 from "components/shared/H2/H2";
import H3 from "components/shared/H3/H3";
import StyledP from "components/shared/StyledP/StyledP";

const Company = styled("div")(({ theme }) => ({
	fontSize: "0.75rem", // Smaller font size on small screens
	margin: "10px 0",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1rem", // 1.25rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.25rem", // Increase font size on medium devices and up
	},
}));

const StyledH3 = styled("h3")(({ theme }) => ({
	fontSize: "1rem", // Smaller font size on small screens
	fontWeight: 500, // medium
	margin: "10px 0",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.25rem", // 1.75rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.5rem", // Increase font size on medium devices and up
	},
}));

const Period = styled("div")(({ theme }) => ({
	fontSize: "0.75rem", // Smaller font size on small screens
	margin: "10px 0",
	[theme.breakpoints.up("sm")]: {
		fontSize: "0.75rem", // 1.5rem font size on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1rem", // Increase font size on medium devices and up
	},
}));

const SytledLogo = styled("img")(({ theme }) => ({
	height: "auto",
	width: "100%",
	maxWidth: "100px",
}));

const EducationSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: {
					sm: "50px",
					md: "75px",
					lg: "100px",
				},
			}}
		>
			<Box sx={{ width: "100%" }}>
				<Divider width={"25%"} alignLeft={true} />
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
					justifyContent: "start",
					gap: "30px",
					alignItems: "top",
					textAlign: "left",
					fontFamily: "'Montserrat', sans-serif",
				}}
			>
				<Grid item xs={12} md={5}>
					<SytledLogo
						src="images/bcit.svg"
						alt="British Columbia Institute of Technology logo"
					/>
					<H3>New Media Design and Web Development Program</H3>
					<StyledP>British Columbia Institute of Technology</StyledP>
					<StyledP>Jan 2023 – Present</StyledP>
				</Grid>
				<Grid item xs={12} md={5}>
					<SytledLogo
						src="images/uvic.jpeg"
						alt="University of Victoria logo"
					/>
					<H3>Economic Bachelor's degree</H3>
					<StyledP>University of Victoria</StyledP>
					<StyledP>Sep 2016 – Apr 2020</StyledP>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default EducationSection;
