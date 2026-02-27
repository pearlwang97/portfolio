import { styled } from "@mui/material/styles";
import { FONTS } from "components/constants/styleTokens";

const Body2 = styled("p")(({ theme }) => ({
	fontSize: "1rem",
	fontFamily: FONTS.sans,
	[theme.breakpoints.down("lg")]: {
		fontSize: "0.875rem",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "0.85rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.8rem",
	},
}));

export default Body2;
