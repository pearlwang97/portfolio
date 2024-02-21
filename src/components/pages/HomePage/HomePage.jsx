import React from "react";

import IntroductionSection from "components/pages/HomePage/IntroductionSection/IntroductionSeaction";
import FeatureWorksSection from "components/pages/HomePage/FeatureWorkSection/FeatureWorkSection";

const HomePage = () => {
    return (
        <div>
            <IntroductionSection />
            <FeatureWorksSection />
        </div>
    );
}

export default HomePage;