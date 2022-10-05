import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const yaerTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
	return (
		<div style={{ overflow: "auto", overflowX: "hidden" }}>
			<div
				style={{
					display: "block",
					padding: "20px",
					height: "60px",
					width: "100%",
					overflow: "hidden",
					overflowX: "hidden",
				}}
			/>
			<div
				style={{
					fontFamily: "fantasy",
					backgroundColor: "#223843",
					borderTop: "1px solid #E7E7E7",
					textAlign: "center",
					padding: "20px",
					position: "fixed",
					left: "0",
					bottom: "0",
					height: "90px",
					width: "100%",
					overflow: "hidden",
					overflowX: "hidden",
					color: "whitesmoke",
				}}
			>
				<h style={{ marginBottom: 20 }}>
					All Rights Reserved &copy; {yaerTxt} martinz group
					<br />
					Digit Land Blockchain
					<br />
					Land Registry
				</h>
			</div>
		</div>
	);
};

export default Footer;
