import React, { useEffect } from 'react'
import "./Product.css"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useStateValue } from "../../StateProvider"

function Product({ id, price, title, image, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__star">
          {
            Array(rating)
              .fill()
              .map((_, index) => (
                <StarRoundedIcon style={{ color: "rgb(214, 244, 63)" }} key={index} />
              ))
          }
        </div>
      </div>

      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product;