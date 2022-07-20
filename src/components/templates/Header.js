import React, { useEffect, useState }  from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, outApps } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header(props) {
	const navigate=useNavigate();
	const [user, isLoading, error]=useAuthState(auth);
	const fungsiLogout= async () =>{
		await outApps();
		navigate("/login");
	};
	useEffect(
        () =>{
            if(isLoading){
                return;
            }
            if(user){
                navigate("/");
            }
        },
        [user, isLoading, navigate]
    )
	return (
		<div>
			<nav class="main-nav-one stricky">
				<div class="container">
					<div class="inner-container">
						<div class="logo-box">
							<a href="#">
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
								<li>
									<Link to="#">Halo, 
										{user ? user.email :"Tamu"}
									</Link>
								</li>
							</ul>
						</div>
						<div class="main-nav__right">
							{user ? (
								<Link
									to="/"
									className="thm-btn main-nav-one__btn"
									onClick={fungsiLogout}
								>
									<span>Logout</span>
								</Link>
							):(
								<Link
									to="/login"
									className="thm-btn main-nav-one__btn"
								>
									<span>Login</span>
								</Link>
							)};							
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
