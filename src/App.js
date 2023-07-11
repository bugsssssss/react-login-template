import "./App.css";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Home } from "./pages/home";
import { Login } from "./components/login/login";
import { Sign } from "./components/sign/sign";
import Categories from "./pages/categories";
import News from "./pages/news";
import About from "./pages/about";

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/categories" element={<Categories />} />
						<Route path="/news" element={<News />} />
						<Route path="/about" element={<About />} />

						<Route path="/login" element={<Login />} />
						<Route path="/sign-up" element={<Sign />} />
						{/* Add more routes here */}
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
