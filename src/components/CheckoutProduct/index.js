import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../context/StateProvider';
import './checkoutProduct.css'

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeToBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id
    });
  }
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} alt="checkoutProduct__img" />
      </div>
      <div className="checkoutProduct__content">
        <p><strong>{title}</strong></p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {
          Array(rating)
              .fill()
              .map((_, index) => (
                  <StarIcon key={index} />
              ))
        }
        </div>
        <button onClick={() => removeToBasket(id)}>Remove to basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
