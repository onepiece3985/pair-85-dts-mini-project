import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				{/* <Route path="/profile/about" element={<About />} /> */}
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
