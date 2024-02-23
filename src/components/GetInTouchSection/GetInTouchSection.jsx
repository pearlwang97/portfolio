import React from "react";
import { Box } from "@mui/system";
import StyledP from "components/shared/StyledP/StyledP";
import Button from "components/shared/Button/Button";
import MainContainer from "components/shared/MainContainer/MainContainer";
import "./GetInTouchSection.css";

const SocialMediaSection = () => {
	const emailAddress = "pearlwang1997@gmail.com";
	const mailtoHref = `mailto:${emailAddress}`;
	return (
		<MainContainer
			sx={{
				textAlign: "center",
				display: "flex",
				flexWrap: "wrap",
				marginBottom: {
					xs: "50px",
					md: "75px",
					lg: "100px",
				},
			}}
		>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<StyledP>
					Currently look for new opportunities, please feel free to reach out.
				</StyledP>
			</Box>

			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button href={mailtoHref} target="_blank">
					Contact
				</Button>
			</Box>
		</MainContainer>
	);
};

export default SocialMediaSection;
