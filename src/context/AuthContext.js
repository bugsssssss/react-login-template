import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	let [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);
	let [user, setUser] = useState(() =>
		localStorage.getItem("authTokens")
			? jwt_decode(localStorage.getItem("authTokens"))
			: null
	);
	let [userData, setUserData] = useState();

	const getUser = async () => {
		let response = await fetch(
			`http://127.0.0.1:8000/api/users-detail/?id=${user.user_id}`
		);
		if (response.status === 200) {
			const data = await response.json();
			setUserData(data);
		}
	};

	let [loading, setLoading] = useState(true);

	let history = useNavigate();

	let loginUser = async (e) => {
		e.preventDefault();
		// console.log("Form submitted");
		let response = await fetch("http://127.0.0.1:8000/api/token/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		});
		let data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			localStorage.setItem("authTokens", JSON.stringify(data));
			history("/");
		} else {
			alert("Username or password is incorrect!");
		}
	};

	useEffect(() => {
		getUser();
	}, [user]);

	let registerUser = async (e) => {
		e.preventDefault();
		if (e.target.password.value === e.target.password1.value) {
			console.log("equal");
		}
		// console.log("Form submitted");
		let response = await fetch("http://127.0.0.1:8000/api/users/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
				is_active: e.target.is_active.value,
			}),
		});
		console.log(response.status);
		if (response.status === 201) {
			history("/login");
		} else if (response.status === 400) {
			let error = await response.json();
			alert(error);
		}
	};

	let logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("authTokens");
		history("/login");
	};

	let updateToken = async () => {
		console.log("update token called");
		let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				refresh: authTokens.refresh,
			}),
		});
		let data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			localStorage.setItem("authTokens", JSON.stringify(data));
		} else {
			logoutUser();
		}
	};

	let contextData = {
		user: user,
		loginUser: loginUser,
		logoutUser: logoutUser,
		registerUser: registerUser,
		userData: userData,
	};

	useEffect(() => {
		let fourMinutes = 1000 * 60 * 4;
		let interval = setInterval(() => {
			if (authTokens) {
				updateToken();
			}
		}, fourMinutes);
		return () => clearInterval(interval);
	}, [authTokens, loading]);

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};
