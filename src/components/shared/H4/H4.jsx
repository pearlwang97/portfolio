import { styled } from "@mui/material/styles";

const H4 = styled("h4")(({ theme }) => ({
	fontSize: "1.375rem", // Smaller font size on small screens
	fontWeight: 500,
	margin: "10px 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.25rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.125rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

export default H4;