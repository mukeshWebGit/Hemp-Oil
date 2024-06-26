import React from "react";
import { Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";

export const ProductDetails = () =>{
    const params = useParams();
    const {slug} = params;
    return(
        <>
         <section className="banner">
            <div className="container">
                <div className="bredcrumb">
                    <ul className="list-unstyled mb-0">
                    <li>Home &gt; </li><li><Link to="/product/">Products</Link> &gt; </li><li>{slug}</li>
                    </ul></div>
            </div>
        </section>
        <section className="productDetailsSec mb-30">
	<div className="container"> 
		<div className="productDetails grayBg"> 
			<div className="row">	
				<div className="col-lg-6">
				<div className="productImg text-center">
						<img src="/images/product-demo.jpg" alt="product" />
					</div>
				</div>
				<div className="col-lg-6">
					<h4 className="productName pt-0">
						Full Spectrum Hemp Oil 30 ml
					</h4>
					<h4 className="productPrice">
						£17.99
					</h4>
					<div className="py-30">
					<p>1 bottle contains Hemp Paste in Hemp oil 10ml - 1000mg (10%)</p>
					<p>*Please note this product cannot be smoked or vaporised*</p>
					<p> Produced in the UK in a GMP compliant facility. Meeting the very highest standards in production and quality control.</p>
					<Link to="#" className="ReadMore"> Read More</Link>
					</div>
					<div className="productCont p-20">
						<div className="row pb-15">
						<div className="col option"> Options: </div> <div className="col"><select name="cars" className="custom-select">
    <option selected>Buy One Bottle (£17.99 Per Bottle) £17.99</option>
    <option >Buy two Bottle (£17.99 Per Bottle) £17.99</option>
    <option >Buy three Bottle (£17.99 Per Bottle) £17.99</option> 
    <option >Buy six Bottle (£17.99 Per Bottle) £17.99</option> 
  </select></div>   
						</div>
						<div className="row">
						<div className="col option"> Quantity: </div><div className="col"><input type="number" className="form-control" value="1" /> </div> <div className="col-md-10 text-right"><a href="javascript" className="addBasket">add to basket</a></div>  
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    )
}