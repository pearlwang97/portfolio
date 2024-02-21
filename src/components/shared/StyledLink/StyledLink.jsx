import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)({
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
	},
});

export default StyledLink;