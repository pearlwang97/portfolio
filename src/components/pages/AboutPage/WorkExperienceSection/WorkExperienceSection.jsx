import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Divider from "components/shared/Divider/Divider";
import H2 from "components/shared/H2/H2";
import MainContainer from "components/shared/MainContainer/MainContainer";
import StyledP from "components/shared/StyledP/StyledP";
import H3 from "components/shared/H3/H3";

const StyledUl = styled("ul")({
	paddingLeft: "20px",
	textAlign: "left",
});

const StyledLi = styled("li")({
	margin: "10px 0",
	paddingLeft: "16px",
});

const WorkExperienceSection = () => {
	return (
		<MainContainer
			sx={{
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
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
					Work Experience
				</H2>
			</Box>

			<Grid
				item
				container
				sx={{
					width: "100%",
					justifyContent: "start",
					gap: { xs: "0px", md: "30px" },
					alignItems: "top",
					textAlign: "left",
					fontFamily: "'Montserrat', sans-serif",
				}}
			>
				<Grid item xs={12} md={5}>
					<H3>Marketing Coordinator</H3>
					<StyledP>Amber Financial Services Corp.</StyledP>
					<StyledP>Jan 2021 – Jan 2022</StyledP>
					<StyledUl>
						<StyledLi>
							<StyledP>
								Develop strategic marketing initiatives and activities.
							</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>
								Create, maintain and strengthen the organization’s overall brand
								though all media avenues.
							</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>Design and implement marketing campaign.</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>
								Organize monthly activities for products/services.
							</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>Identify and analyze competitors.</StyledP>
						</StyledLi>
					</StyledUl>
				</Grid>
				<Grid item sx={12} md={5}>
					<H3>Front Desk</H3>
					<StyledP>PIU Entertainment Ltd.</StyledP>
					<StyledP>Feb 2019 – Sept 2020</StyledP>
					<StyledUl>
						<StyledLi>
							<StyledP>
								Assist with clients inquiries and help to solve technical
								problem.
							</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>
								Possess a working knowledge of related products and promotional
								resources.
							</StyledP>
						</StyledLi>
						<StyledLi>
							<StyledP>Create documents for reports.</StyledP>
						</StyledLi>
					</StyledUl>
				</Grid>
			</Grid>
		</MainContainer>
	);
};

export default WorkExperienceSection;
