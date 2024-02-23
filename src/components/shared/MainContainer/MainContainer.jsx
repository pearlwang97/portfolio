import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContainer = styled(Box)(({ theme }) => ({
	// width: "60%",
	width: "1140px",
	// display: "flex",
	// flexWrap: "wrap",
	justifyContent: "space-between",
	height: "auto",
	margin: "0 auto",
    // [theme.breakpoints.up("lg")]: {
    //     minWidth: "1140px", // Add minWidth here
    // },
	[theme.breakpoints.down("lg")]: {
		// width: "70%",
		width: "540px",
		maxWidth: "912px",
	},
	[theme.breakpoints.down("md")]: {
		// width: "80%",
		width: "540px",
	},
	[theme.breakpoints.down("sm")]: {
		// width: "85%",
		// width: "90%",
		// minWidth: "320px",
		width: "320px",
	},
}));

export default MainContainer;