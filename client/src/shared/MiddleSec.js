import React from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";

const MiddleSec = () => {
	return (
		<div>
			<Row>
				<Col style={{ marginTop: 20, marginBottom: 30 }} sm="6">
					<Card body>
						<CardTitle tag="h5">WHY CHOOSE US</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>more</Button>
					</Card>
				</Col>
				<Col style={{ marginTop: 20, marginBottom: 30 }} sm="6">
					<Card body>
						<CardTitle tag="h5">WHY TRUST US</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>more</Button>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MiddleSec;
