import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from "@mui/material";

const ScrollDownIndicator = ({left}) => (
	<Box
		sx={{
			position: "fixed",
			bottom: "20px",
			left: left,
			animation: "bounce 2s infinite",
			color: "#dba39a",
			zIndex: "1000",
			cursor: "pointer",
			"@keyframes bounce": {
				"0%, 20%, 50%, 80%, 100%": {
					transform: "translateY(0) translateX(-50%)",
				},
				"40%": {
					transform: "translateY(-30px) translateX(-50%)",
				},
				"60%": {
					transform: "translateY(-15px) translateX(-50%)",
				},
			},
		}}
	>
		<KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
	</Box>
);

export default ScrollDownIndicator;
