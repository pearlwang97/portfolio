import react from "react";
import { Grid } from "@mui/material";
import Divider from "../../../Divider/Divider";
import "./SkillSection.css";

const SkillSection = () => {
    return (
        <Grid
            container
            className="skillSection"
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fefcf3",
                color: "#250d00",
                paddingTop: "100px",
                justifyContent: "center",
            }}
        >
            <Grid
                item
                sx={{
                    width: "80%",
                    height: "100%",
                    textAlign: "left",
                }}
            >
                <Divider width={"25%"} />
                <h2>Skill</h2>
                <Grid
                    item
                    container
                    sx={{
                        width: "100%",
                        justifyContent: "start",
                        gap: "30px",
                        alignItems: "center",
                    }}
                >
						<img src="/images/figma-logo.svg" alt="Figma" />
						<img src="/images/id-logo.svg" alt="InDesign" />
						<img src="/images/ai-logo.svg" alt="Illustrator" />
						<img src="/images/ps-logo.svg" alt="Photoshop" />
						<img src="/images/pr-logo.svg" alt="Premierepro" />
						<img src="/images/ae-logo.svg" alt="Aftereffects" />
						<img src="/images/dn-logo.svg" alt="Dimention" />
						<img src="/images/ar-logo.svg" alt="AR" />
						<img src="/images/css-logo.svg" alt="CSS" />
						<img src="/images/html-logo.svg" alt="HTML" />
						<img src="/images/js-logo.svg" alt="Javascript" />
						<img src="/images/wordpress-logo.svg" alt="Wordpress" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SkillSection;