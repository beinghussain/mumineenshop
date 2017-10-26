import React, { Component } from "react";
import "../fonts/IcoMoon.ttf";
import "../App.css";
import Header from "../Layout/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Home extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<h3 className="headerText">
						Something great <br /> Coming soon..
					</h3>
					<div className="centerBlock">
						<img src="./images/mumineenShop.png" />
						<span className="description">
							An online store for mumineen
						</span>
						<br />
						<span className="description">
							You can sell your products here...
						</span>
						<span className="contact">
							+9924330642 | hussainofficial53@gmail.com
						</span>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Home;
