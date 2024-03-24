import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircularProgress from "@mui/material/CircularProgress";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollTopButton = () => {
	const [progress, setProgress] = useState(0);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});
	const handleScroll = () => {
		const totalHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollPosition = window.scrollY;
		const scrolledPercentage = (scrollPosition / totalHeight) * 100;
		setProgress(scrolledPercentage);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Zoom in={trigger}>
			
			<IconButton
				onClick={handleClick}
				aria-label="scroll back to top"
				sx={{
					position: "fixed",
					bottom: 20,
					right: 20,
				}}
			>
				<CircularProgress
					variant="determinate"
					value={progress}
					size={48}
					thickness={1}
					sx={{ color: "black" }}
				/>
				<KeyboardArrowUpIcon sx={{ position: "absolute" }} />
			</IconButton>
		</Zoom>
	);
};

export default ScrollTopButton;
