import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../context/reducer';

const calculateAmount = (basket) => {
  let amount = 0;
  basket.forEach(product => {
    amount += product.price;
  });

  return amount;
}

const Subtotal = () => {
  const [{basket}] = useStateValue();
  return (
    <div className="subtotal">
      <div className="subtotal__body">
        <CurrencyFormat
          renderText={value => (
              <>
                  <p>
                      Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                  </p>
                  <small className="subtotal__gift">
                      <input type="checkbox" /> This order contains a gift
              </small>
              </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
        />
        <button>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Subtotal
