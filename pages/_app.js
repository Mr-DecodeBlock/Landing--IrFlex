import Head from "next/head";
import "react-image-lightbox/style.css";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/Layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/icons.css";
import "../styles/scss/style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/img/favicon.png" />

				<meta name="description" content="Irflex" key="IrFlex" />
  				<meta property="og:description" content="Donde el precio lo pones tu" />
  				<meta property="og:type" content="web" />
				<meta property="og:url" content="https://landing-page-ir-flex.vercel.app/" />
				<meta property="og:site_name" content="Irflex - Donde el precio lo pones tu" />

  				<meta property="og:image" content="https://landing-page-ir-flex.vercel.app/img/mobile-hero2.png" />
 				<meta property="og:image:type" content="image/png" />
  				<meta property="og:image:width" content="446" />
  				<meta property="og:image:height" content="686" />

			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
