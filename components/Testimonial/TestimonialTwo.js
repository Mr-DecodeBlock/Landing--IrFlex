import { useRef } from "react";
import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TestimonialTwo() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-bg section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents fw500 text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
									Servicios a tu disposición en la App de IrFlex
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav style-2">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<BsArrowLeft className="icon-arrow-right" />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<BsArrowRight className="icon-arrow-left" />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/4.png)" }}
							></div>
							<div className="feedback">
								Con nuestra tecnología de geolocalización, puedes ver la ubicación de tu conductor y recibir actualizaciones sobre tu viaje.
							</div>
							<div className="client-info">
								<div className="client-name">
									
									<span>Servicio de taxi</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/5.png)" }}
							></div>
							<div className="feedback">
								Tendrás acceso a precios ajustados según tu oferta al solicitar comidas, lo que significa que obtendrás el mejor servicio por tu dinero.
							</div>
							<div className="client-info">
								<div className="client-name">
					
									<span>Servicio de comida</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/6.png)" }}
							></div>
							<div className="feedback">
								Podrás encontrar la mejor opción para ti con nuestra amplia selección de opciones de alojamiento además podrás pagar con IrFlex Coin.
							</div>
							<div className="client-info">
								<div className="client-name">

									<span>Servicio de hospedaje</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/3.png)" }}
							></div>
							<div className="feedback">
								Haz tu pedido y espera a que llegue a tu puerta, ahorra tiempo y evita las molestias del tráfico y ahorra tiempo y dinero en gasolina.
							</div>
							<div className="client-info">
								<div className="client-name">
								
									<span>Servicio de delivery</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/2.png)" }}
							></div>
							<div className="feedback">
								Puedes pagar tus facturas desde la comodidad de tu hogar y estar seguro de que tus servicios estarán siempre al día.
							</div>
							<div className="client-info">
								<div className="client-name">
									
									<span>Pagos de servicios</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: "url(/img/testimonial/1.png)" }}
							></div>
							<div className="feedback">
								Todos estos servicios están disponibles en la aplicación y se pueden contratar de manera facil, sencilla y conveniente.
							</div>
							<div className="client-info">
								<div className="client-name">
									
									<span>Servicios domesticos</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav style-2">
						<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
							<BsArrowLeft className="icon-arrow-right" />
						</div>
						<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
							<BsArrowRight className="icon-arrow-left" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
