import { styled } from "@mui/material/styles";

const Body1 = styled("p")(({ theme }) => ({
	fontSize: "1.125rem",
    fontFamily: "'Montserrat', sans-serif",
	marginBottom: "10px",
	lineHeight: "1.5",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.1rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.9rem",
	},
}));

export default Body1;