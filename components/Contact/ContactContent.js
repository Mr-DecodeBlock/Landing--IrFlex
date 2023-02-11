//import { AiTwotonePhone } from "react-icons/ai";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookMessenger, FaTelegramPlane, FaDiscord, FaWhatsapp } from "react-icons/fa";
// import Map from "../GoogleMap/Map";
import ContactCard from "./ContactCard";
// import Form from "./Form";

export default function ContactContent() {
	return (
		<section className="contact-us-wrapper section-padding">
			<div className="container">
				<div className="row text-center">

					<div className="row mt-4 mt-lg-5">
					<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">¡Ponte en contacto Ahora!</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
									¿Hay alguna consulta o algún comentario para nosotros? Escríbenos para contactar con nuestro equipo, te daremos respuesta a la brevedad posible.
								</p>
							</div>
						</div>
					</div>
					</div>

					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaWhatsapp />}
							contentOne=
								<Link href="https://irflexapp.com/">
									<b>Grupo IrFlex</b>
								</Link>
							className="box1"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaEnvelope />}
							contentOne="info@example.com"
							className="box2"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaMapMarkerAlt />}
							contentOne="2118 Thornridge Cir, New York."
							className="box3"
						/>
					</div>

					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaFacebookMessenger />}
							contentOne=
								<Link href="https://irflexapp.com/">
									<b>Meseenger Facebook</b>
								</Link>
							className="box4"
						/>
					</div>

					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaTelegramPlane />}
							contentOne=
								<Link href="https://irflexapp.com/">
									<b>Grupo de Telegram</b>
								</Link>
							className="box5"
						/>
					</div>

					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaDiscord />}
							contentOne=
								<Link href="https://irflexapp.com/">
									<b>Servidor IrFlex</b>
								</Link>
							className="box6"
						/>
					</div>

				</div>

				{/*<div className="row">
					<div className="col-lg-6 pe-lg-4 order-2 order-lg-1">
						<div className="google-map me-lg-4 wow fadeInUp">
							<Map />
						</div>
					</div>
					<div className="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
						<Form />
					</div>
				</div>*/}
			</div>
		</section>
	);
}
