import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	// display: "flex",
    // flexDirection: "column",
	flexWrap: "wrap",
	// justifyContent: "space-between",
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
	fontSize: "1.5rem",
	fontWeight: "semi-bold",
	textAlign: "left",
    margin: "40px 0",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.25rem",
        margin: "20px 0",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
        margin: "20px 0",
	},
}));

const StyledIcon = styled("img")(({ theme }) => ({
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
                <Divider width={"25%"} alignLeft={true}/>
                <StyledH2>Skill</StyledH2>
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
						<StyledIcon src="/images/figma-logo.svg" alt="Figma" />
						<StyledIcon src="/images/id-logo.svg" alt="InDesign" />
						<StyledIcon src="/images/ai-logo.svg" alt="Illustrator" />
						<StyledIcon src="/images/ps-logo.svg" alt="Photoshop" />
						<StyledIcon src="/images/pr-logo.svg" alt="Premierepro" />
						<StyledIcon src="/images/ae-logo.svg" alt="Aftereffects" />
						<StyledIcon src="/images/dn-logo.svg" alt="Dimention" />
						<StyledIcon src="/images/ar-logo.svg" alt="AR" />
						<StyledIcon src="/images/css-logo.svg" alt="CSS" />
						<StyledIcon src="/images/html-logo.svg" alt="HTML" />
						<StyledIcon src="/images/js-logo.svg" alt="Javascript" />
						<StyledIcon src="/images/wordpress-logo.svg" alt="Wordpress" />
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export default SkillSection;