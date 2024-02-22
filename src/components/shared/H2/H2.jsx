import { styled } from "@mui/material/styles";

const H2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "bold",
	textAlign: "center",
    fontFamily: "utopia-std, serif",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},

}));

export default H2;
