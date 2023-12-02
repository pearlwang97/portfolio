import react from "react";
import { Box } from "@mui/system";

const Divider = ({ width, alignRight, ratio }) => {
	if (!ratio) {
		ratio = 1;
	}
	return (
		<Box
			sx={{
				width: width,
				height: "1px",
				backgroundColor: "#250d00",

				margin: alignRight
					? `${20 * ratio}px 0 ${20 * ratio}px auto`
					: `${20 * ratio}px 0 ${20 * ratio}px 0`,
			}}
		></Box>
	);
};

export default Divider;
