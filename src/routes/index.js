import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import NotFound from "../Components/NotFound"

export default () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/login" component={Login} />
		</div>
	</BrowserRouter>
);
