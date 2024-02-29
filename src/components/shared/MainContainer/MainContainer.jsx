import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContainer = styled(Box)(({ theme }) => ({
	width: "1000px",
	// justifyContent: "space-between",
	height: "auto",
	margin: "0 auto",
	[theme.breakpoints.down("lg")]: {
		width: "840px",
		maxWidth: "912px",
	},
	[theme.breakpoints.down("md")]: {
		width: "540px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "320px",
	},
}));

export default MainContainer;