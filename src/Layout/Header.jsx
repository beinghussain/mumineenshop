import React, { Component } from "react";
import { AppBar } from "material-ui";

class Header extends Component {
	render() {
		return (
			<div>
				<div className="topMenu">
					<ul>
						<li>Register</li>
						<li>Register</li>
						<li>Register</li>
						<li>Register</li>
						<li>Register</li>
					</ul>
				</div>
				<AppBar />
			</div>
		);
	}
}

export default Header;
