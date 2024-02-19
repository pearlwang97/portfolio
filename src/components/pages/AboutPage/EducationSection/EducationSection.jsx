import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-between",
	alignItems: "center",
	height: "auto",
	margin: "0 auto",
	// marginBottom: marginBottom || 0,
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const Divider = styled(Box)(({ theme, alignLeft }) => ({
	height: "1px",
	backgroundColor: "#250d00",
	marginLeft: alignLeft ? 0 : "auto",
	marginRight: alignLeft ? "auto" : 0,
	marginTop: "10px",
	marginBottom: "10px",
	width: "10%",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "10%",
	},
	[theme.breakpoints.up("md")]: {
		width: "25%",
	},
}));

const StyledH2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "semi-bold",
	textAlign: "left",
	margin: "40px 0",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		margin: "20px 0",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		margin: "20px 0",
	},
	fontFamily: "utopia-std, serif",
}));

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
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
			}}
		>
			<StyledContainer>
				<Box sx={{ width: "100%" }}>
					<Divider width={"25%"} alignLeft={true} />
					<StyledH2>Education</StyledH2>
				</Box>

				<Grid
					item
					container
					direction="column"
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
						<StyledH3>New Media Design and Web Development Program</StyledH3>
						<Company>British Columbia Institute of Technology</Company>
						<Period>Jan 2023 – Present</Period>
					</Grid>
					<Grid item xs={12} md={5}>
						<SytledLogo
							src="images/uvic.jpeg"
							alt="University of Victoria logo"
						/>
						<StyledH3>Economic Bachelor's degree</StyledH3>
						<Company>University of Victoria</Company>
						<Period>Sep 2016 – Apr 2020</Period>
					</Grid>
				</Grid>
			</StyledContainer>
		</Box>
	);
};

export default EducationSection;
