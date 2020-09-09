export const initialState = {
  basket: [],
  user: null,
  categories: ["Phones", "Laptops"]
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);

  switch (action.type) {
      case 'ADD_TO_BASKET':
          // Logic for adding item to cart
          return {
              ...state,
              basket: [...state.basket, action.item]
          }
      case 'REMOVE_FROM_CART':
          // Logic for removing item from cart
          /* 
          let newCart = [...state.cart]
          const index = state.cart.findIndex(
              item => item.id === action.payload
          )
          
          if(index>=0)
              newCart.splice(index,1)
          else
              console.warn(`can't remove as it's not available`)
          return {
              ...state, 
              cart: newCart
          }
          */


          return {
              ...state,
              basket: state.basket.filter(item => item.id !== action.payload)
          }

      case 'SET_USER':
          return {
              ...state,
              user: action.user
          }
      default:
          return state
  }
}

export default reducer