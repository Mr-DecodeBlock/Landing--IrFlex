import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/">
										<a className="footer-logo d-block">
											<img src="img/logo-footer.png" alt="Irflex" />
										</a>
									</Link>
									<p>
										En IrFlex, nos esforzamos por ofrecer una solución para sus necesidades
										gracias a nuestro sistema donde tu colocas el precio y así ahorra más.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Usuarios</h5>
								</div>
								<ul>
									<li>
										<Link href="/about">
											<a>Presentación</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a>IrFlex Coin</a>
										</Link>
									</li>
									<li>
										<Link href="/#">
											<a>Franquiciados</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Contacto</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Soporte</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>Soporte</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Privacidad</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Términos</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Denuncias</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Recursos</h5>
								</div>
								<ul>
									<li>
										<Link href="https://www.gitbook.com/">
											<a>WhitePaper</a>
										</Link>
									</li>
									<li>
										<Link href="https://www.gitbook.com/">
											<a>Documentación</a>
										</Link>
									</li>
									<li>
										<Link href="https://bscscan.com/">
											<a>Contrato IRC</a>
										</Link>
									</li>
									<li>
										<Link href="https://linktr.ee/">
											<a>Redes Sociales</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2023{" "}
								<Link href="https://irflexapp.com/">
									<a>IrFlex</a>
								</Link>{" "}
								All Rights Reserved.
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="#">
								<a>
									<FaFacebookF />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaTwitter />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaInstagram />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaLinkedinIn />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
