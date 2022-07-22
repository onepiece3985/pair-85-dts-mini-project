import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";
import CardProductionCompany from "../components/containers/CardProductionCompany";

function DetailMovie(props) {
	let params = useParams();

	const [movie, setMovie] = useState({});
	const [companies, setCompanies] = useState([]);

	const getMovie = () => {
		const API =
			`https://api.themoviedb.org/3/movie/` +
			params?.movieId +
			`?api_key=a3721e7832aa7ef094eeed72a9a77a0d`;
		axios.get(API).then((response) => {
			setMovie(response.data);
			setCompanies(response.data.production_companies);
			console.log(companies);
			console.log(response);
		});
	};

	useEffect(() => {
		return () => {
			getMovie();
		};
	}, []);

	return (
		<div>
			<Header />
			<section class="page-header">
				<div class="particles-snow" id="header-snow"></div>

				<img
					src="/assets/images/shapes/page-header-shape-1-1.png"
					class="page-header__bg-shape-1"
					alt=""
				/>
				<img
					src="/assets/images/shapes/page-header-shape-1-2.png"
					class="page-header__bg-shape-2"
					alt=""
				/>
				<img
					src="/assets/images/shapes/footer-shape-1-1.png"
					class="page-header__bg-shape-3"
					alt=""
				/>
				<img
					src="/assets/images/shapes/footer-shape-1-3.png"
					class="page-header__bg-shape-4"
					alt=""
				/>
				<div class="container text-center">
					<h2>{movie.title}</h2>
					<ul class="list-unstyled thm-breadcrumb">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<span>Detail Movie</span>
						</li>
					</ul>
				</div>
			</section>

			<section class="service-two" style={{ paddingTop: "50px" }}>
				<div class="error-404__bubble-1"></div>
				<div class="error-404__bubble-2"></div>
				<div class="error-404__bubble-3"></div>
				<div class="error-404__bubble-4"></div>
				<div class="error-404__bubble-5"></div>
				<div class="error-404__bubble-6"></div>
				<div class="error-404__bubble-7"></div>
				<div class="error-404__bubble-8"></div>

				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="my-auto" style={{ marginTop: "10px" }}>
								<div class="service-two__main ">
									<div class="block-title text-left">
										<p>
											<span>About Movie</span>
										</p>
										<h3>{movie.title}</h3>
										<h5>{movie.tagline}.</h5>
										<div class="service-details__image">
											<img
												src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
												alt={movie.title}
											/>
										</div>
									</div>
									<p>{movie.overview}</p>
									<ul class="service-details__list list-unstyled">
										<li>
											<i class="fa fa-clock"></i>
											{movie.runtime} minutes
										</li>
										<li>
											<i class="fa fa-star"></i>
											{movie.vote_average} from{" "}
											{movie.vote_count} reviews
										</li>
										<li>
											<i class="fa fa-check-circle"></i>
											{movie.status} -{" "}
											{movie.release_date}
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="service-two__box-wrap">
								<div class="row">
									<div class="col-md-12">
										<div
											class="service-two__box  wow flipInY"
											data-wow-delay="0ms"
											data-wow-duration="1500ms"
										>
											<div class="service-two__box-icon">
												<div class="service-two__box-circle"></div>

												<img
													src="/assets/images/shapes/service-2-i-1.png"
													alt=""
												/>
											</div>
											<h3>
												<a href="javascript:void(0);">
													{movie.popularity}
												</a>
											</h3>
											<p>Popularity.</p>
										</div>

										<div
											class="sidebar__single sidebar__post"
											style={{
												boxShadow:
													"0px 30px 50px 0px rgb(25 71 174 / 10%)",
												borderRadius: "10px",
												backgroundColor: "#fff",
												paddingLeft: "20px",
												paddingRight: "20px",
												marginTop: "40px",
												paddingTop: "10px",
												paddingBottom: "15px",
											}}
										>
											<h4 class="sidebar__title">
												Production Companies
											</h4>
											<div class="sidebar__post-wrap">
												{companies.map((company) => (
													<CardProductionCompany
														data={company}
													/>
												))}
											</div>
										</div>

										<div class="mt-5 sidebar__single sidebar__contact">
											<h3 class="sidebar__title">
												Contact
											</h3>
											<ul class="list-unstyled sidebar__contact-list">
												<li>
													<i class="fa fa-map-marker-alt"></i>
													{
														// movie
														// 	.production_countries[0]
														// 	.name
													}
												</li>
												<li>
													<i class="fa fa-link"></i>
													<a
														href={movie.homepage}
														target="_blank"
													>
														Homepage
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				class="cta-one cta-one__about-one"
				style={{
					backgroundImage: `url(/assets/images/shapes/cta-bg-2-1.png)`,
				}}
			>
				<div class="particles-snow" id="cta-one-snow"></div>

				<img
					src="/assets/images/shapes/footer-shape-1-1.png"
					class="cta-one__bg-shape-1"
					alt=""
				/>
				<img
					src="/assets/images/shapes/footer-shape-1-2.png"
					class="cta-one__bg-shape-2"
					alt=""
				/>
				<img
					src="/assets/images/shapes/footer-shape-1-3.png"
					class="cta-one__bg-shape-3"
					alt=""
				/>
				<img
					src="/assets/images/shapes/footer-shape-1-4.png"
					class="cta-one__bg-shape-4"
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

				<div class="container">
					<h3>
						You Want to Showcase Your Website in <br />{" "}
						<span>Top Join With Us</span>
					</h3>
					<a href="javascript:void(0);" class="thm-btn cta-one__btn">
						<span>Join Us Now</span>
					</a>
				</div>
			</section>

			<section class="video-one">
				<div class="container">
					<div
						class="video-one__box text-center wow fadeInUp"
						data-wow-duration="1500ms"
						style={{
							backgroundImage: `url(/assets/images/resources/video-1-1.jpg)`,
						}}
					>
						<a href="javascript:void(0);" class="video-popup">
							<i class="fal fa-play-circle"></i>
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default DetailMovie;
