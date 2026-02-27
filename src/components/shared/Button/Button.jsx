import { styled } from "@mui/material/styles";
import { COLORS } from "components/constants/styleTokens";
import { buttonBaseStyles } from "components/shared/buttonBase";

const StyledButton = styled("button")({
	...buttonBaseStyles,
	width: "9rem",
	transition: "background-color 0.3s ease-in-out",
	marginTop: "20px",
	"&:hover": {
		backgroundColor: COLORS.accentSoft,
		color: COLORS.text,
	},
});

export default StyledButton;
