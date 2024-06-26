import React from "react";
import { Data } from "../component/Data";
import { Link } from "react-router-dom";

export const ProductList = () => {
    return(
        <>
        <section className="banner">
            <div className="container">
                <div className="bredcrumb">
                    <ul className="list-unstyled mb-0">
                    <li>Home &gt; </li><li>Products </li>
                    </ul></div>
            </div>
        </section>
            <section className="categoryDescription py-65">
	<div className="container text-center"> 
				<h3>Premium CBD Oils</h3>
				<p className="width650">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue purus, rhoncus a ultrices ut, molestie sit amet nibh. Nulla in vulputate sapien. Maecenas nunc ante, faucibus eget facilisis ac, efficitur quis elit. Nulla molestie pulvinar massa eu porttitor. Suspendisse lectus tellus, malesuada eget laoreet eu, fermentum id dui. </p> 
				  
	</div>
</section>
<section class="productListSec">
	<div class="container text-center"> 
    <div className="row row-10">	
			{Data.products.map((product) => (
				<div className="col-md-4 px-10 products" key={product.slug}>
                
				<div className="productImg">
					<img src={product.image} alt="Hemp Oil" />
				</div>
				<h4 className="productName">
					{product.name}
				</h4>
				<h4 className="productPrice">
					{product.price}
				</h4>
				<div className="productBtn pt-15"><Link to={`/product/${product.slug}`} className="blueBtn">More Info</Link></div> 
			</div>
			))}
				
			 	
		</div>
    </div>
</section>
        </>
    )
}