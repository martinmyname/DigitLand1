import HomePage from "../Home/HomePage";
import Auth from "../Auth/Auth";
import Register from "../Auth/Register";
import NewReg from "../Auth/NewReg";
import Contact from "../shared/ContactPage";

export default [
	{
		path: "/",
		component: HomePage,
		exact: true,
	},
	{
		path: "/auth",
		component: Auth,
	},
	{
		path: "/register",
		component: Register,
	},
	{
		path: "/newreg",
		component: NewReg,
	},
	{
		path: "/contact",
		component: Contact,
	},
];
