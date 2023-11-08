import { useDispatch } from "react-redux";
import "../App.css"
import PropTypes from "prop-types";
import {addToCart, totalPrice} from "../redux/cart/actions";
import { addToPrice } from "../redux/prices/actions";
import { removeQuantity } from "../redux/products/actions";

function Product({item}) {

    const { id, title, price, qty, category, image} = item;
    const dispatch = useDispatch();
    const handleClick = () => {
        if(qty > 0){
          dispatch(addToCart(item));
        dispatch(addToPrice(price));
        dispatch(removeQuantity(id));
        dispatch(totalPrice(id, price))
        }
    }
    return (
        <div className="lws-productCard">
          <img className="lws-productImage" src={image} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{title}</h4>
            <p className="lws-productCategory">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{qty}</span></p>
            </div>
            <button className="lws-btnAddToCart" onClick={handleClick}>Add To Cart</button>
          </div>
        </div>
    )
}

Product.propTypes = {
    item : PropTypes.any
}

export default Product
