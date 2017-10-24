import React, { Component } from "react";
import { Link } from "react-router-dom";

export default () => (
	<div class="top-notification-wrapper">
		<div class="top-notification">
			<Link to="/login" class="top-notification__text">
				Guaranteed lowest prices or your money back!
			</Link>
		</div>
	</div>
);
