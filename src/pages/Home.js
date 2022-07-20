import React from "react";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";

function Home(props) {
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
								<form action="#" class="banner-one__form">
									<div class="banner-one__form-box">
										<input
											type="text"
											placeholder="Cari film . . ."
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
								<span>Latest News</span>
							</p>
							<h3>
								Learn Some New info from <br />{" "}
								<span>Our Latest News.</span>
							</h3>
						</div>
					</div>
					<div className="row">
						<div class="col-lg-4 mb-5">
							<div class="blog-one__single">
								<div class="blog-one__image">
									<img
										src="assets/images/blog/blog-1-1.jpg"
										alt=""
									/>
									<a href="blog-details.html">
										<i class="fal fa-plus"></i>
									</a>
								</div>
								<div class="blog-one__content">
									<div class="blog-one__meta">
										<a href="blog-details.html">
											Sara dodly
										</a>
										<span>-</span>
										<a href="blog-details.html">
											Mar 15, 2020
										</a>
									</div>
									<h3>
										<a href="blog-details.html">
											Additional Services that will Grow
											Your...
										</a>
									</h3>
									<a
										href="blog-details.html"
										class="thm-btn blog-one__btn"
									>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-5">
							<div class="blog-one__single">
								<div class="blog-one__image">
									<img
										src="assets/images/blog/blog-1-1.jpg"
										alt=""
									/>
									<a href="blog-details.html">
										<i class="fal fa-plus"></i>
									</a>
								</div>
								<div class="blog-one__content">
									<div class="blog-one__meta">
										<a href="blog-details.html">
											Sara dodly
										</a>
										<span>-</span>
										<a href="blog-details.html">
											Mar 15, 2020
										</a>
									</div>
									<h3>
										<a href="blog-details.html">
											Additional Services that will Grow
											Your...
										</a>
									</h3>
									<a
										href="blog-details.html"
										class="thm-btn blog-one__btn"
									>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-5">
							<div class="blog-one__single">
								<div class="blog-one__image">
									<img
										src="assets/images/blog/blog-1-1.jpg"
										alt=""
									/>
									<a href="blog-details.html">
										<i class="fal fa-plus"></i>
									</a>
								</div>
								<div class="blog-one__content">
									<div class="blog-one__meta">
										<a href="blog-details.html">
											Sara dodly
										</a>
										<span>-</span>
										<a href="blog-details.html">
											Mar 15, 2020
										</a>
									</div>
									<h3>
										<a href="blog-details.html">
											Additional Services that will Grow
											Your...
										</a>
									</h3>
									<a
										href="blog-details.html"
										class="thm-btn blog-one__btn"
									>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-5">
							<div class="blog-one__single">
								<div class="blog-one__image">
									<img
										src="assets/images/blog/blog-1-1.jpg"
										alt=""
									/>
									<a href="blog-details.html">
										<i class="fal fa-plus"></i>
									</a>
								</div>
								<div class="blog-one__content">
									<div class="blog-one__meta">
										<a href="blog-details.html">
											Sara dodly
										</a>
										<span>-</span>
										<a href="blog-details.html">
											Mar 15, 2020
										</a>
									</div>
									<h3>
										<a href="blog-details.html">
											Additional Services that will Grow
											Your...
										</a>
									</h3>
									<a
										href="blog-details.html"
										class="thm-btn blog-one__btn"
									>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Home;
