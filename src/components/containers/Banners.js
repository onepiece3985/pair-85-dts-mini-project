import React from "react";

function Banners(props) {
	return (
		<div>
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
									Boost Your Ranking <br /> with SEO Service.
								</h3>
								<form action="#" class="banner-one__form">
									<div class="banner-one__form-box">
										<input
											type="text"
											placeholder="Your Website URL"
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

			<section class="service-two service-two__home-two">
				<img
					src="assets/images/shapes/service-home-2-bg.png"
					class="service-two__home-two__bg-1"
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
					<div class="row no-gutters">
						<div class="col-xl-6 d-flex">
							<div class="my-auto">
								<div class="service-two__main ">
									<div class="block-title text-left">
										<p>
											<span>About Company</span>
										</p>
										<h3>
											Boost Your Ranking <br />{" "}
											<span>with SEO Service.</span>
										</h3>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit sed eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua.enim ad minim veniam quis
										nostrud.
									</p>
									<img
										src="assets/images/shapes/service-sign-1-1.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div class="col-xl-6">
							<div class="service-two__box-wrap">
								<div class="row">
									<div class="col-md-6">
										<div
											class="service-two__box  wow flipInY"
											data-wow-delay="0ms"
											data-wow-duration="1500ms"
										>
											<div class="service-two__box-icon">
												<div class="service-two__box-circle"></div>
												<img
													src="assets/images/shapes/service-2-i-1.png"
													alt=""
												/>
											</div>
											<h3>
												<a href="service-d-seo.html">
													SEO Optimization
												</a>
											</h3>
											<p>
												Lorem ipsum dolor amet
												consectetur adipisicing eiusmod
												tempor.
											</p>
										</div>
										<div
											class="service-two__box  wow flipInY"
											data-wow-delay="300ms"
											data-wow-duration="1500ms"
										>
											<div class="service-two__box-icon">
												<div class="service-two__box-circle"></div>
												<img
													src="assets/images/shapes/service-2-i-2.png"
													alt=""
												/>
											</div>
											<h3>
												<a href="service-d-seo.html">
													SEO Optimization
												</a>
											</h3>
											<p>
												Lorem ipsum dolor amet
												consectetur adipisicing eiusmod
												tempor.
											</p>
										</div>
									</div>
									<div class="col-md-6 d-flex">
										<div class="my-auto">
											<div
												class="service-two__box  wow flipInY"
												data-wow-delay="600ms"
												data-wow-duration="1500ms"
											>
												<div class="service-two__box-icon">
													<div class="service-two__box-circle"></div>
													<img
														src="assets/images/shapes/service-2-i-3.png"
														alt=""
													/>
												</div>
												<h3>
													<a href="service-d-seo.html">
														SEO Optimization
													</a>
												</h3>
												<p>
													Lorem ipsum dolor amet
													consectetur adipisicing
													eiusmod tempor.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Banners;
