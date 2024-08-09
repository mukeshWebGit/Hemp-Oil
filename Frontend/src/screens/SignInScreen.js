import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";


export default function SigninScreen() {
	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get('redirect');
	const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <> 
           <Helmet> <title>Sign In</title></Helmet>
        
    <section className="banner"> 
	<div className="container">
		<div className="bredcrumb">
			<ul className="list-unstyled mb-0">
			<li>Home &gt; </li> <li>Membership Login</li>
			</ul>
		</div>
	</div>
</section>
    <section className="productDetailsSec mb-30">
	<div className="container"> 
		<div className="loginSec"> 
			<div className="title pt-45 pb-35 mb-35">
				<h3>Membership Login</h3>
				<p>Please login to your account below.</p>
			</div>
		</div>
		
		<div className="loginBox row">
		<div className="col-md-6">
		
		<form autocomplete="off" className="contactForm01">
			  
    <div className="form-group">
    	<label>Email Address</label> 
        	<input name="username"  type="text" className="form-control" size="40" required /> 
    </div>
    
    <div className="form-group">
		<label>Surname:</label> 
			<input type="text" size="35" name="password" className="form-control" required  />
		  
	</div> 
	
		
	<div className="form-group text-right">  
		<button type="submit" className="blueBtn">Sign In</button> 
	</div> 
	<div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
	</form>
		</div>
		</div>
	</div>
</section>
        </>
    )

}