import { Grid, Box, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
	width: "60%",
	maxWidth: "1140px",
	// display: "flex",
	// flexDirection: "column",
	flexWrap: "wrap",
	// justifyContent: "space-between",
	alignItems: "center",
	height: "auto",
	margin: "0 auto",
	// marginBottom: marginBottom || 0,
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));

const Divider = styled(Box)(({ theme, alignLeft }) => ({
	height: "1px",
	backgroundColor: "#250d00",
	marginLeft: alignLeft ? 0 : "auto",
	marginRight: alignLeft ? "auto" : 0,
	marginTop: "10px",
	marginBottom: "10px",
	width: "10%",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "10%",
	},
	[theme.breakpoints.up("md")]: {
		width: "25%",
	},
}));

const StyledH2 = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "semi-bold",
	textAlign: "left",
	margin: "40px 0",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		margin: "20px 0",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		margin: "20px 0",
	},
	fontFamily: "utopia-std, serif",
}));

const StyledIcon = styled("img")(({ theme }) => ({
	height: "35px",
	width: "auto",
	[theme.breakpoints.up("sm")]: {
		height: "40px", // Increase height on small devices and up
	},
	[theme.breakpoints.up("md")]: {
		height: "50px", // Increase height on medium devices and up
	},
}));

const SkillSection = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#fefcf3",
				color: "#250d00",
				paddingTop: "100px",
			}}
		>
			<StyledContainer>
				<Divider width={"25%"} alignLeft={true} />
				<StyledH2>Skill</StyledH2>
				<Grid
					container
					sx={{
						width: "100%",
						justifyContent: "start",
						gap: "10px",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<Tooltip
						title="Figma"
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
						}}
					>
						<StyledIcon src="/images/figma-logo.svg" alt="Figma logo" />
					</Tooltip>
					<Tooltip
						title="InDesign"
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
						}}
					>
						<StyledIcon src="/images/id-logo.svg" alt="InDesign logo" />
					</Tooltip>
					<Tooltip
						title="Illustrator"
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
						}}
					>
						<StyledIcon src="/images/ai-logo.svg" alt="Illustrator logo" />
					</Tooltip>
					<Tooltip
						title="Photoshop"
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
						}}
					>
						<StyledIcon src="/images/ps-logo.svg" alt="Photoshop logo" />
					</Tooltip>
					<Tooltip
						title="Premiere Pro"
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
						}}
					>
						<StyledIcon src="/images/pr-logo.svg" alt="Premiere Pro logo" />
					</Tooltip>
					<Tooltip
						title="After Effects"
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
						}}
					>
						<StyledIcon src="/images/ae-logo.svg" alt="After Effects logo" />
					</Tooltip>
					<Tooltip
						title="Dimension"
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
						}}
					>
						<StyledIcon src="/images/dn-logo.svg" alt="Dimension logo" />
					</Tooltip>
					<Tooltip
						title="AR"
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
						}}
					>
						<StyledIcon src="/images/ar-logo.svg" alt="AR logo" />
					</Tooltip>
					<Tooltip
						title="CSS"
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
						}}
					>
						<StyledIcon src="/images/css-logo.svg" alt="CSS logo" />
					</Tooltip>
					<Tooltip
						title="HTML"
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
						}}
					>
						<StyledIcon src="/images/html-logo.svg" alt="HTML logo" />
					</Tooltip>
					<Tooltip
						title="JavaScript"
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
						}}
					>
						<StyledIcon src="/images/js-logo.svg" alt="JavaScript logo" />
					</Tooltip>
					<Tooltip
						title="WordPress"
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
						}}
					>
						<StyledIcon src="/images/wordpress-logo.svg" alt="WordPress logo" />
					</Tooltip>
				</Grid>
			</StyledContainer>
		</Box>
	);
};

export default SkillSection;
