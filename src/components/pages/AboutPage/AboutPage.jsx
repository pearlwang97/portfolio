import React from "react";
import SelfIntroductionSection from "./SelfIntroductionSection/SelfIntroductionSection";
import SkillSection from "./SkillSection/SkillSection";
import FloatingGallery from "./FloatingGallery/FloatingGallery";
import EducationSection from "./EducationSection/EducationSection";

const AboutPage = () => {
    return (
        <div>
            <SelfIntroductionSection />
            <SkillSection />
            {/* <WorkExperienceSection /> */}
            <EducationSection />
            <FloatingGallery />
        </div>
    );
}

export default AboutPage;
