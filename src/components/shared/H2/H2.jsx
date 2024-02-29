import { styled } from "@mui/material/styles";

const H2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 600,
	textAlign: "center",
    fontFamily: "utopia-std, serif",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.75rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.375rem",
	},

}));

export default H2;
