import { styled } from "@mui/material/styles";
import { FONTS } from "components/constants/styleTokens";

const H1 = styled("h1")(({ theme }) => ({
	fontSize: "3rem",
	fontWeight: 600,
	textAlign: "center",
	fontFamily: FONTS.serif,
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.5rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.75rem",
	},

}));

export default H1;
