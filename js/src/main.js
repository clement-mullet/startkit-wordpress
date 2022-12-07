/** @format */

import { generalHandler } from "./components/generalHandler";

document.addEventListener("readystatechange", (event) => {
	switch (document.readyState) {
		case "loading":
			break;
		case "interactive":
			break;
		case "complete":
			// ROUTE
			switch (location.pathname) {
				case "/":
					generalHandler.demoFunction();
					break;
				default:
					console.log("Route not found");
					break;
			}
			break;
	}
});
