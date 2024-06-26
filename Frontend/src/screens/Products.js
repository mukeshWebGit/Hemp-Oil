import { Link } from "react-router-dom";
import {Data} from "../component/Data"; 

export const Products = () => {   
	console.log(Data);
    return(
       
<section className="productListSec pt-45">
	<div className="container text-center"> 
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
)
}