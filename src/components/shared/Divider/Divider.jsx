import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Divider = styled(Box)(({ theme, alignLeft }) => ({
	height: "1px",
	borderBottom: "1px solid #250d00",
	marginLeft: alignLeft ? 0 : "auto",
	marginRight: alignLeft ? "auto" : 0,
	marginTop: "10px",
	marginBottom: "10px",
	width: "10%",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "10%",
	},
	[theme.breakpoints.up("md")]: {
		width: "25%",
	},
}));

export default Divider;
