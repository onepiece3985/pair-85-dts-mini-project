import React from "react";

function Footer(props) {
	return (
		<div>
			<footer class="site-footer">
				<div class="particles-snow" id="footer-snow"></div>

				<img
					src="assets/images/shapes/footer-shape-1-1.png"
					class="site-footer__bg-shape-1"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-2.png"
					class="site-footer__bg-shape-2"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-3.png"
					class="site-footer__bg-shape-3"
					alt=""
				/>
				<img
					src="assets/images/shapes/footer-shape-1-4.png"
					class="site-footer__bg-shape-4"
					alt=""
				/>
				<div class="site-footer__upper">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="footer-widget footer-widget__about">
									<h3 class="footer-widget__title">About</h3>
									<p>
										We focus on the needs of small to middle
										market businesses to improve and grow
										their return.
									</p>
									<div class="footer-widget__social">
										<a href="#">
											<i class="fab fa-facebook-f"></i>
										</a>
										<a href="#">
											<i class="fab fa-twitter"></i>
										</a>
										<a href="#">
											<i class="fab fa-google-plus-g"></i>
										</a>
										<a href="#">
											<i class="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="footer-widget footer-widget__links__1">
									<h3 class="footer-widget__title">
										Services
									</h3>
									<ul class="list-unstyled footer-widget__links-list">
										<li>
											<a href="#">Web Design</a>
										</li>
										<li>
											<a href="#">Development</a>
										</li>
										<li>
											<a href="#">Wordpress</a>
										</li>
										<li>
											<a href="#">Online Marketing</a>
										</li>
										<li>
											<a href="#">Content</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="footer-widget footer-widget__links__2">
									<h3 class="footer-widget__title">
										Quick Links
									</h3>
									<ul class="list-unstyled footer-widget__links-list">
										<li>
											<a href="#">About Us</a>
										</li>
										<li>
											<a href="#">Work Portfolio</a>
										</li>
										<li>
											<a href="#">Our Team</a>
										</li>
										<li>
											<a href="#">Price Plan</a>
										</li>
										<li>
											<a href="#">Latest News</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="footer-widget footer-widget__contact">
									<h3 class="footer-widget__title">
										Contact
									</h3>
									<p>
										Royal Orville Road Apt. 728 <br />{" "}
										California, USA
									</p>
									<p>
										<a href="mailto:inovex.inc@company.com">
											inovex.inc@company.com
										</a>
									</p>
									<p>
										<a href="tel:720.661.2231">
											720.661.2231
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="site-footer__bottom">
					<div class="container">
						<p>© 2020 copyright all right reserved</p>
						<a href="index.html">
							<img src="assets/images/logo-1-1.png" alt="" />
						</a>
						<ul class="list-unstyled site-footer__bottom-menu">
							<li>
								<a href="#">Privace & Policy.</a>
							</li>
							<li>
								<a href="#">Faq.</a>
							</li>
							<li>
								<a href="#">Terms.</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
