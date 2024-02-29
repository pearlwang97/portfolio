import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMediaSection/SocialMediaSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import UxDesignPage from "./components/pages/UxDesignPage/UxDesignPage";
import VisualDesignPage from "./components/pages/VIsualDesignPage/VisualDesignPage";
import ProjectPage1 from "./components/pages/ProjectPage1/ProjectPage1";
import ProjectPage2 from "./components/pages/ProjectPage2/ProjectPage2";
import ProjectPage3 from "./components/pages/ProjectPage3/ProjectPage3";
import ProjectPage4 from "./components/pages/ProjectPage4/ProjectPage4";
import ProjectPage5 from "./components/pages/ProjectPage5/ProjectPage5";
import ProjectPage6 from "./components/pages/ProjectPage6/ProjectPage6";
import "./App.css";
import AnimationContext from "./components/Context/AnimationContextProvider";
import { createGlobalStyle } from 'styled-components';

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
		<Box sx={{
			backgroundColor: "#fefcf3",
		}}>
			<GlobalStyle />
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify(personSchema)}
				</script>
			</Helmet>
			<Header />
			<AnimationContext>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/uxdesign" element={<UxDesignPage />} />
					<Route path="/visualdesign" element={<VisualDesignPage />} />
					<Route path="/project-1" element={<ProjectPage1 />} />
					<Route path="/project-2" element={<ProjectPage2 />} />
					<Route path="/project-3" element={<ProjectPage3 />} />
					<Route path="/project-4" element={<ProjectPage4 />} />
					<Route path="/project-5" element={<ProjectPage5 />} />
					<Route path="/project-6" element={<ProjectPage6 />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
				{/* <GetInTouchSection /> */}
				{/* <SocialMediaSection /> */}
				<Footer />
			</AnimationContext>
		</Box>
	);
}

export default App;
