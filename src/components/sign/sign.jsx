import "../login/login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
// import background from "../video/background7.mp4";
// import background2 from "../video/background2.mp4";
// import background3 from "../video/background3.mp4";
// import background4 from "../video/background4.mp4";
// import background5 from "../video/background5.mp4";
// import background6 from "../video/background6.mp4";
// import background7 from "../video/background7.mp4";

export function Sign() {
	const { loginUser, registerUser } = useContext(AuthContext);
	const [muted, setMuted] = useState(true);

	const handleMuted = (isMuted) => {
		setMuted(isMuted);
	};

	// const backgrounds = [
	// 	background,
	// 	background2,
	// 	background3,
	// 	background4,
	// 	background5,
	// 	background6,
	// 	background7,
	// ];
	// const randomIndex = Math.floor(Math.random() * backgrounds.length);

	return (
		<>
			{/* <img
				src={muted ? "../mute.png" : "../unmute.png"}
				alt=""
				style={{
					transform: "translate(-50%, -50%)",
					background: "transparent",
					boxSizing: "border-box",
					bordeRadius: "10px",
					width: "30px",
					position: "absolute",
					top: "100px",
					right: "30px",
					cursor: "pointer",
					zIndex: "500",
				}}
				onClick={() => {
					handleMuted(!muted);
				}}
			/>
			{muted ? (
				<video
					className="backgroundVideo"
					src={background7}
					muted
					autoPlay
					loop
					type="video/mp4"
					style={{
						opacity: "0.9",
					}}
				></video>
			) : (
				<video
					className="backgroundVideo"
					src={background7}
					autoPlay
					loop
					type="video/mp4"
					style={{
						opacity: "0.9",
					}}
				></video>
			)} */}

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
				<h2>Sign Up</h2>
				<form onSubmit={registerUser}>
					<div className="user-box">
						<input type="text" name="username" required="" />
						<label htmlFor="username">Username</label>
					</div>
					<div className="user-box">
						<input type="email" name="email" required="" />
						<label>Email</label>
					</div>
					<div className="user-box">
						<input type="password" name="password" required="" />
						<label htmlFor="password">Password</label>
					</div>
					<div className="user-box">
						<input type="password" name="password1" required="" />
						<label htmlFor="password1">Сonfirm Password</label>
					</div>
					<input type="checkbox" hidden name="is_active" value={true} />
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
						Sign up
					</button>
				</form>
			</div>
		</>
	);
}
