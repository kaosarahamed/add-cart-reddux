import React, { useState } from 'react'
import Header from './Header'
import Product from './Product'
import AddProducts from './AddProducts'
import "../App.css"
import AddToCart from './AddToCart'
import { useSelector } from 'react-redux'

function Preview() {

    const products = useSelector(state => state.product);
    const [isShown, setIsshown] = useState(true);
    const [divShow, setDivShow] = useState(false)



    return (
       <React.Fragment>
        <Header setIsshown={setIsshown} setDivShow={setDivShow}/>
            {isShown && <main className="py-16">
                <div className="productWrapper">
                    <div className="productContainer" id="lws-productContainer">
                        {products && products.map((item) => <Product key={item.id} item={item}/>)}
                    </div>
                    <div>
                        <AddProducts setIsshown={setIsshown}/>
                    </div>
                </div>
            </main>}
            {divShow && <AddToCart />}
       </React.Fragment> 
    )
}

export default Preview
