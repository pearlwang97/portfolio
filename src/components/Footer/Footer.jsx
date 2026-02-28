import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Body1 from "components/shared/Body1/Body1";
import MainContainer from "components/shared/MainContainer/MainContainer";
import H1 from "components/shared/H1/H1";
import SocialLinks from "components/shared/SocialLinks/SocialLinks";
import { profile, siteContent } from "components/constants/profile";

const Link = styled("a")({
	color: "inherit",
	textDecoration: "none",
});

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
					{siteContent.footer.heading}
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
					{siteContent.footer.availabilityMessage}{" "}
					<Link
						href={profile.mailto}
						sx={{ textDecoration: "underline" }}
					>
						{siteContent.footer.emailLinkLabel}
					</Link>
				</Body1>
				<SocialLinks
					sx={{
						margin: "30px 0",
					}}
				/>
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
					&#169; {siteContent.footer.copyrightYear} {siteContent.footer.rightsLabel} | {profile.name}
				</Body1>
			</MainContainer>
			<Box></Box>
		</Box>
	);
};

export default Footer;
