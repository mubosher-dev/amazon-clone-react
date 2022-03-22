import React from 'react'
import "./ProductItem.css"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useStateValue } from "../../StateProvider"

function ProductItem({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeToBusket = () => {
        // remove item in busket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    console.log(id);

    return (
        <div className='checkoutProduct'>
            <img src={image} alt={title} />

            <div className="checkoutProduct__info">
                <p className='checkOut__title'> {title} </p>

                <p className="price">
                    <span>$</span>
                    <strong>{price}</strong>
                </p>

                <div>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarRoundedIcon key={i} style={{ color: "rgb(214, 244, 63)" }} />
                            ))
                    }
                </div>
                <button onClick={removeToBusket}> Remove To Busket </button>
            </div>
        </div>
    )
}

export default ProductItem