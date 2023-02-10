import { BiLayerMinus } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
export default function FeaturesFour() {
	return (
		<section className="strong-services-wrapper section-bg section-padding fw500">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Todo lo que necesitas en una sola aplicación</h2>
							<p>
							Únete al ecosistema de IrFlex y experimenta la libertad de tener un gran número de servicios
							a tu disposición y se parte de algo grande.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card1">
							<div className="icon">
								<BiLayerMinus />
							</div>
							<div className="service-title">
								<h3>Multiples servicios</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card2">
							<div className="icon">
								<FaCoins />
							</div>
							<div className="service-title">
								<h3>Nuestra criptomoneda IrFlex Coin</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card3">
							<div className="icon">
								<MdOutlineMobileScreenShare />
							</div>
							<div className="service-title">
								<h3>Marketing de referidos</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card4">
							<div className="icon">
								<RiSecurePaymentFill />
							</div>
							<div className="service-title">
								<h3>Sistema de franquiciados por rango</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
