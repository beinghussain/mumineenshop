import React from "react";
import { Link } from "react-router-dom";

export default () => (
	<div className="top-notification-wrapper">
		<div className="top-notification">
			<Link to="/login" className="top-notification__text">
				Guaranteed lowest prices or your money back!
			</Link>
		</div>
	</div>
);
