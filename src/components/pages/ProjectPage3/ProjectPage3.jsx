import React, { useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import OverviewSection from "./OverviewSection/OverviewSection";

const ProjectPage3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
    return (
        <div>
            <ProjectCarousel />
            <OverviewSection />
        </div>
    );
}

export default ProjectPage3;