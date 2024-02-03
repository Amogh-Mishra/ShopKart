import "./Cart.css";

import {useContext} from "react";
import { Context } from "../../utils/context";

import products from '../../db.json';

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

const Cart = ({setShowCart}) => {
    const {cartItems, cartSubTotal} = useContext(Context);

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">close</span>
                </span>
            </div>

            {!cartItems?.length && (
                <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button className="return-cta">Return to ShopKart</button>
                </div>
            )}

            {!!cartItems?.length && (
                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal: </span>
                            <span className="total">&#8377;{cartSubTotal}</span>
                        </div>

                        <div className="button">
                            <button className="checkout-cta">
                                Place Order
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
};

export default Cart;