import React from 'react';

export default function CallToAction() {
  return (
		<section className="cta-banner-wrapper style-1 section-padding pt-0">
			<div className="container">
				<div className="cta-banner text-white">
					<div className="row">
						<div className="col-xxl-6 text-center text-xxl-start offset-xxl-1">
							<div className="cta-contents">
								<h2 className="wow fadeInUp">Aumenta tus ingresos con IrFlex, un estilo de vida</h2>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Experimenta una forma innovadora y eficiente de obtener servicios
									¡No te pierdas la oportunidad de unirte a un estilo de vida innovador y empieza a obtener ganancias!
								</p>
								<a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s">
									<img src="/img/apple-esp.png" alt="" />
								</a>
								<a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".8s">
									<img src="/img/android-esp.png" alt="" />
								</a>
								<div className="tri-arrow wow fadeInRight d-none d-md-inline-block" data-wow-delay="1s">
									<img src="/img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xxl-5 pe-xxl-5">
							<div className="cta-mobile-app wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.2">
								<img src="img/cta-right-img.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
