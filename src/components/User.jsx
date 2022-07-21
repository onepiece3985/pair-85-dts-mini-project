// import axios from "axios";
import React, { useEffect, useState } from "react";
// import Cards from "../components/containers/Cards";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import { useNavigate, Link } from "react-router-dom";
import { auth, regEmailPass, logEmailPass } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LogOrRegForm=({logOrReg})=> {
    const navigate=useNavigate();
    const [user, isLoading, error]=useAuthState(auth);
    const [credential, setCredential]=useState({
        email: "", password:"",
    });
    const textEmailOnChange=(event)=>{
        setCredential({...credential, email:event.target.value});
    };
    const textPassOnChange=(event)=>{
        setCredential({...credential, password:event.target.value});
    };
    const loginHandler = () =>{
        logEmailPass(credential.email, credential.password);
    };
    const regisHandler = () =>{
        regEmailPass(credential.email, credential.password);
    };
    const masukOnClick = () => {
        if (logOrReg === "login"){
            loginHandler();
        } else{
            regisHandler();
        }
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
	// const searchMovies = (evt) => {
	// 	evt.preventDefault();
	// 	console.log(search);
	// };

	return (
		<div>
			<Header />
			<section class="banner-one banner-one__home-two">
				<div class="particles-snow" id="banner-one-snow"></div>

				<img
					src="assets/images/shapes/footer-shape-1-1.png"
					class="banner-one__home-two__bg-shape-1"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-2.png"
					class="banner-one__home-two__bg-shape-2"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-3.png"
					class="banner-one__home-two__bg-shape-3"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-4.png"
					class="banner-one__home-two__bg-shape-4"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-2.png"
					class="banner-one__home-two__bg-shape-5"
					alt=""
				/>
				<div class="container">
					<div class="row">
						<div class="col-xl-12">
							<div class="banner-one__content text-center">
								<h3>
									Masukkan email dan password
								</h3>
								<div
									class="banner-one__form"
								>
									<div class="banner-one__form-box">
										<input
											type="email"
											placeholder="Email"
                                            value={credential.email}
                                            onChange={textEmailOnChange}
											style={{ maxWidth: "100%" }}
										/>
                                        <input
											type="password"
											placeholder="Password Minimal 6 Digit"
                                            value={credential.password}
                                            onChange={textPassOnChange}
											style={{ maxWidth: "100%" }}
										/>
									</div>
									<button
										class="thm-btn banner-one__btn"
                                        onClick={masukOnClick}
									>
										<span>
                                            {logOrReg==="login" ? "Login" : "Daftar"}
                                        </span>
									</button>
								</div>
								<h4 style={{color:"#F8F8FF"}}>
									{logOrReg==="login" ? 
										(<Link to="/register">Ingin Daftar</Link>):(<Link to="/login">Ingin Masuk</Link>)
									}
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default LogOrRegForm;
