import React from 'react';

export default function ContentBlockThree() {
  return (
		<section className="content-block theme-bg section-padding fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 pe-lg-0 col-12">
						<div className="mobile-block">
							<img src="/img/home3/mobile-block.png" alt="" />
						</div>
					</div>
					<div className="col-lg-6 mt-5 mt-lg-0 offset-lg-1 col-12 ps-lg-5 pe-lg-5">
						<div className="block-contents ms-xl-3">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Adquiere IrFlex Coin Ahora</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
								Adquiere nuestra moneda deflacionaria y comienza a ganar con cada movimiento, No pierdas la oportunidad de formar parte de un futuro mejor.
							</p>
						</div>
						<div className="step-features">
							<div className="single-featured-item item1 wow fadeInUp" data-wow-delay=".3s">
								<h4>Inscríbete en nuestra plataforma</h4>
								<p>
									Únete a la comunidad IrFlex hoy mismo. Inscríbete en nuestra plataforma y accede a un mundo de posibilidades
								</p>
							</div>
							<div className="single-featured-item item2 wow fadeInUp" data-wow-delay=".5s">
								<h4>Registra tu wallet de criptomonedas</h4>
								<p>
									Registra tu billetera de criptomonedas en IrFlex y usa de manera segura y fácil tus activos digitales
								</p>
							</div>
							<div className="single-featured-item item3 wow fadeInUp" data-wow-delay=".7s">
								<h4>Compra IrFlex Coin con USDT</h4>
								<p>
									Compra IrFlex Coin con USDT en nuestra plataforma y conviertete en parte de la comunidad de IrFlex
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
