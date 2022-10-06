import React from "react";
import { Jumbotron } from "reactstrap";
import MyCarousel from "../shared/Carousel";
import Footer from "../shared/Footer";
import MiddleSec from "../shared/MiddleSec";
import Section from '../shared/Section'
import "./HomePage.css";

const HomePage = () => {
	return (
		<div style={{ marginLeft: 10, width: "100%", justifyContent: "center" }}>
			<MyCarousel />
			<MiddleSec/>
			<Section />
			<Footer />
		</div>
	);
};

export default HomePage;
