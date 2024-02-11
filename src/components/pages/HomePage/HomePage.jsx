import React from "react";

import IntroductionSection from "./IntroductionSection/IntroductionSeaction";
import FeatureWorksSection from "./FeatureWorkSection/FeatureWorkSection";

const HomePage = () => {
    return (
        <div>
            <IntroductionSection />
            <FeatureWorksSection />
        </div>
    );
}

export default HomePage;