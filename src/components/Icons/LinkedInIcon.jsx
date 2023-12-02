import { React, useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { styled, keyframes } from "@mui/system";

const Icon = styled('g')({
	zIndex: 1000,
});

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinText = styled('g')(({ spinning }) => ({
	transition: "transform 2s",
	animation: spinning ? `${spin} 2s linear infinite` : "none",
	transformOrigin: "center",
	zIndex: 999,
}));

const LinkedInIcon = ({ width, height }) => {
	const [spinning, setSpinning] = useState(false);
	const styles = {
		cls3: {
			fontFamily: "Montserrat-Medium Montserrat sans-serif",
			fontSize: "17px",
			fonWeight: 500,
		},
		// Add styles for cls-3 if used for shapes, not text
	};
	return (
		<SvgIcon sx={{ width: width, height: height }} viewBox="0 0 130.17 128.96">
			<Icon
				onMouseEnter={() => setSpinning(true)}
				onMouseLeave={() => setSpinning(false)}
			>
				<circle cx="65.11" cy="65.09" r="39.63" fill="#010201" />
				<path
					d="m68.18,59.69c.65-.73,1.19-1.47,1.86-2.1,2.06-1.94,4.49-2.91,7.32-2.89,1.56.01,3.1.13,4.61.56,3.44.99,5.44,3.36,6.39,6.72.71,2.52.85,5.11.85,7.7,0,5.47-.02,10.95,0,16.42,0,.51-.14.65-.65.64-2.82-.02-5.64-.02-8.46,0-.5,0-.6-.15-.6-.62.02-5.21.02-10.42,0-15.63,0-1.31-.09-2.61-.45-3.88-.67-2.34-2.35-3.53-4.8-3.4-3.34.18-5.08,1.83-5.51,5.23-.1.81-.15,1.62-.15,2.44,0,5.07,0,10.13.01,15.2,0,.51-.12.65-.64.65-2.84-.03-5.68-.02-8.52,0-.46,0-.59-.12-.59-.58.01-10.03.01-20.06,0-30.09,0-.5.16-.61.63-.61,2.7.02,5.4.02,8.09,0,.5,0,.62.16.61.63-.03,1.2,0,2.4,0,3.6Z "
					fill="#fefefe"
				/>
				<path
					d="m52.73,71.15c0,4.96,0,9.92.01,14.89,0,.55-.13.72-.71.71-2.82-.03-5.64-.02-8.46,0-.45,0-.59-.11-.59-.58.01-10.05.01-20.09,0-30.14,0-.42.1-.56.54-.56,2.86.02,5.72.02,8.58,0,.55,0,.62.21.62.68-.01,5,0,10.01,0,15.01Z"
					fill="#fefefe"
				/>
				<path
					d="m53.51,45.51c0,3.12-2.53,5.65-5.63,5.65-3.07,0-5.62-2.54-5.63-5.61-.01-3.1,2.54-5.65,5.64-5.65,3.08,0,5.62,2.53,5.62,5.6Z"
					fill="#fefefe"
				/>
			</Icon>

			<SpinText spinning={spinning}>
				<text
					style={styles.cls3}
					transform="translate(55.05 112.75) rotate(-161.17)"
				>
					<tspan x="0" y="0">
						L
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(44.59 109.37) rotate(-147.29)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(34.12 102.64) rotate(-133.63)"
				>
					<tspan x="0" y="0">
						T
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(26.35 94.06) rotate(-124.17)"
				>
					<tspan x="0" y="0">
						’
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(23.73 90.82) rotate(-114.68)"
				>
					<tspan x="0" y="0">
						S
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(19.07 80.1) rotate(-104.87)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(17.4 75.66) rotate(-94.03)"
				>
					<tspan x="0" y="0">
						C
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(16.13 62.56) rotate(-77.36)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(19.45 47.29) rotate(-59.23)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(27.07 34.22) rotate(-41.54)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(38.45 24.23) rotate(-25.38)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(49.55 18.76) rotate(-10.1)"
				>
					<tspan x="0" y="0">
						C
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(62.69 16.47) rotate(3.92)"
				>
					<tspan x="0" y="0">
						T
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(73.67 17.43) rotate(13.27)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(78.39 17.86) rotate(25.47)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(92.57 24.51) rotate(43.51)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(103.36 35.4) rotate(55.27)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(106.34 39.17) rotate(64.71)"
				>
					<tspan x="0" y="0">
						L
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(110.93 49.32) rotate(74.66)"
				>
					<tspan x="0" y="0">
						I
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(112.95 54.45) rotate(86.91)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(113.77 69.59) rotate(103.58)"
				>
					<tspan x="0" y="0">
						K
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(110.67 82.6) rotate(118.86)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(105 93.6) rotate(135.13)"
				>
					<tspan x="0" y="0">
						D
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(93.63 104.25) rotate(147.51)"
				>
					<tspan x="0" y="0">
						I
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(89.33 107.71) rotate(159.8)"
				>
					<tspan x="0" y="0">
						N
					</tspan>
				</text>
			</SpinText>
		</SvgIcon>
	);
};

export default LinkedInIcon;
