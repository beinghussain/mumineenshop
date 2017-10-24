import React, { Component } from "react";
import "../App.css";
import NotificationBar from "../Layout/NotificationBar";
import Header from "../Layout/Header";

class Home extends Component {
	render() {
		return (
			<div>
				<NotificationBar />
				<Header />
			</div>
		);
	}
}

export default Home;
