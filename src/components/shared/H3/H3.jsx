import { styled } from "@mui/material/styles";

const H3 = styled("h3")(({ theme }) => ({
	fontSize: "1.5rem", // Smaller font size on small screens
	fontWeight: 600, // medium
	margin: "10px 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.25rem", // 1.75rem font size on small devices and up
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.25rem", // Increase font size on medium devices and up
	},
}));

export default H3;