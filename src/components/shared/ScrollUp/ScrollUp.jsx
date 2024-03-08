import React, { useState } from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Zoom in={trigger}>
			<Fab
				size="small"
				aria-label="scroll back to top"
				onClick={handleClick}
				sx={{ position: "fixed", bottom: 16, right: 16}}
			>
				<KeyboardArrowUpIcon />
			</Fab>
		</Zoom>
	);
};

export default ScrollTop;
