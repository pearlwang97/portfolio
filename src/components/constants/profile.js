import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const profile = {
	name: "Peirong Wang",
	email: "pearlwang1997@gmail.com",
	url: "https://portfolio.peirongwang.com",
	image: "https://portfolio.peirongwang.com/logo.png",
	jobTitle: "New Media and Web Development Student",
	alumniOf: "British Columbia Institute of Technology",
};

profile.mailto = `mailto:${profile.email}`;

export const socialLinks = [
	{
		href: "https://www.linkedin.com/in/peirong-wang-123a83208/",
		icon: LinkedInIcon,
		label: "LinkedIn",
		isExternal: true,
		includeInSchema: true,
	},
	{
		href: "https://www.instagram.com/_w_ong/",
		icon: InstagramIcon,
		label: "Instagram",
		isExternal: true,
		includeInSchema: true,
	},
	{
		href: "https://www.youtube.com/@pearlwang9426",
		icon: YouTubeIcon,
		label: "YouTube",
		isExternal: true,
		includeInSchema: true,
	},
	{
		href: "https://www.facebook.com/pearl.wang.10",
		icon: FacebookIcon,
		label: "Facebook",
		isExternal: true,
	},
	{
		href: profile.mailto,
		icon: MailOutlineIcon,
		label: "Email",
	},
];

export const schemaSocialLinks = socialLinks
	.filter((link) => link.includeInSchema)
	.map((link) => link.href);
