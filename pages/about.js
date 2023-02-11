import Head from "next/head";
import ContentOne from "../components/AboutPage/ContentOne";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FeaturesThree from "../components/Features/FeaturesThree";
import TeamTwo from "../components/Team/TeamTwo";
import Testimonial from "../components/Testimonial/Testimonial";
import ContentTwo from "./../components/AboutPage/ContentTwo";

export default function about() {
	return (
		<>
			<Head>
				<title>Nosotros</title>
			</Head>
			<PageBanner
				title="IrFlex un estilo de vida"
				content="En IrFlex ofrecemos una amplia gama de servicios y posibilidades de generar ganancias"
			/>
			<ContentOne />
			<FeaturesThree />
			<ContentTwo />
			<Testimonial />
			<TeamTwo />
			<CallToAction />
		</>
	);
}
