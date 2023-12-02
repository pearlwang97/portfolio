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
	};
	return (
		<SvgIcon sx={{ width: width, height: height }} viewBox="0 0 145.22 144.97">
			<Icon
				onMouseEnter={() => setSpinning(true)}
				onMouseLeave={() => setSpinning(false)}
			>
				<circle cx="72.66" cy="72.63" r="39.63" fill="#010201" />
				<path
					d="m97.97,59.91c-.61-2.27-2.4-4.06-4.67-4.67-4.12-1.1-20.64-1.1-20.64-1.1,0,0-16.52,0-20.64,1.1-2.27.61-4.06,2.4-4.67,4.67-1.1,4.12-1.1,12.72-1.1,12.72,0,0,0,8.6,1.1,12.72.61,2.27,2.4,4.06,4.67,4.67,4.12,1.1,20.64,1.1,20.64,1.10,0,0,16.52,0,20.64-1.1,2.27-.61,4.06-2.4,4.67-4.67,1.1-4.12,1.1-12.72,1.1-12.72,0,0,0-8.6-1.1-12.72Zm-30.6,20.64v-15.85l13.73,7.93-13.73,7.93Z"
					fill="#fff"
				/>
			</Icon>
			<SpinText spinning={spinning}>
				<text
					style={styles.cls3}
					transform="translate(68.41 120.87) rotate(-171.86)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(63.63 120.67) rotate(-160.93)"
				>
					<tspan x="0" y="0">
						P
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(51.11 116.3) rotate(-146.79)"
				>
					<tspan x="0" y="0">
						L
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(41.83 110.42) rotate(-133.2)"
				>
					<tspan x="0" y="0">
						Z
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(33.58 101.22) rotate(-123.08)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(30.67 97.38) rotate(-113.26)"
				>
					<tspan x="0" y="0">
						S
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(25.87 87.03) rotate(-98.03)"
				>
					<tspan x="0" y="0">
						U
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(23.74 72.4) rotate(-80.97)"
				>
					<tspan x="0" y="0">
						B
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(26.01 58.49) rotate(-65.85)"
				>
					<tspan x="0" y="0">
						S
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(30.52 47.9) rotate(-51.2)"
				>
					<tspan x="0" y="0">
						C
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(38.83 37.36) rotate(-35.41)"
				>
					<tspan x="0" y="0">
						R
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(50.17 29.72) rotate(-24.02)"
				>
					<tspan x="0" y="0">
						I
					</tspan>
				</text>
				<text style={styles.cls3} transform="translate(55 27) rotate(-12.31)">
					<tspan x="0" y="0">
						B
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(68.78 23.99) rotate(3.17)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(81.36 24.99) rotate(13.5)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(86.09 25.23) rotate(26.9)"
				>
					<tspan x="0" y="0">
						M
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(101.9 33.61) rotate(44.33)"
				>
					<tspan x="0" y="0">
						Y
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(110.42 42.33) rotate(54.35)"
				>
					<tspan x="0" y="0">
						{" "}
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(113.49 45.96) rotate(64.39)"
				>
					<tspan x="0" y="0">
						Y
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(118.82 56.05) rotate(80.03)"
				>
					<tspan x="0" y="0">
						O
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(121.61 71.47) rotate(97.78)"
				>
					<tspan x="0" y="0">
						U
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(119.53 85.84) rotate(112.63)"
				>
					<tspan x="0" y="0">
						T
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(115.82 95.75) rotate(127.35)"
				>
					<tspan x="0" y="0">
						U
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(106.95 107.51) rotate(144.22)"
				>
					<tspan x="0" y="0">
						B
					</tspan>
				</text>
				<text
					style={styles.cls3}
					transform="translate(95.52 115.75) rotate(159.9)"
				>
					<tspan x="0" y="0">
						E
					</tspan>
				</text>
			</SpinText>
		</SvgIcon>
	);
};

export default InstagramIcon;
