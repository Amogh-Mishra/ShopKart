import { MdClose } from "react-icons/md";

import "./CartItem.css";

import products from '../../../db.json';

import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItems, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    return (
        <div className="cart-products">
            {cartItems?.map((item) => (    
                <div className="cart-product" key={item.id}>
                    <div className="img-container">
                        <img src={products.products[item.id-1].image} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-buttons" onClick={() => handleRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
                        </div>

                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span>&#8377;{item.attributes.price} = </span>
                            <span className="highlight">&#8377;{item.attributes.quantity * item.attributes.price}</span>
                        </div>
                    </div>
                </div>            
            ))}
        </div>
    );
};

export default CartItem;