import React from "react";
import { Products } from "../component/Products";

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
	<Products></Products>
				
			 	
		</div>
    </div>
</section>
        </>
    )
}