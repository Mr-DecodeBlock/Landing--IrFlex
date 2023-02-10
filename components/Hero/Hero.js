import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Todos tus servicios en donde el precio lo pones tu</h1>
								<p>
									Mejoramos la calidad de vida de todos nuestros usuarios al permitir el acceso a productos y servicios del mercado, ajustando los precios según la oferta y la demanda.
								</p>
								<a href="#" className="app-download-btn">
									<img src="img/apple-esp.png" alt="" />
								</a>
								<a href="#" className="app-download-btn">
									<img src="img/android-esp.png" alt="" />
								</a>
								<div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img src="img/mobile-hero2.png" alt="IrflexApp" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
