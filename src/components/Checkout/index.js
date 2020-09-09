import React from 'react'
import Product from '../Product'
import Subtotal from '../Subtotal'
import './checkout.css'
import { useStateValue } from '../../context/StateProvider';

  const Checkout = () => {
  const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
            alt=""
            className="checkout__ad"
        />
        <div className="checkout__title">
        <h2>shopping basket</h2>
          {basket?.length === 0 ? (
              <div>
                  <h2>Your Cart is Empty</h2>
              </div>
            ) : (
              <div>
                <h2 className="checkout__title">Your Cart</h2>
                {basket.map(item => (
                  <Product
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                  />
                ))}
              </div>
            )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
