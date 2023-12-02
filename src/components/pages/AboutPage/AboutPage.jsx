import React from "react";
import SelfIntrocutionSection from "./SelfIntroductionSection/SelfIntroductionSection";
import SkillSection from "./SkillSection/SkillSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
// import IntroductionSection from "./IntroductionSection/IntroductionSeaction";
// import FeatureWorksSection from "./FeatureWorkSection/FeatureWorkSection";
const AboutPage = () => {
    return (
        <div>
            <SelfIntrocutionSection />
            <SkillSection />
            <WorkExperienceSection />
        </div>
    );
}

export default AboutPage;