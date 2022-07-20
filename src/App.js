import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="movies/:movieId" element={<DetailMovie />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
				{/* <Route path="/profile/about" element={<About />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
		// <div>
		// 	<Header />
		// 	<Banners />
		// 	<Footer />
		// </div>
	);
}

export default App;
