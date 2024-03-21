import React, { useState, useEffect } from "react";

import ProjectsSection from "components/pages/ProjectsPage/ProjectsSection/ProjectsSection";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectsPage = () => {
	// const [isPastHalf, setIsPastHalf] = useState(false);

	// const theme = useTheme();
	// const isMidOrAbove = useMediaQuery(theme.breakpoints.up("md"));

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const isPastHalf = window.scrollY >= document.body.offsetHeight / 2;
	// 		setIsPastHalf(isPastHalf);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);
	return (
		<div>
            {/* {isMidOrAbove && !isPastHalf && <ScrollDownIndicator left="2%"/>} */}
			<ProjectsSection />
		</div>
	);
};

export default ProjectsPage;
