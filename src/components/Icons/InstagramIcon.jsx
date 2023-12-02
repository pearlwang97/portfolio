import { React, useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { styled, keyframes } from "@mui/system";

const Icon = styled("g")({
	zIndex: 1000,
});

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinText = styled("g")(({ spinning }) => ({
	transition: "transform 2s",
	animation: spinning ? `${spin} 2s linear infinite` : "none",
	transformOrigin: "center",
	zIndex: 999,
}));

const InstagramIcon = ({ width, height }) => {
	const [spinning, setSpinning] = useState(false);
	const styles = {
		cls3: {
			fontFamily: "Montserrat-Medium Montserrat sans-serif",
			fontSize: "19.74px",
			fonWeight: 500,
		},
		// Add styles for cls-3 if used for shapes, not text
	};
	return (
		<SvgIcon sx={{ width: width, height: height }} viewBox="0 0 142.06 140.76">
			<Icon
				onMouseEnter={() => setSpinning(true)}
				onMouseLeave={() => setSpinning(false)}
			>
				<circle cx="70.99" cy="71.11" r="39.63" fill="#010201" />
				<path
					d="m70.99,50.65c6.66,0,7.45.03,10.08.15,2.43.11,3.75.52,4.63.86,1.16.45,2,.99,2.87,1.87.87.87,1.41,1.7,1.87,2.87.34.88.75,2.2.86,4.63.12,2.63.15,3.42.15,10.08s-.03,7.45-.15,10.08c-.11,2.43-.52,3.75-.86,4.63-.45,1.16-.99,2-1.87,2.87-.87.87-1.7,1.41-2.87,1.87-.88.34-2.2.75-4.63.86-2.63.12-3.42.15-10.08.15s-7.45-.03-10.08-.15c-2.43-.11-3.75-.52-4.63-.86-1.16-.45-2-.99-2.87-1.87-.87-.87-1.41-1.7-1.87-2.87-.34-.88-.75-2.2-.86-4.63-.12-2.63-.15-3.42-.15-10.08s.03-7.45.15-10.08c.11-2.43.52-3.75.86-4.63.45-1.16.99-2,1.87-2.87.87-.87,1.7-1.41,2.87-1.87.88-.34,2.2-.75,4.63-.86,2.63-.12,3.42-.15,10.08-.15m0-4.5c-6.78,0-7.63.03-10.29.15-2.66.12-4.47.54-6.06,1.16-1.64.64-3.03,1.49-4.42,2.88-1.39,1.39-2.24,2.78-2.88,4.42-.62,1.59-1.04,3.4-1.16,6.06-.12,2.66-.15,3.51-.15,10.29s.03,7.63.15,10.29c.12,2.66.54,4.47,1.16,6.06.64,1.64,1.49,3.03,2.88,4.42,1.39,1.39,2.78,2.24,4.42,2.88,1.59.62,3.4,1.04,6.06,1.16,2.66.12,3.51.15,10.29.15s7.63-.03,10.29-.15c2.66-.12,4.47-.54,6.06-1.16,1.64-.64,3.03-1.49,4.42-2.88,1.39-1.39,2.24-2.78,2.88-4.42.62-1.59,1.04-3.4,1.16-6.06.12-2.66.15-3.51.15-10.29s-.03-7.63-.15-10.29c-.12-2.66-.54-4.47-1.16-6.06-.64-1.64-1.49-3.03-2.88-4.42-1.39-1.39-2.78-2.24-4.42-2.88-1.59-.62-3.4-1.04-6.06-1.16-2.66-.12-3.51-.15-10.29-.15h0Z"
					fill="#fff"
				/>
				<path
					d="m70.99,58.3c-7.08,0-12.81,5.74-12.81,12.81s5.74,12.81,12.81,12.81,12.81-5.74,12.81-12.81-5.74-12.81-12.81-12.81Zm0,21.13c-4.59,0-8.32-3.72-8.32-8.32s3.72-8.32,8.32-8.32,8.32,3.72,8.32,8.32-3.72,8.32-8.32,8.32Z"
					fill="#fff"
				/>
				<circle cx="84.31" cy="57.79" r="2.99" fill="#fff" />
			</Icon>
			<SpinText spinning={spinning}>
				<text
					style={styles.cls3}
					transform="translate(56.36 117.62) rotate(-155.16)"
				>
					<tspan x="0" y="0">
						F
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(45.68 113.13) rotate(-139.16)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(33.94 102.7) rotate(-123.57)"
				>
					<tspan x="0" y="0">
						L
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(27.77 93.57) rotate(-110.59)"
				>
					<tspan x="0" y="0">
						L
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(23.57 83.72) rotate(-95.1)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(21.46 68.59) rotate(-74.21)"
				>
					<tspan x="0" y="0">
						W
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(28.21 48.42) rotate(-58.87)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(29.88 43.97) rotate(-45.49)"
				>
					<tspan x="0" y="0">
						M
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(42.61 31.42) rotate(-27.82)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(53.92 25.8) rotate(-17.53)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(58.18 23.75) rotate(-5.34)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(73.77 22.2) rotate(12.59)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text style={styles.cls3} transform="translate(88.6 26) rotate(24.47)">
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text style={styles.cls3} transform="translate(93.11 28) rotate(30.82)">
					<tspan x="0" y="0">
						I
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(98.14 30.31) rotate(43.09)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(109.13 40.79) rotate(58.7)"
				>
					<tspan x="0" y="0">
						S
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(115.08 50.44) rotate(71.68)"
				>
					<tspan x="0" y="0">
						T
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(118.59 59.98) rotate(85.4)"
				>
					<tspan x="0" y="0">
						A
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(119.87 73.35) rotate(101.51)"
				>
					<tspan x="0" y="0">
						G
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(117.06 87.44) rotate(117.97)"
				>
					<tspan x="0" y="0">
						R
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(110.83 99.44) rotate(133.95)"
				>
					<tspan x="0" y="0">
						A
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(101.78 109.55) rotate(152.28)"
				>
					<tspan x="0" y="0">
						M
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(85.49 117.31) rotate(165.71)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
			</SpinText>
		</SvgIcon>
	);
};

export default InstagramIcon;
