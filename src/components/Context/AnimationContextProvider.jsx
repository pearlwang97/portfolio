import React from "react";

import { AnimationContext } from "./AnimationContext";

const AnimationContextProvider = ({ children }) => {
	const [animationTriggered, setAnimationTriggered] = React.useState(false);
	const [animation1Triggered, setAnimation1Triggered] =
		React.useState(false);
    const [animation2Triggered, setAnimation2Triggered] =
        React.useState(false);
    const [animation3Triggered, setAnimation3Triggered] =
        React.useState(false);
    const [animation4Triggered, setAnimation4Triggered] =
        React.useState(false);

	return (
		<AnimationContext.Provider
			value={{
				animationTriggered,
				setAnimationTriggered,
				animation1Triggered,
				setAnimation1Triggered,
                animation2Triggered,
                setAnimation2Triggered,
                animation3Triggered,
                setAnimation3Triggered,
                animation4Triggered,
                setAnimation4Triggered,
			}}
		>
			{children}
		</AnimationContext.Provider>
	);
};

export default AnimationContextProvider;
