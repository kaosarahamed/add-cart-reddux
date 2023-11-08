
import DetailCart from './DetailCart'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function AddToCart() {

    const cart = useSelector(state => state.cart);

    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {
                            cart && cart.map((item) => <CartItem key={item.id} item={item}/>)
                        }
                    </div>
                    <div>
                        <DetailCart />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddToCart
