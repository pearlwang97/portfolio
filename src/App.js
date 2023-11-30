import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMediaSection/SocialMediaSection";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/uxdesign" element={<div>UI/UX Design</div>} />
        <Route path="/visualdesign" element={<div>Visual Design</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <SocialMediaSection />
      <Footer />
		</div>
	);
}

export default App;
