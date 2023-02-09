import Head from "next/head";
//import FaqContent from "../components/Faq/FaqContent";
import Hero from "../components/Hero/Hero";
import ContentBlockOne from "../components/HomeThree/ContentBlockOne";
import ContentBlockThree from "../components/HomeThree/ContentBlockThree";
import ContentBlockTwo from "../components/HomeThree/ContentBlockTwo";
import Cta from "../components/HomeThree/Cta";
import PricingContentTwo from "../components/Pricing/PricingContentTwo";
import FeaturesFour from "./../components/Features/FeaturesFour";
import TestimonialTwo from "./../components/Testimonial/TestimonialTwo";
import CallToAction from "../components/DefaultHome/CallToAction";

export default function indexThree() {
	return (
		<>
			<Head>
				<title>Irflex - Donde el precio lo pones Tú</title>
			</Head>
			<Hero />
			<FeaturesFour />
			<Cta />
			<ContentBlockOne />
			<ContentBlockTwo />
			<ContentBlockThree />
			<PricingContentTwo />
			<TestimonialTwo />
			<CallToAction />
			{/*<FaqContent />*/}
		</>
	);
}