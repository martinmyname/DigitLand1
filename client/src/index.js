import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";


const container = document.getElementById("root");

const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);