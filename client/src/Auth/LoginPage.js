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

const LoginPage = ({ onInputChange, onSubmit, handleAuthType }) => {
  return (
		<Container
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
        // width:"100%",
        padding:20,
        backgroundColor:"#C6D8FF",
        fontFamily:"fantasy"
        // backgroundImage:"url('https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg')"
			}}
		>
			<Row style={{ width: "50%" }}>
				<Col>
					<Form onSubmit={onSubmit}>
						<h3
							style={{
								textAlign: "center",
								
								fontFamily: "fantasy",
							}}
						>
							<span style={{fontSize:14}}>Welcome To</span> <span style={{color:"blue " , fontFamily:"fantasy" }} >Digiti-Land</span>
						</h3>
						<FormGroup>
							<Label for="emailField">Email</Label>
							<Input
								type="email"
								name="email"
								id="emailField"
								placeholder="example@domain.com"
								// value={emailField}
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
								// value={passwordField}
								onChange={onInputChange}
							/>
						</FormGroup>

						<FormGroup check>
							<Label check>
								<Input type="checkbox" checked onChange={onInputChange} />{" "}
								Remember me
							</Label>
						</FormGroup>

						<p >
							<Link to="/auth/register">Create Account</Link>
						</p>

						<Button style={{backgroundColor:"blue"}} type="submit">Login</Button>
					</Form>
				</Col>
			</Row>
			{/* <Row style={{width:"50%"}}>
        <img src="https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg" alt=""   />
      </Row> */}
		</Container>
	);
};

export default LoginPage;
