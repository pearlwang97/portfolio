import React from "react";

import IntroductionSection from "./IntroductionSection/IntroductionSeaction";
import FeatureWorksSection from "./FeatureWorkSection/FeatureWorkSection";
import ThreeDCarouselSection from "./ThreeDCarouselSection/ThreeDCarouselSection";
const HomePage = () => {
    return (
        <div>
            <IntroductionSection />
            <FeatureWorksSection />
            <ThreeDCarouselSection />
        </div>
    );
}

export default HomePage;