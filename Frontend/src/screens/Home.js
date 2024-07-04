import { Link } from "react-router-dom";
import { Products } from "../component/Products";

export const Home = () => {
    return(
        <>
        <section className="banner">
	<img src="/images/banner-demo.jpg" className="responsive" alt="Hemp Oil" />
	<div className="bannerdetails">
	<div className="container">
		<h4>Full Spectrum Extract</h4>
		<h1>Welcome to<br/> Premium Hemp Oils.</h1>
		<Link href="#" className="greenBtn">Shop Now</Link>
	</div>
	</div>
</section>
<section className="quality py-65">
	<div className="container">
		<h2 className="text-center">The highest quality cdb oils</h2>
		<div className="row align-items-center">
			<div className="col-md-6">
				<img src="/images/fullSpectrum-demo.jpg" className="responsiveMax cdb" alt="fullSpectrum"/>
			</div>
			<div className="col-md-6 ">
				<h3>Full Spectrum Hemp Oil 30 ml</h3>
				<p>1 bottle contains Hemp Paste in Hemp oil 10ml - 1000mg (10%)</p>
				<p> Produced in the UK in a GMP compliant facility. Meeting the very highest standards in production and quality control.</p>
				<p> Ingredients:<br/> Hemp Oil (&#60; 90%) <br/>Hemp Paste 10% </p>
				<p>No pesticides. No herbicides. Just green European HEMP farmed to the highest standards. Vegan, gluten and GMO-free.</p>
				<div className="buttonBg pt-15"><Link to="#" className="blueBtn">More Info</Link></div>
			</div>
		</div>
	</div>

	<Products></Products>
</section>
<section className="pomi-t py-15">
	<div className="container"> 
		<div className="row align-items-center">
			
			<div className="col-md-6">
				<h3>Pomi T Polyphenol<br/> Food Supplement 60 Capsules</h3>
				<p>Pomi-T contains a unique blend of herbs, spices, vegetables and fruits squeezed into a vegetarian capsule for a convenient way to boost your daily intake of natural plant polyphenols. </p>
				<p> It is the only polyphenol rich food supplement tested in a national scientific trial.</p>
				<div className="buttonBg pt-15"><Link to="#" className="blueBtn">More Info</Link></div>
			</div>
			<div className="col-md-6 text-right">
				<img src="/images/pomi-t-demo.jpg" className="responsiveMax pomiT" alt="pomi-t" />
			</div>
		</div>
	</div>
</section>
<section className="buyMore py-65 text-center">
	<div className="container">
<h2>Buy more & <span> save</span></h2>	
		<ul className="allBottles list-unstyled pt-30 ">
		<li><div className="bottles bottles2">Buy 2 bottles <span>SAVE 10%</span></div></li>
		<li><div className="bottles bottles3">Buy 3 bottles <span>SAVE 15%</span></div></li>
		<li><div className="bottles bottles6">Buy 6 bottles <span>SAVE 20%</span></div></li>
		</ul>
		
		<p>Ordered from us before? Login for Express Re-Order</p>
		<h3 className="reOrder pt-30">
			<Link to="#" className="reOrderBtn"> Express Re-Order</Link>
		</h3>
	</div>
</section>

</>
    )
}