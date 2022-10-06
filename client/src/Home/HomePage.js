import React from "react";
import { Jumbotron } from "reactstrap";
import MyCarousel from "../shared/Carousel";
import Footer from "../shared/Footer";
import MiddleSec from "../shared/MiddleSec";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div style={{ marginLeft: 10, width: "100%", justifyContent: "center" }}>
			<MyCarousel />
			<MiddleSec/>
			<Footer />
		</div>
	);
};

export default HomePage;
