import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignupPage = ({
  onInputChange,
  onSubmit,
  handleAuthType,
  registerAs,
  accountAddressField
}) => {
  return (
		<Container
			style={{
				position: "absoliute",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// width:"100%",
				padding: 20,
				backgroundColor: "#C6D8FF",
				fontFamily: "fantasy",
				// backgroundImage:"url('https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg')"
			}}
		>
			<Row>
				<Col>
					<Form onSubmit={onSubmit}>
						<h3 style={{ textAlign: "center" }}>
							{" "}
							<span style={{ fontSize: 14 }}>Register With</span>{" "}
							<span style={{ color: "blue" }}>Digiti Land</span>{" "}
						</h3>
						<FormGroup>
							<Label for="emailField" >
								Email
							</Label>
							<Input
								type="email"
								name="email"
								id="emailField"
								placeholder="example@domain.com"
								onChange={onInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="passwordField">Password</Label>
							<Input
								type="password"
								name="password"
								id="passwordField"
								placeholder="xxxxxxxx"
								onChange={onInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="confirmPasswordField">Confirm Password</Label>
							<Input
								type="password"
								name="confirmPassword"
								id="confirmPasswordField"
								placeholder="xxxxxxxx"
								onChange={onInputChange}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="accountAddressField">Ethereum address:</Label>
							<Input
								type="text"
								name="accountAddressField"
								id="accountAddressField"
								placeholder="0x12782738232345456567"
								onChange={onInputChange}
								value={accountAddressField}
							/>
						</FormGroup>

						<FormGroup tag="fieldset" value={registerAs}>
							<legend>Register as:</legend>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="registerAs"
										value="CONSUMER"
										onChange={handleAuthType("registerAs")}
									/>
									Consumer
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="registerAs"
										value="ESCROW"
										onChange={handleAuthType("registerAs")}
									/>
									Escrow
								</Label>
							</FormGroup>
						</FormGroup>

						<FormGroup check>
							<Label check>
								<Input type="checkbox" checked onChange={onInputChange} />{" "}
								Remember me
							</Label>
						</FormGroup>

						<p>
							<Link to="/auth/login">Already registered? Login</Link>
						</p>

						<Button style={{ backgroundColor: "blue" }} type="submit">
							Signup
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default SignupPage;
