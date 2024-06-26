import { Link } from "react-router-dom"

export const Footer = () =>{
    return(
<footer className="footer py-65">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-md-5">
				<img src="/images/footerLogo-demo.png" className="footerLogo" alt="Hemp Oil" />
			</div> 
			<div className="col-md-7">
			<div className="row"> 
			<div className="col-md-4">
				<ul className="list-unstyled">
				<li><Link to="#"><i className="fas fa-caret-right"></i> Home</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Hemp Oil</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Pomi T</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Contact</Link></li>
				</ul>
			</div>
			<div className="col-md-4">
				<ul className="list-unstyled">
				<li><Link to="#"><i className="fas fa-caret-right"></i> Terms & Conditions</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Privacy Policy</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Sitemap</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Login</Link></li>
				<li><Link to="#"><i className="fas fa-caret-right"></i> Register</Link></li>
				</ul>
			</div>
			<div className="col-md-4">
				<ul className="list-unstyled">
				<li><Link to="tel:01782 751 286"> <i className="fas fa-phone-alt"></i> 01782 751 286</Link></li>
				<li><Link to="tel:01782 751 286"><i className="fas fa-phone-alt"></i> 01782 751 286</Link></li>
				<li><Link to="mailto:sales@herballab.co.uk"><i className="fas fa-envelope"></i> sales@herballab.co.uk</Link></li> 
				</ul>
			</div>
			
		</div>
			</div>
			
			
		</div>
	</div>
</footer>
    )
}