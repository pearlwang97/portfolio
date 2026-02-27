import { styled } from "@mui/material/styles";
import { FONTS } from "components/constants/styleTokens";

const Body1 = styled("p")(({ theme }) => ({
	fontSize: "1.125rem",
	fontFamily: FONTS.sans,
	marginBottom: "10px",
	lineHeight: "1.75",
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
