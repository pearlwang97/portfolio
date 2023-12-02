import { Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMediaSection/SocialMediaSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import DesignPage from "./components/pages/DesignPage/DesignPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/uxdesign" element={<DesignPage />} />
				<Route path="/visualdesign" element={<ProjectPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
			<GetInTouchSection />
			<SocialMediaSection />
			<Footer />
		</div>
	);
}

export default App;
