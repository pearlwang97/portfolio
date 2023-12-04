import { Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
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
import "./App.css";

function App() {
	const personSchema = {
		"@context": "http://schema.org",
		"@type": "Person",
		"name": "Your Name",
		"url": "https://your-portfolio-link.com",
		"image": "https://your-portfolio-link.com/images/selfie.png",
		"jobTitle": "Your Job Title",
		"worksFor": {
		  "@type": "Organization",
		  "name": "Company or Organization You Work For"
		},
		"sameAs": [
		  "https://www.linkedin.com/in/yourprofile",
		  "https://www.twitter.com/yourprofile",
		]
	  };
	return (
		<div className="App">
			<Helmet>
				<script type="application/ld+json">{JSON.stringify(personSchema)}</script>
			</Helmet>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/uxdesign" element={<UxDesignPage />} />
				<Route path="/visualdesign" element={<VisualDesignPage />} />
				<Route path="/project-1" element={<ProjectPage1 />} />
				<Route path="/project-2" element={<ProjectPage2 />} />
				<Route path="/project-3" element={<ProjectPage3 />} />
				<Route path="/project-4" element={<ProjectPage4 />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
			<GetInTouchSection />
			<SocialMediaSection />
			<Footer />
		</div>
	);
}

export default App;
