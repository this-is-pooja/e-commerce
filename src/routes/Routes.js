import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth,Cart, Category, Home, Item, Checkout, Result, Payment } from "../pages";
import CurrentUser from "../helpers/current-user";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (CurrentUser.loggedin()) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/auth" />;
				}
			}}
		/>
	);
};

const routes = (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/auth" component={Auth} />
		<Route path="/categories/:name" component={Category} />
		<Route path="/item/:Name?/:img?/:des?/:name?/:price?/:instock?" component={Item} />
		<Route path="/result/:value?" component={Result}/>
		<Route path="/payment" component={Payment}/>
		<PrivateRoute path="/cart" component={Cart} />
		<PrivateRoute path="/checkout" component={Checkout} />
	</Switch>
);

export default routes;
