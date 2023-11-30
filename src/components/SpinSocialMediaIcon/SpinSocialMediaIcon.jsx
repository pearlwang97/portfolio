import React, { useState } from "react";
import { Box } from "@mui/system";
import { styled, keyframes } from "@mui/system";

const SpinBox = styled(Box)({
	position: "absolute",
	zIndex: 2,
});

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const RotatingBox = styled(Box)(({ spinning }) => ({
	position: "absolute",
	top: 0,
	transition: "transform 2s",
	animation: spinning ? `${spin} 2s linear infinite` : "none",
	zIndex: 1,
}));

const SpinSocialMediaIcon = ({ LogoComponent, TextComponent, width, height }) => {
	const [spinning, setSpinning] = useState(false);

	return (
		<Box sx={{ position: "relative", width: width, height: height }}>
			<SpinBox
				onMouseEnter={() => setSpinning(true)}
				onMouseLeave={() => setSpinning(false)}
			>
				<LogoComponent/>
			</SpinBox>
			<RotatingBox spinning={spinning}>
				<TextComponent />
			</RotatingBox>
		</Box>
	);
};

export default SpinSocialMediaIcon;
