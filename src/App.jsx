import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage/ProjectsPage";
import DominoAppRedesign from "./components/pages/DominoAppRedesign/DominoAppRedesign";
import BloomAppDesign from "./components/pages/BloomAppDesign/BloomAppDesign";
import RadioVectorArt from "./components/pages/RadioVectorArt/RadioVectorArt";
import BloomBoxLogoDesign from "./components/pages/BloomBoxLogoDesign/BloomBoxLogoDesign";
import ChineseZodiac from "./components/pages/ChineseZodiac/ChineseZodiac";
import CyberEraPoster from "./components/pages/CyberEraPoster/CyberEraPoster";
import FurnitureBannerDesign from "components/pages/FurnitureBannerDesign/FurnitureBannerDesign";
import ScrollTop from "components/shared/ScrollUp/ScrollUp";
import SummitPromotionalVideo from "components/pages/SummitPromotionalVideo/SummitPromotionalVideo";
import CupidLyricVideo from "components/pages/CupidLyricVideo/CupidLyric";

import "./App.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

function App() {
	const personSchema = {
		"@context": "http://schema.org",
		"@type": "Person",
		name: "Peirong Wang",
		url: "https://portfolio.peirongwang.com",
		image: "https://portfolio.peirongwang.com/logo.png", // Replace with your actual image URL
		jobTitle: "New Media and Web Development Student",
		alumniOf: "British Columbia Institute of Technology",
		sameAs: [
			"https://www.instagram.com/_w_ong/",
			"https://www.youtube.com/@pearlwang9426",
			"https://www.linkedin.com/in/peirong-wang-123a83208",
		],
		seeks: {
			"@type": "JobPosting",
			title: "Job Opportunities in Web Development and New Media", // Modify this based on the type of job you're seeking
		},
	};
	return (
		<Box
			sx={{
				backgroundColor: "#fefcf3",
			}}
		>
			<GlobalStyle />
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify(personSchema)}
				</script>
			</Helmet>
			<Header />
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
					path="/furniture-banner-deisgn"
					element={<FurnitureBannerDesign />}
				/>
				<Route
					path="/summit-promotional-video"
					element={<SummitPromotionalVideo />}
				/>
				<Route path="/cupid-lyric-video" element={<CupidLyricVideo />} />
			</Routes>
			<ScrollTop />
			<Footer />
		</Box>
	);
}

export default App;
