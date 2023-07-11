// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// export const PrivateRoute = ({ children, ...rest }) => {
// 	console.log("Private Route Works");

// 	const isAuthenticated = true; // Replace with your authentication check

// 	return isAuthenticated ? (
// 		<Route {...rest}>{children}</Route>
// 	) : (
// 		<Navigate to="/login" replace />
// 	);
// };

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = () => {
	let { user } = useContext(AuthContext);

	const auth = false; // determine if authorized, from context or however you're doing it
	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page

	if (user.is_admin) {
		return user ? <Outlet /> : <Navigate to="/login" />;
	} else {
		return (
			<h2
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					color: "red",
				}}
			>
				You don't have an access to reach this page
			</h2>
		);
	}
};
