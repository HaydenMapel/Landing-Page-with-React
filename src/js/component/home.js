import React from "react";

//include images into your bundle
import { Card } from "./card.js";
import { Jumbotron } from "./jumbotron.js";
import { NavBar } from "./navbar.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="row">
					<Jumbotron />
				</div>
				<div className="row">
					<Card name="John Johnson" />
					<Card name="Kyle Johnson" />
					<Card name="Rick Johnson" />
					<Card name="Tom Johnson" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
