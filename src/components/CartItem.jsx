import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeQuantity, addQuantity } from "../redux/products/actions";
import { addQty, removeQty, removeToCart, removeTotalPrice, totalPrice } from "../redux/cart/actions";
import { addToPrice, removeToPrice } from "../redux/prices/actions";


function CartItem({item}) {

  const dispatch =  useDispatch();
  const product = useSelector(state => state.product)
  const getFilterProduct = product.filter(ele => ele.id === item.id)

  const handleAddToCart = () => {
    dispatch(removeQuantity(item.id));
    if(getFilterProduct[0].qty > 0){
      dispatch(addQty(getFilterProduct[0].qty, item.id))
      dispatch(addToPrice(item.price));
      dispatch(totalPrice(item.price, item.id))
    }
  }

  const handleRemoveToCart = () => {
    if(item.cartQty > 0){
      dispatch(addQuantity(item.id));
      dispatch(removeToPrice(item.price))
      dispatch(removeQty(getFilterProduct[0].qty, item.id))
      dispatch(removeTotalPrice(item.price, item.id))
    }
  }

  const handleRemove = () => {
    dispatch(removeToCart(item.id))
  }
    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              <img className="lws-cartImage" src={item.image} alt="product" />
              <div className="space-y-2">
                <h4 className="lws-cartName">{item.title}</h4>
                <p className="lws-cartCategory">{item.category}</p>
                <p>BDT <span className="lws-cartPrice">{item.price}</span></p>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              <div className="flex items-center space-x-4">
                <button className="lws-incrementQuantity" onClick={handleAddToCart}>
                  <i className="text-lg fa-solid fa-plus"></i>
                </button>
                <span className="lws-cartQuantity">{item.cartQty}</span>
                <button className="lws-decrementQuantity" onClick={handleRemoveToCart}>
                  <i className="text-lg fa-solid fa-minus"></i>
                </button>
              </div>
              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{item.totalPrice}</span></p>
            </div>
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button className="lws-removeFromCart" onClick={handleRemove}>
                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
    )
}
CartItem.propTypes = {
  item : PropTypes.any
}
export default CartItem
