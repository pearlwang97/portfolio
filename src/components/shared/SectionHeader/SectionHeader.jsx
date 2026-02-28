import React from "react";
import { Box } from "@mui/material";
import H2 from "components/shared/H2/H2";
import Divider from "components/shared/Divider/Divider";
import { SECTION_HEADERS } from "components/constants/styleTokens";

const SectionHeader = ({
	title,
	alignLeft = false,
	showDivider = false,
	dividerSx,
	titleMargin = SECTION_HEADERS.titleMargin,
	titleSx,
	sx,
}) => {
	return (
		<Box
			sx={{
				width: "100%",
				...sx,
			}}
		>
			{showDivider ? (
				<Divider
					sx={{
						width: SECTION_HEADERS.dividerWidth,
						...dividerSx,
					}}
					alignLeft={alignLeft}
				/>
			) : null}
			<H2
				sx={{
					textAlign: alignLeft ? "left" : "center",
					...(titleMargin ? { margin: titleMargin } : {}),
					...titleSx,
				}}
			>
				{title}
			</H2>
		</Box>
	);
};

export default SectionHeader;
