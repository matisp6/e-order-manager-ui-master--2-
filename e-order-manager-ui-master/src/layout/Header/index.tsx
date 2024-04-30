import { Link } from "react-router-dom";
import Modal from 'react-modal';

import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import "./styles.scss";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

Modal.setAppElement('#root');

const Header = () => {
  const { productsCount } = useContext(CartContext);
  return (
    <nav className="fixed-navigation">
      <div className="fixed-navigation__nav">
        <Link className="home-link" to="/">
          <h1 className="fixed-navigation__logo">E-order-manager</h1>
        </Link>
      </div>
      <div className="fixed-navigation__nav-links">
        <ul>
          <li className="fixed-navigation__nav-link">Ebooki</li>
          <li className="fixed-navigation__nav-link">Audiobooki</li>
          <li className="fixed-navigation__nav-link">Poradniki</li>
        </ul>
      </div>
      <div className="fixed-navigation__action">
        <ul className="fixed-navigation__action__list">
          <li className="fixed-navigation__action__element">
            <img className="search-icon" src={searchIcon} alt="search" />
          </li>
          <li className="fixed-navigation__action__element">
            <Link to="/cart" className="fixed-navigation__action-link cart-container">
              <img src={cartIcon} alt="cart" className="cart-icon"/>
              <span className="product-count">({productsCount})</span>
            </Link>
          </li>
          <li className="fixed-navigation__action__element">
            <Link to="/login" className="fixed-navigation__action-link login">
              <span>Zaloguj</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Modal dla koszyka */}
    </nav>
  );
};

export default Header;