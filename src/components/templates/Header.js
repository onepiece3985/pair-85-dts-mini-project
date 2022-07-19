import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<div>
			<nav class="main-nav-one stricky">
				<div class="container">
					<div class="inner-container">
						<div class="logo-box">
							<a href="index.html">
								<img src="assets/images/logo-1-1.png" alt="" />
							</a>
							<a
								href="javascript:void(0);"
								class="side-menu__toggler"
							>
								<i class="fa fa-bars"></i>
							</a>
						</div>
						<div class="main-nav__main-navigation">
							<ul class="main-nav__navigation-box">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="request">Request Movie</Link>
								</li>
							</ul>
						</div>
						<div class="main-nav__right">
							<Link
								to="login"
								className="thm-btn main-nav-one__btn"
							>
								<span>Login</span>
							</Link>
							{/* <a
								href="contact.html"
								class="thm-btn main-nav-one__btn"
							>
								<span>Login</span>
							</a> */}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
