import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider.js'
import { motion } from "framer-motion"

function Product({ id, title, image, price, rating }) {
      const [state, dispatch] = useStateValue()

      const addToBasket = () => {
        dispatch({
          type:'ADD_TO_BASKET',
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          }
        })
      }
    return (
        <motion.div whileHover={{scale: 1.1}} className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
<div className="product__rating">
            {Array(rating).fill().map((_, i) =>(
                <p>⭐</p>
              )
            )}
</div>

          </div>
          <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket </button>
        </motion.div>

    )
}

export default Product
