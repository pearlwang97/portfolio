import React from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import "./GetInTouchSection.css";

const StyledH2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "50px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		marginBottom: "25px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		marginBottom: "10px",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledP = styled("p")(({ theme }) => ({
	fontSize: "1rem",
	textAlign: "center",
	marginBottom: "40px",
	[theme.breakpoints.down("md")]: {
		fontSize: "0.75rem",
		marginBottom: "20px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.75rem",
		marginBottom: "10px",
	},
}));

const StyledButton = styled("a")(({ theme }) => ({
	display: "inline-block",
	padding: "10px 30px",
	borderRadius: "5px",
	textDecoration: "none",
	backgroundColor: "#dba39a",
	color: "#250D00",
	fontWeight: "bold",
	transition: "background-color 0.3s, color 0.3s",
	fontFamily: "'Montserrat', sans-serif",
	margin: "15px 0",
	"&:hover": {
		backgroundColor: "#F0DBDB",
		color: "#250D00",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "5px 15px",
		fontSize: "0.8rem",
	},
	[theme.breakpoints.down("xs")]: {
		padding: "5px 10px",
		fontSize: "0.7rem",
	},
}));

const SocialMediaSection = () => {
	const emailAddress = "pearlwang1997@gmail.com";
	const mailtoHref = `mailto:${emailAddress}`;
	return (
		<Box
			className="getInTouchSection"
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
				pb: "50px",
			}}
		>
			<StyledH2>Get In Touch</StyledH2>
			<Box sx={{width: {xs: "90%", md: "80%" }, margin: "0 auto"}}>
				<StyledP>
					Currently looking for new opportunities, please feel free to reach
					out.
				</StyledP>
			</Box>

			<StyledButton href={mailtoHref} target="_blank">
				Contact
			</StyledButton>
		</Box>
	);
};

export default SocialMediaSection;
