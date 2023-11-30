import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const [toggle, toggleNav] = useState(false);
	return (
		<>
			<nav className="nav">
				<Link className="navItem" to="/">
					<img className="brandLogo" src="/images/logo.png" alt="Logo" />
				</Link>
				<ul className="menu">
					<li>
						<Link className="navItem" to="/uxdesign">
							UX/UI Design
						</Link>
					</li>
					<li>
						<Link className="navItem" to="/visualdesign">
							Visual Design
						</Link>
					</li>
					<li>
						<Link className="navItem" to="/about">
							Visual Design
						</Link>
					</li>
				</ul>
				<button className="navIcon" onClick={() => toggleNav(!toggle)}>
					<span className="line" open={toggle} />
					<span
						className={`line ${toggle ? "line-short" : "line-long"}`}
						open={toggle}
					/>
					<span className="line" open={toggle} />
				</button>
			</nav>
			<div className={`overlay ${toggle ? "overlay-open" : ""}`}>
				<ul className="overlay-menu" open={toggle}>
					<li className={toggle ? "li-visible" : "li-unvisible"}>
						<Link
							className="navItem"
							to="/uxdesign"
							onClick={() => {
								toggleNav(false);
							}}
						>
							UX/UI Design
						</Link>
					</li>
					<li className={toggle ? "li-visible" : "li-unvisible"}>
						<Link
							className="navItem"
							to="/visualdesign"
							onClick={() => {
								toggleNav(false);
							}}
						>
							Visual Design
						</Link>
					</li>
					<li className={toggle ? "li-visible" : "li-unvisible"}>
						<Link
							className="navItem"
							to="/about"
							onClick={() => {
								toggleNav(false);
							}}
						>
							Visual Design
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
