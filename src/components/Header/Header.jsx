import { useEffect, useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

import { FaShoppingCart } from "react-icons/fa";

import "./Header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
  
    const {cartCount} = useContext(Context);
  
    const navigate = useNavigate();
  
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <>
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
          <div className="header-content">
  
            <div className="center" onClick={() => navigate("/")}>ShopKart.</div>
            <ul className="right">
                <li onClick={() => navigate("/products")}>Products</li>
                <li onClick={() => navigate("/")}>Login</li>
                <li>
                    <span 
                        className="cart-icon"
                        onClick={() => setShowCart(true)}
                    >
                    <FaShoppingCart />
                    {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </li>
            </ul>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
      </>
    );
  };
  
  export default Header;