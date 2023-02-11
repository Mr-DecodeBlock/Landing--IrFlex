import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contacto</title>
			</Head>
			<PageBanner
				title="Contáctanos"
				content="No dude en contactarnos en cualquier momento"
			/>
			<ContactContent />
		</>
	);
}
