import React from "react";
import NavigationBar from "./NavigationBar";
import Carousal from "./Carousal";
import Experience from "./Experience";
import Knowledge from "./Knowledge";
import Contact from "./Contact";
import Footer from "./Footer";

function Container() {
	return <>
		<NavigationBar />
		<div style={{ position: "absolute", top: "65px", width: "100%" }}>
			<Carousal />
			<Experience />
			<Knowledge />
			<Contact />
			<Footer />
		</div>
	</>;
}

export default Container;
