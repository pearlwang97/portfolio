import React from "react";
import { Box } from "@mui/system";
import "./GetInTouchSection.css";

const SocialMediaSection = () => {
	return (
		<Box
            className="getInTouchSection"
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fefcf3",
                color: "#250d00",
                paddingTop: "100px",

            }}
        >
			<h2>Get In Touch</h2>
			<p>
				Currently looking for new opportunities, please feel free to reach out.
			</p>
            <a href="" class="contactButton">Contact</a>
		</Box>
	);
};

export default SocialMediaSection;
