import React from "react";
import { styled } from "@mui/material/styles";
import resolveAssetPath from "components/utils/resolveAssetPath";

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
	verticalAlign: "middle",
});

const Image = React.forwardRef(({ src, ...props }, ref) => (
	<StyledImage ref={ref} src={resolveAssetPath(src)} {...props} />
));

Image.displayName = "Image";

export default Image;
