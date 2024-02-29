import { styled } from "@mui/material/styles";

const Body2 = styled("p")(({ theme }) => ({
	fontSize: "1rem",
    fontFamily: "'Montserrat', sans-serif",
	[theme.breakpoints.down("lg")]: {
		fontSize: "0.875rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "0.85re,",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.8rem",
	},
}));

export default Body2;