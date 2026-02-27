import { COLORS, FONTS, RADIUS } from "components/constants/styleTokens";

export const buttonBaseStyles = {
	backgroundColor: COLORS.accent,
	color: COLORS.text,
	textDecoration: "none",
	border: "none",
	borderRadius: RADIUS.button,
	fontWeight: 600,
	fontSize: "15px",
	padding: "10px",
	textAlign: "center",
	fontFamily: FONTS.sans,
	cursor: "pointer",
};
