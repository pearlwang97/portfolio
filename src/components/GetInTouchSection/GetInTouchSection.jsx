import React from "react";
import { Box } from "@mui/system";
import Body1 from "components/shared/Body1/Body1";
import Button from "components/shared/Button/Button";
import MainContainer from "components/shared/MainContainer/MainContainer";

const SocialMediaSection = () => {
	const emailAddress = "pearlwang1997@gmail.com";
	const mailtoHref = `mailto:${emailAddress}`;
	return (
		<MainContainer
			sx={{
				textAlign: "center",
				display: "flex",
				flexWrap: "wrap",
				marginTop: {
					sm: "100px",
					md: "150px",
					lg: "200px",
				},
				marginBottom: {
					sm: "100px",
					md: "150px",
					lg: "200px",
				},
			}}
		>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					marginBottom: "50px",
				}}
			>
				<Body1>
					Currently look for new opportunities, please feel free to reach out.
				</Body1>
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
