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

const Company = styled('div')(({ theme }) => ({
    fontSize: '1rem', // Smaller font size on small screens
    margin: '10px 0',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem', // 1.25rem font size on small devices and up
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem', // Increase font size on medium devices and up
    },
}));

const StyledH3 = styled('h3')(({ theme }) => ({
    fontSize: '1.5rem', // Smaller font size on small screens
    fontWeight: 500, // medium
    margin: '10px 0',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.75rem', // 1.75rem font size on small devices and up
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem', // Increase font size on medium devices and up
    },
}));

const WorkExperienceParagraph = styled('p')(({ theme }) => ({
    fontSize: '1rem', // Smaller font size on small screens
    margin: '10px 0',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem', // 1.25rem font size on small devices and up
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem', // Increase font size on medium devices and up
    },
}));

const Period = styled('div')(({ theme }) => ({
    fontSize: '1.25rem', // Smaller font size on small screens
    margin: '10px 0',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem', // 1.5rem font size on small devices and up
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem', // Increase font size on medium devices and up
    },
}));

const StyledUl = styled('ul')({
    listStyleType: 'none',
    paddingLeft: 0,
	textAlign: 'left',
});

const StyledLi = styled('li')({
    fontSize: '16px',
    margin: '10px 0',
    paddingLeft: '16px',
    textIndent: '-16px',
});

const WorkExperienceSection = () => {
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
				<Divider width={"25%"} alignLeft={true}/>
				<StyledH2>Work Experience</StyledH2>
				</Box>

				<Grid
					item
					container
					sx={{
						width: "100%",
						justifyContent: "start",
						gap: "30px",
						alignItems: "top",
						textAlign: "left",
					}}
				>
					<Grid item xs={12} md={5}>
						<StyledH3>Marketing Coordinator</StyledH3>
						<Company>Amber Financial Services Corp.</Company>
						<Period>Jan 2021 – Jan 2022</Period>
						<StyledUl>
							<StyledLi>
								<span>-</span>Develop strategic marketing initiatives and
								activities.
							</StyledLi>
							<StyledLi>
								<span>-</span>
								Create, maintain and strengthen the organization’s overall brand
								though all media avenues.
							</StyledLi>
							<StyledLi>
								<span>-</span>Design and implement marketing campaign.
							</StyledLi>
							<StyledLi>
								<span>-</span>Organize monthly activities for products/services.
							</StyledLi>
							<StyledLi>
								<span>-</span>Identify and analyze competitors.
							</StyledLi>
						</StyledUl>
					</Grid>
					<Grid item sx={12} md={5}>
						<StyledH3>Front Desk</StyledH3>
						<Company>PIU Entertainment Ltd.</Company>
						<Period>Feb 2019 – Sept 2020</Period>
						<StyledUl>
							<StyledLi>
								<span>-</span>Assist with clients inquiries and help to solve
								technical problem.
							</StyledLi>
							<StyledLi>
								<span>-</span>Possess a working knowledge of related products
								and promotional resources.
							</StyledLi>
							<StyledLi>
								<span>-</span>Create documents for reports.
							</StyledLi>
						</StyledUl>
					</Grid>
				</Grid>
			</StyledContainer>
		</Box>
	);
};

export default WorkExperienceSection;
