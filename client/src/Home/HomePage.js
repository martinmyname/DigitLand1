import React from "react";
import { Jumbotron } from "reactstrap";
import MyCarousel from "../shared/Carousel";
import "./HomePage.css";

const HomePage = () => {
  return (
		<div style={{marginLeft:10 , width:"100%" , justifyContent:"center"}}>
				<MyCarousel />
		</div>
	);
};

export default HomePage;
