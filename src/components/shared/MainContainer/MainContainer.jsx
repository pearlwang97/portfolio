import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LAYOUT } from "components/constants/styleTokens";

const MainContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: LAYOUT.contentWidth,
	height: "auto",
	margin: "0 auto",
	paddingInline: LAYOUT.gutter,
	[theme.breakpoints.down("sm")]: {
		paddingInline: LAYOUT.gutterMobile,
	},
}));

export default MainContainer;
