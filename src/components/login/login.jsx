import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// import background from "../video/background.mp4";
// import background2 from "../video/background8.mp4";

export function Login() {
	const { loginUser } = useContext(AuthContext);
	const { user } = useContext(AuthContext);

	const [muted, setMuted] = useState(true);

	const handleMuted = (isMuted) => {
		setMuted(isMuted);
	};

	return (
		<>
			<div className="login-box">
				<Link to="/">
					<img
						style={{
							width: "24px",
							cursor: "pointer",
						}}
						src="../images/back.png"
						alt=""
					/>
				</Link>
				<h2>Login</h2>
				<form onSubmit={loginUser}>
					{/* <div className="user-box">
						<input type="email" name="" required="" />
						<label>Email</label>
					</div> */}
					<div className="user-box">
						<input type="text" name="username" required="" />
						<label htmlFor="username">Username</label>
					</div>
					<div className="user-box">
						<input type="password" name="password" required="" />
						<label htmlFor="password">Password</label>
					</div>
					<p
						style={{
							color: "#fff",
						}}
					>
						Don't have an account?{" "}
						<Link to="/sign-up" className="sign">
							Sign Up
						</Link>
					</p>
					<button
						type="submit"
						className="submit"
						href="#"
						style={{
							background: "none",
							border: "none",
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Login
					</button>
					{user && (
						<span
							style={{
								color: "#fff",
							}}
						>
							Hello {user?.username}!
						</span>
					)}
				</form>
			</div>
		</>
	);
}
