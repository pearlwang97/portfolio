import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const profile = {
	name: "Peirong Wang",
	firstName: "Peirong",
	email: "pearlwang1997@gmail.com",
	mailto: "mailto:pearlwang1997@gmail.com",
	url: "https://portfolio.peirongwang.com",
	image: "https://portfolio.peirongwang.com/logo.png",
	jobTitle: "New Media and Web Development Student",
	heroTitle: "Marketing & Design",
	alumniOf: "British Columbia Institute of Technology",
	originCountry: "China",
	currentLocation: "Vancouver, BC",
	previousField: "economics",
	primaryDisciplines: ["digital design", "marketing"],
	coreStrengths: ["marketing", "design", "analytics"],
};

export const siteContent = {
	home: {
		greeting: "hello, I’m",
		learnMoreLabel: "LEARN MORE",
		heroSummary:
			"I combine {coreStrengths} to create engaging and effective brand experiences.",
		heroDetail:
			"With a strong visual sense and data-driven approach, I design intuitive user experiences and impactful content.",
		skillsLeadIn: "My skills include",
		skillsClosing:
			"digital marketing, and SEO, helping brands tell their story in a meaningful way.",
	},
	about: {
		greeting: "Hiii",
		introHeading: "I'm {firstName}!",
		contactButtonLabel: "Contact Me",
		growthHighlight: "Always eager to learn and grow",
	},
	footer: {
		heading: "Get In Touch",
		availabilityMessage:
			"Currently looking for new opportunities and would love to connect. Please don't hesitate to",
		emailLinkLabel: "send me an email.",
		copyrightYear: new Date().getFullYear(),
		rightsLabel: "All Rights Reserved",
	},
};

export const formatNaturalList = (items = []) => {
	if (items.length === 0) {
		return "";
	}

	if (items.length === 1) {
		return items[0];
	}

	if (items.length === 2) {
		return `${items[0]} and ${items[1]}`;
	}

	return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};

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
