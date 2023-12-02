import react from "react";
import { Grid } from "@mui/material";
import Divider from "../../../Divider/Divider";
import "./WorkExperienceSection.css";

const WorkExperienceSection = () => {
	return (
		<Grid
			container
			className="workExperienceSection"
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				sx={{
					width: "80%",
					height: "100%",
					textAlign: "left",
				}}
			>
				<Divider width={"25%"} />
				<h2>Work Experience</h2>
				<Grid
					item
					container
					sx={{
						width: "100%",
						justifyContent: "start",
						gap: "30px",
						alignItems: "top",
					}}
				>
					<Grid item xs={5} className="workExperienceSection__item">
						<h3>Marketing Coordinator</h3>
						<p className="company">Amber Financial Services Corp.</p>
						<p className="period">Jan 2021 – Jan 2022</p>
						<ul>
							<li>
								<span>-</span>Develop strategic marketing initiatives and
								activities.
							</li>
							<li>
								<span>-</span>
								Create, maintain and strengthen the organization’s overall brand
								though all media avenues.
							</li>
							<li>
								<span>-</span>Design and implement marketing campaign.
							</li>
							<li>
								<span>-</span>Organize monthly activities for products/services.
							</li>
							<li>
								<span>-</span>Identify and analyze competitors.
							</li>
						</ul>
					</Grid>
					<Grid item xs={5} className="workExperienceSection__item">
						<h3>Front Desk</h3>
						<p className="company">PIU Entertainment Ltd.</p>
						<p className="period">Feb 2019 – Sept 2020</p>
						<ul>
							<li>
								<span>-</span>Assist with clients inquiries and help to solve
								technical problem.
							</li>
							<li>
								<span>-</span>Possess a working knowledge of related products
								and promotional resources.
							</li>
							<li>
								<span>-</span>Create documents for reports.
							</li>
						</ul>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WorkExperienceSection;
