import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Body1 from "components/shared/Body1/Body1";
import MainContainer from "components/shared/MainContainer/MainContainer";
import H1 from "components/shared/H1/H1";
import LinkedInIcon from "components/Icons/LinkedInIcon";
import InstagramIcon from "components/Icons/InstagramIcon";
import YoutubeIcon from "components/Icons/YoutubeIcon";
import MailIcon from "components/Icons/MailIcon";
import FacebookIcon from "components/Icons/FacebookIcon";

const Link = styled("a")(({ theme }) => ({
	color: "inherit",
	textDecoration: "none",
}));

const Footer = () => {
	return (
		<Box
			sx={{
				margin: 0,
				paddingTop: "10px",
				backgroundColor: "#dba39a",
			}}
		>
			<MainContainer
				sx={{
					paddingBottom: "10px",
				}}
			>
				<H1
					sx={{
						textAlign: "left",
						color: "white",
						margin: "30px 0",
						width: {
							xs: "100%",
							sm: "100%",
							md: "100%",
							lg: "50%",
						},
					}}
				>
					Get In Touch
				</H1>
				<Body1
					sx={{
						textAlign: "left",
						color: "white",
						margin: "30px 0",
						fontFamily: "'Montserrat', sans-serif",
						width: {
							xs: "100%",
							sm: "100%",
							md: "50%",
							lg: "50%",
						},
					}}
				>
					Currently looking for new opportunities and would love to connect.
					Please don't hesitate to{" "}
					<Link
						href="mailto:pearlwang1997@gmail.com"
						target="_blank"
						sx={{ textDecoration: "underline" }}
					>
						send me an email.
					</Link>
				</Body1>
				<Box
					sx={{
						margin: "30px 0",
					}}
				>
					<Link href="https://www.linkedin.com/in/peirong-wang-123a83208/">
						<LinkedInIcon
							sx={{ fontSize: 30, marginRight: "10px" }}
							fill="white"
						/>
					</Link>
					<Link href="https://www.instagram.com/_w_ong/" target="_blank">
						<InstagramIcon
							sx={{ fontSize: 30, marginRight: "10px" }}
							fill="white"
						/>
					</Link>
					<Link href="https://www.youtube.com/@pearlwang9426" target="_blank">
						<YoutubeIcon
							sx={{ fontSize: 30, marginRight: "10px" }}
							fill="white"
						/>
					</Link>
					<Link href="https://www.facebook.com/pearl.wang.10" target="_blank">
						<FacebookIcon
							sx={{ fontSize: 30, marginRight: "10px" }}
							fill="white"
						/>
					</Link>
					<Link href="mailto:pearlwang1997@gmail.com" target="_blank">
						<MailIcon sx={{ fontSize: 30, marginRight: "10px" }} fill="white" />
					</Link>
				</Box>
				<Body1
					sx={{
						margin: "20px 0 0 0",
						// textAlign: "center",
						color: "white",
						fontSize: {
							xs: "0.8rem",
							sm: "0.8rem",
							md: "0.8rem",
							lg: "0.8rem",
						},
					}}
				>
					&#169; 2024 All Rights Reserved | Peirong Wang
				</Body1>
			</MainContainer>
			<Box></Box>
		</Box>
	);
};

export default Footer;
