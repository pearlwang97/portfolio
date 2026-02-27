import React from "react";
import SelfIntrocutionSection from "./SelfIntroductionSection/SelfIntroductionSection";
import SkillSection from "./SkillSection/SkillSection";
import FloatingGallery from "./FloatingGallery/FloatingGallery";
import EducationSection from "./EducationSection/EducationSection";

const AboutPage = () => {
    return (
        <div>
            <SelfIntrocutionSection />
            <SkillSection />
            {/* <WorkExperienceSection /> */}
            <EducationSection />
            <FloatingGallery />
        </div>
    );
}

export default AboutPage;
