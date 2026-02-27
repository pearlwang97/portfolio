import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MainContainer from "components/shared/MainContainer/MainContainer";

const ProjectNavButtons = ({ prevLink, nextLink }) => {
	const navigate = useNavigate();
	const handlePreviousProject = () => {
		// Navigate to the previous project
		navigate(prevLink);
	};

	const handleNextProject = () => {
		// Navigate to the next project
		navigate(nextLink);
	};

	return (
		<MainContainer
			sx={{
				display: "flex",
				justifyContent: "space-between",
				padding: "1rem",
				marginBottom: {
					lg: "200px",
					md: "150px",
					sm: "100px",
					xs: "100px",
				},
			}}
		>
			<Button
				onClick={handlePreviousProject}
				startIcon={<ArrowBackIcon />}
				sx={{ color: "#dba39a" }}
			>
				Previous
			</Button>
			<Button
				onClick={handleNextProject}
				endIcon={<ArrowForwardIcon />}
				sx={{ color: "#dba39a" }}
			>
				Next
			</Button>
		</MainContainer>
	);
};

export default ProjectNavButtons;
