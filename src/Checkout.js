import React, { forwardRef } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import {useStateValue} from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move';


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue()
    return (
      <>
      <section className="total">
        <div className="checkout">
          <div className="checkout__left">
            <img className="checkout__ad" src="https://multiconversion.com/wp-content/uploads/2021/03/baner-blog-descarga-pdf-21-amazon-ads.jpeg" alt="" />
          </div>
          <div className="checkout__right">
          <Subtotal />
          </div>
        </div>
        <div>
        <h3 className="checkout__title">Hello, {user?.email} </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
            </FlipMove>
        </div>
        </section>
        </>
    )
}

export default Checkout
