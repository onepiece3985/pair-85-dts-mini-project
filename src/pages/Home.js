import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/containers/Cards";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";

function Home(props) {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [search, setSearch] = useState("");

	const searchValueHandler = (evt) => {
		let searchParam = evt.target.value;
		setSearch(searchParam);
	};

	const searchMovies = (evt) => {
		evt.preventDefault();
		console.log(search);
	};

	const getMovies = () => {
		const API = `https://api.themoviedb.org/3/discover/movie?api_key=a3721e7832aa7ef094eeed72a9a77a0d&page=${page}`;
		axios.get(API).then((response) => {
			setMovies(response.data.results);
			setTotalPages(response.total_pages);
		});
	};

	useEffect(() => {
		return () => {
			getMovies();
		};
	}, []);

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
									Cari Film Favorit
									<br /> terbaru disini.
								</h3>
								<form
									class="banner-one__form"
									onSubmit={searchMovies}
								>
									<div class="banner-one__form-box">
										<input
											type="text"
											placeholder="Search movie title here . . ."
											onChange={searchValueHandler}
											style={{ maxWidth: "100%" }}
										/>
									</div>
									<button
										type="submit"
										class="thm-btn banner-one__btn"
									>
										<span>Search</span>
									</button>
								</form>
							</div>
						</div>
					</div>
					<div
						class="banner-one__images wow fadeInUp"
						data-wow-duration="1500ms"
					></div>
				</div>
			</section>

			<section class="blog-one blog-one__home-one">
				<div class="container">
					<div class="blog-one__top">
						<div class="block-title text-left">
							<p>
								<span>Movies</span>
							</p>
							<h3>
								Watch Your Favorite <br /> <span>Movies.</span>
							</h3>
						</div>
					</div>
					<div className="row">
						{movies.length > 0 ? (
							movies.map((movie) => <Cards data={movie} />)
						) : (
							<div className="col-lg-12">
								<div className="card">
									<div className="card-body">
										<h5>Data belum tersedia</h5>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Home;
