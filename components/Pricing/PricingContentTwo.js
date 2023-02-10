import PricingTwo from "./PricingTwo";

const pricingData = [
	{
		id: 1,
		plan: "Free",
		price: 0,
		features: [	"Inversión: 0 IRC", 
					"Recarga Gratis: 0 USD",
					"% de recargas: 10%", 
					"% franquicias vendidas: 2%",
					"Sub-Distribuidores: 0"
		],
		popular: false,
	},
	{
		id: 2,
		plan: "Silver",
		price: 5560,
		features: [	"Inversión: 5560 IRC", 
					"Recarga Gratis: 100 USD",
					"% de recargas: 20%", 
					"% franquicias vendidas: 5%",
					"Sub-Distribuidore: 5"
		],
		popular: false,
	},
	{
		id: 3,
		plan: "Oro",
		price: 16670,
		features: [
					"Inversión: 16670 IRC", 
					"Recarga Gratis: 300 USD",
					"% de recargas: 35%", 
					"% franquicias vendidas: 10%",
					"Sub-Distribuidore: 10"
		],
		popular: true,
	},
	{
		id: 4,
		plan: "Diamante",
		price: 27780,
		features: [	"Inversión: 27780 IRC", 
					"Recarga Gratis: 800 USD",
					"% de recargas: 50%", 
					"% franquicias vendidas: 20%",
					"Sub-Distribuidore: 30"
		],
		popular: false,
	},
	
];

export default function PricingContentTwo() {
	return (
		<section className="package-pricing-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title">
							<h2 className="wow fadeInUp">Sistema de franquiciados</h2>
							<p className="wow fadeInUp pt-4" data-wow-delay=".3s">
							Cualquier persona volverse participe de las ganancias de IrFlex generando ganancias mensuales.
							</p>
						</div>
					</div>
				</div>

				<PricingTwo content={pricingData} />
			</div>
		</section>
	);
}
