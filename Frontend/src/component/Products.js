import { Link } from "react-router-dom"; 
import axios from 'axios';
import { useEffect, useReducer } from "react";
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
	switch (action.type) {
	  case 'FETCH_REQUEST':
		return { ...state, loading: true };
	  case 'FETCH_SUCCESS':
		return { ...state, products: action.payload, loading: false };
	  case 'FETCH_FAIL':
		return { ...state, loading: false, error: action.payload };
	  default:
		return state;
	}
  };

export const Products = () => {   
	const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: '',
	  });
	  useEffect(() => {
		const fetchData = async () => {
		  dispatch({ type: 'FETCH_REQUEST' });
		  try {
			const result = await axios.get('/api/products');
			dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
		  } catch (err) {
			dispatch({ type: 'FETCH_FAIL', payload: err.message });
		  }
		};
		fetchData();
	  }, []);
    return(
       
<section className="productListSec pt-45">
	<div className="container text-center"> 
		<div className="row row-10">	
		{loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
			products.map((product) => (
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
			))
		)}
			 	
		</div>	
	</div>
</section>	
)
}