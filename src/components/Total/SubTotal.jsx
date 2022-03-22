import React from 'react'
import "./SubTotal.css"
import { useStateValue } from "../../StateProvider"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../reducer"

function SubTotal() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="total">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button> Proced to Checkout </button>
        </div>
    )
}

export default SubTotal;