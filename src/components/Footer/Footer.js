import React from "react";
import { Box } from "@mui/system";
import Body1 from "components/shared/Body1/Body1";

const Footer = () => {
    return (
        <Box sx={{
            margin: 0,
            padding: "10px 0",
            textAlign: "center",

        }}>
            <Box><Body1>&#169; 2023 All Rights Reserved | Peirong Wang</Body1></Box>
        </Box>
    );
}

export default Footer;