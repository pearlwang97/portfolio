import React from 'react';

import { AnimationContext } from './AnimationContext';

const AnimationContextProvider = ({ children }) => {
    const [animationTriggered, setAnimationTriggered] = React.useState(false);

    return (
        <AnimationContext.Provider value={{ animationTriggered, setAnimationTriggered }}>
            {children}
        </AnimationContext.Provider>
    );
};

export default AnimationContextProvider;