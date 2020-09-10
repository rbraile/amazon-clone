import React, { forwardRef } from 'react'
import Product from '../Product'
import FlipMove from 'react-flip-move'
import CheckoutProduct from '../CheckoutProduct'
import Subtotal from '../Subtotal'
import './checkout.css'
import { useStateValue } from '../../context/StateProvider'

  const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
            alt=""
            className="checkout__ad"
        />
        <div className="checkout__title">
        <h3>{user?.email}</h3>
        <h2>shopping basket</h2>
            {basket?.length === 0 ? (
              <div>
                    <h2>Your Basket is Empty</h2>
                </div>
              ) : (      
                <>         
                  <h2 className="checkout__title">Your Basket</h2>
                  <FlipMove enterAnimation="fade" leaveAnimation="fade">
                    {basket.map((item, idx) => (
                      <CheckoutProduct
                        key={`product-${item.id}-${idx}`}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                      />
                    ))}
                  </FlipMove>
                </>
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
