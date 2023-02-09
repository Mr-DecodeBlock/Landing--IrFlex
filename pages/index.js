import Head from "next/head";
import FeaturesTwo from "../components/Features/FeaturesTwo";
import HeroTwo from "../components/Hero/HeroTwo";
import Cta from "../components/HomeTwo/Cta";
import Interfaces from "../components/HomeTwo/Interfaces";
import ManageData from "../components/HomeTwo/ManageData";
import OurGoal from "../components/HomeTwo/OurGoal";
import PricingContent from "../components/Pricing/PricingContent";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
	return (
		<>
			<Head>
				<title>Xmoze - SaaS Multipurpose Landing Template 2</title>
			</Head>
			<HeroTwo />
			<FeaturesTwo />
			<OurGoal />
			<Interfaces />
			<Services />
			<ManageData />
			<PricingContent />
			<Testimonial />
			<Cta />
		</>
	);
}
