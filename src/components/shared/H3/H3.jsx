import { styled } from "@mui/material/styles";

const H3 = styled("h3")(({ theme }) => ({
	fontSize: "1.5rem", // Smaller font size on small screens
	fontWeight: 500, // medium
	margin: "10px 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.375rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.25rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.125rem",
	},
}));

export default H3;