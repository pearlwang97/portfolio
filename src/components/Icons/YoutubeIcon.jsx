import React from "react";
import SocialIconBase from "components/Icons/SocialIconBase";

const YoutubeIcon = ({ sx, fill, cutoutFill = "white" }) => {
	return (
		<SocialIconBase sx={sx}>
			<circle cx="24" cy="24" r="24" fill={fill} />
			<rect x="11.2" y="15.2" width="25.6" height="18.4" rx="4.2" fill={cutoutFill} />
			<path
				d="M21.6001 28.8V20.8L28.0001 24.8001L21.6001 28.8Z"
				fill={fill}
			/>
		</SocialIconBase>
	);
};

export default YoutubeIcon;
