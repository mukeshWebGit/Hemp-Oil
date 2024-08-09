import { useContext } from "react";
import { Store } from "../Store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const CartScreen = ()=> {
  const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const updateCartHandler = async (item, quantity) => {
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      });
    };
    const removeItemHandler = (item) => {
      ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };
  
    const checkoutHandler = () => {
      navigate('/signin?redirect=/shipping');
    };
    return(
        <>
        <section class="banner">
            <div class="container">
                <div class="bredcrumb">
                    <ul class="list-unstyled mb-0">
                        <li>Home &gt; </li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="productDetailsSec mb-30">
            <div class="container">
                <div class="productDetails grayBg addToCart"> 
                    <div class="row">
                    <div className="col-md-8">
          {cartItems.length === 0 ? (
            <div className="emptyCart">
              Cart is empty. <Link to="/">Go Shopping</Link>
            </div>
          ) : (
            <ul className="list-unstyled cartItemList">
              {cartItems.map((item) => (
                <li key={item._id} className="mb-20">
                  <div className="align-items-center row row-10">
                    <div className="col-md-2 px-10">
                        <div className="cartImg">
                      <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                          </div>
                      </div>
                    <div className="col-md-4 px-10"> 
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </div>
                    <div className="col-md-2 px-10">
                      <button onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                         disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <button onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </div>
                    <div className="col-md-2 px-10">${item.price}</div>
                    <div className="col-md-2 px-10">
                      <button onClick={() => removeItemHandler(item)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">  
              <ul className="list-unstyled">
                <li>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </li>
                <li>
                  <div className="d-grid">
                    <button onClick={checkoutHandler}
                      type="button" className="greenBtn"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </li>
              </ul> 
        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}