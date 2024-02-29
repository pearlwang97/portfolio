import { styled } from "@mui/material/styles";

const H5 = styled("h5")(({ theme }) => ({
	fontSize: "1.25rem", // Smaller font size on small screens
	fontWeight: 400,
	margin: "10px 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.125rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.95rem",
	},
}));

export default H5;