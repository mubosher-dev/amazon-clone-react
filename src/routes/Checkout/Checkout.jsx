import React from 'react'
import "./Checkout.css"
import Header from '../../components/Header/Header'
import { useStateValue } from "../../StateProvider"
import ProductItem from '../../components/ProductItem/ProductItem';
import SubTotal from '../../components/Total/SubTotal';
import changePage from '../../changePage';

function Checkout() {

  changePage("Checkout Page")

  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className='checkout'>

        <div className='banner'>
          <img
            src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            className='checkout__banner'
          />
        </div>
        <div className='totalPrice'>
          <SubTotal />
        </div>

        <div className="box__body">
          {basket?.length === 0 ? (
            <div className='shop__busketEmpty'>
              <h2>Your shopping basket is empty</h2>
              <p>Please back to home and clicked ad to basket button</p>
            </div>
          )
            :
            (
              <div className="shopping-basket">
                {basket?.map((item, index) => (
                  <ProductItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default Checkout