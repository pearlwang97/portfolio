import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTop from "components/shared/ScrollUp/ScrollUp";
import ScrollToTopOnRouteChange from "components/shared/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";
import { profile, schemaSocialLinks } from "components/constants/profile";
import { COLORS, RADIUS } from "components/constants/styleTokens";

import "./App.css";
import { createGlobalStyle } from "styled-components";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage/AboutPage"));
const ProjectsPage = lazy(() =>
	import("./components/pages/ProjectsPage/ProjectsPage")
);
const DominoAppRedesign = lazy(() =>
	import("./components/pages/DominoAppRedesign/DominoAppRedesign")
);
const BloomAppDesign = lazy(() =>
	import("./components/pages/BloomAppDesign/BloomAppDesign")
);
const RadioVectorArt = lazy(() =>
	import("./components/pages/RadioVectorArt/RadioVectorArt")
);
const BloomBoxLogoDesign = lazy(() =>
	import("./components/pages/BloomBoxLogoDesign/BloomBoxLogoDesign")
);
const ChineseZodiac = lazy(() =>
	import("./components/pages/ChineseZodiac/ChineseZodiac")
);
const CyberEraPoster = lazy(() =>
	import("./components/pages/CyberEraPoster/CyberEraPoster")
);
const FurnitureBannerDesign = lazy(() =>
	import("components/pages/FurnitureBannerDesign/FurnitureBannerDesign")
);
const SummitPromotionalVideo = lazy(() =>
	import("components/pages/SummitPromotionalVideo/SummitPromotionalVideo")
);
const CupidLyricVideo = lazy(() =>
	import("components/pages/CupidLyricVideo/CupidLyric")
);

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${COLORS.scrollbarTrack};
    }

    ::-webkit-scrollbar-thumb {
        background: ${COLORS.scrollbarThumb};
        border-radius: ${RADIUS.scrollbar};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${COLORS.scrollbarThumbHover};
    }
`;

function App() {
	const personSchema = {
		"@context": "http://schema.org",
		"@type": "Person",
		name: profile.name,
		url: profile.url,
		image: profile.image,
		jobTitle: profile.jobTitle,
		alumniOf: profile.alumniOf,
		sameAs: schemaSocialLinks,
		seeks: {
			"@type": "JobPosting",
			title: "Job Opportunities in Web Development and New Media", // Modify this based on the type of job you're seeking
		},
	};
	return (
			<Box
				sx={{
					backgroundColor: COLORS.background,
				}}
			>
			<GlobalStyle />
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify(personSchema)}
				</script>
			</Helmet>
			<ScrollToTopOnRouteChange />
			<Header />
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/domino-app-redesign" element={<DominoAppRedesign />} />
					<Route path="/2d-radio-vector-art" element={<RadioVectorArt />} />
					<Route path="/bloom-app-design" element={<BloomAppDesign />} />
					<Route path="/bloom-box-logo" element={<BloomBoxLogoDesign />} />
					<Route path="/chinese-zodiac" element={<ChineseZodiac />} />
					<Route path="/cyber-era-poster" element={<CyberEraPoster />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/works" element={<ProjectsPage />} />
					<Route
						path="/furniture-banner-design"
						element={<FurnitureBannerDesign />}
					/>
					<Route
						path="/furniture-banner-deisgn"
						element={<Navigate replace to="/furniture-banner-design" />}
					/>
					<Route
						path="/summit-promotional-video"
						element={<SummitPromotionalVideo />}
					/>
					<Route path="/cupid-lyric-video" element={<CupidLyricVideo />} />
				</Routes>
			</Suspense>
			<ScrollTop />
			<Footer />
		</Box>
	);
}

export default App;
