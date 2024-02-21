import { Tooltip } from "@mui/material";

const IconTooltip = (props) => {
	const { children, title, sx } = props;
	return (
		<Tooltip
			title={title}
			componentsProps={{
				tooltip: {
					sx: {
						fontSize: "0.75rem",
						textAlign: "center",
						backgroundColor: "#dba39a",
						color: "#fff",
						fontFamily: "montserrat, sans-serif",
						borderRadius: "4px",
						padding: "10px",
					},
				},
				arrow: {
					sx: {
						color: "#dba39a",
					},
				},
			}}
			sx={sx || {}}
			arrow
		>
			{children}
		</Tooltip>
	);
};

export default IconTooltip;
