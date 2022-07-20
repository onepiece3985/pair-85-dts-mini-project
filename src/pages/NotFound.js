import React from "react";
import { NavLink, Link } from "react-router-dom";

import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";

function NotFound(props) {
	return (
		<div>
			<Header />

			<section class="page-header">
				<div class="particles-snow" id="header-snow"></div>

				<img
					src="assets/images/shapes/page-header-shape-1-1.png"
					class="page-header__bg-shape-1"
					alt=""
				/>
				<img
					src="assets/images/shapes/page-header-shape-1-2.png"
					class="page-header__bg-shape-2"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-1.png"
					class="page-header__bg-shape-3"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-3.png"
					class="page-header__bg-shape-4"
					alt=""
				/>
				<div class="container text-center">
					<h2>Error Page</h2>
					<ul class="list-unstyled thm-breadcrumb">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<span>Error 404</span>
						</li>
					</ul>
				</div>
			</section>

			<section class="error-404">
				<img
					src="assets/images/shapes/bg-shape-1-1.png"
					class="error-404__bg-shape-1"
					alt=""
				/>
				<img
					src="assets/images/shapes/bg-shape-1-2.png"
					class="error-404__bg-shape-2"
					alt=""
				/>
				<img
					src="assets/images/shapes/bg-shape-1-3.png"
					class="error-404__bg-shape-3"
					alt=""
				/>

				<div class="error-404__bubble-1"></div>
				<div class="error-404__bubble-2"></div>
				<div class="error-404__bubble-3"></div>
				<div class="error-404__bubble-4"></div>
				<div class="error-404__bubble-5"></div>
				<div class="error-404__bubble-6"></div>
				<div class="error-404__bubble-7"></div>
				<div class="error-404__bubble-8"></div>
				<div class="container text-center">
					<h3>404</h3>
					<h4>Oops, This Page Not Be Found !</h4>

					<NavLink to="/" className="thm-btn error-404__btn">
						Take Me Home
					</NavLink>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default NotFound;
