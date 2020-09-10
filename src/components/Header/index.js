import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link }  from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = e => {
    e.preventDefault();
    auth.signOut();
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className="header__search">
          <input type="text" />
          <SearchIcon className="header__searchIcon" />
      </div>
      
      <nav className="header__nav">
        <div className="header__option">
          {
            user ?
              <>
                <span className="header__optionLineOne">Hey {user.email}</span>
                <span onClick={handleAuth}>Sign Out</span>
              </>
            :
              <Link to={!user && '/login'}>
                <span className="header__optionLineOne">Helloo gest</span>
                <span className="header__optionLineTwo">Sign in</span>
              </Link>
          }
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
       
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo basket__count">{basket?.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Header;
