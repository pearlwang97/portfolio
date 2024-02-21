import { styled } from "@mui/material/styles";

const StyledP = styled("p")(({ theme }) => ({
	fontSize: "1.25rem",
	// textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.75rem",
	},
}));

export default StyledP;