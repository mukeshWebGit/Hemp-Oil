import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";
 
const reducer = (state, action) => {
	switch (action.type) {
	  case 'FETCH_REQUEST':
		return { ...state, loading: true };
	  case 'FETCH_SUCCESS':
		return { ...state, product: action.payload, loading: false };
	  case 'FETCH_FAIL':
		return { ...state, loading: false, error: action.payload };
	  default:
		return state;
	}
  };

export const ProductDetails = () =>{
    const params = useParams();
    const {slug} = params;

	const [{ loading, error, product }, dispatch] = useReducer(reducer, {
		product: [],
		loading: true,
		error: '', 
	  });
	  // const [products, setProducts] = useState([]);
	  useEffect(() => {
		const fetchData = async () => {
		  dispatch({ type: 'FETCH_REQUEST' });
		  try {
			const result = await axios.get(`/api/products/slug/${slug}`);
			dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
		  } catch (err) {
			dispatch({ type: 'FETCH_FAIL', payload: err.message });
		  }
		};
		fetchData(); 
	  }, [slug]);

	  const [quantity, setQuantity] = useState('1'); 
		 
	  const handlePriceWithQuantity = (e) => {
		setQuantity(e.target.value);
	  }
	  
    return (
        <>
	
         <section className="banner">
            <div className="container">
                <div className="bredcrumb">
                    <ul className="list-unstyled mb-0">
                    <li>Home &gt; </li><li><Link to="/product/">Products</Link> &gt; </li><li>{slug}</li>
                    </ul>
				</div>
            </div>
        </section> 

        <section className="productDetailsSec mb-30">
	<div className="container"> 
		<div className="productDetails grayBg"> 
		{ loading ? (
		<div>Loading...</div>
	  ) : error ? (
		<div>{error}</div>
	  ) : (
			<div className="row">	
				<div className="col-lg-6">
				<div className="productImg text-center">
						<img src={product.imageBig} alt="product" />
					</div>
				</div>
				<div className="col-lg-6">
					<h4 className="productName pt-0">
					{product.name}
					</h4>
					<h4 className="productPrice">
						 {product.countInStock > 0 ? product.price : <span className="unavailable">Out of Stock</span>}
					</h4>
					<div className="py-30">
					<p>1 bottle contains Hemp Paste in Hemp oil 10ml - 1000mg (10%)</p>
					<p>*Please note this product cannot be smoked or vaporised*</p>
					<p> Produced in the UK in a GMP compliant facility. Meeting the very highest standards in production and quality control.</p>
					<Link to="#" className="ReadMore"> Read More</Link>
					</div>
					<div className="productCont p-20">
						<div className="row pb-15">
						<div className="col option"> Options: </div> <div className="col"><select name="cars" className="custom-select" onChange={handlePriceWithQuantity}>
    <option selected value="1">Buy One bottle (£17.99 Per Bottle) {product.price}</option>
    <option  value="2">Buy two bottle (£15.99 Per Bottle) {product.price*2}</option>
    <option  value="3">Buy three bottle (£12.99 Per Bottle) {product.price*3}</option> 
    <option  value="6">Buy six bottle (£10.99 Per Bottle) {product.price*4}</option> 
  </select></div>   
						</div>
						<div className="row pb-15">
						<div className="col option"> Quantity: </div>
						<div className="col"><input type="number" className="form-control" onChange={(event) => setQuantity(event.target.value)} value={quantity}/> </div> 
						 
						</div>
						<div className="row "> 
						<div className="col option"> </div>
						<div className="col-md-10"><a href="javascript" className="addBasket">add to basket</a></div>  
						</div>
					</div>
				</div>
			</div>
	  )}
		</div>
	</div>
</section>
        </>
     );
	}