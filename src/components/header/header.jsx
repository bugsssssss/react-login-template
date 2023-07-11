import styles from "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export { Header };

function Header() {
	const { user } = useContext(AuthContext);
	return (
		<header className="header">
			<div className="header__logo">
				<Link to="/">Logo</Link>
			</div>
			<div className="header__search">
				<input type="text" placeholder="Search" />
			</div>
			<nav className="header__main__nav">
				<ul className="header__main__nav__list">
					<li className="header__main__nav__list__item">
						<Link to="/news">News</Link>
					</li>
					<li className="header__main__nav__list__item">
						<Link to="/categories">Telegram</Link>
					</li>
					<li className="header__main__nav__list__item">
						<Link to="/about">About us</Link>
					</li>

					{/* <li className="header__main__nav__list__item">
						<Link to="/forum">Forum</Link>
					</li>
				
					<li className="header__main__nav__list__item">
						<Link to="/contact">Contact us</Link>
					</li> */}
					{/* {user.is_admin == true ? (
						<Link to="/about">Admin panel</Link>
					) : (
						<span></span>
					)} */}
					<li className="header__main__nav__list__item">
						<Link to="/search">
							<img
								src="./search(2).png"
								alt=""
								style={{
									width: "28px",
								}}
							/>
						</Link>
					</li>
				</ul>
			</nav>
			{user ? (
				<div
					className="header__main__user not"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
					}}
				>
					{user.is_admin == true ? (
						<>
							<Link to="/user">
								<div>{user?.username}</div>
							</Link>
						</>
					) : (
						<Link to="/user">
							<div>{user?.username}</div>
						</Link>
					)}
				</div>
			) : (
				<div
					className="header__main__user not"
					style={{
						display: "flex",
						gap: "14px",
					}}
				>
					<Link to="/login">Log in</Link>
					<Link to="/sign-up">Sign up</Link>
				</div>
			)}
		</header>
	);
}
