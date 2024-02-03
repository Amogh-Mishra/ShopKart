import "./SingleProduct.css";

import products from '../../db.json';

// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const { handleAddToCart } = useContext(Context);

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const decrement = () => {
        setQuantity((prevState) => {
            if(prevState === 1) return 1;
            return prevState - 1;
        });
    };

    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={
                            products.products[id-1].image
                        } 
                        alt="product" 
                    />
                </div>
                <div className="right">
                    <span className="name">{products.products[id-1].title}</span>
                    <span className="price">&#8377;{products.products[id-1].amount}</span>
                    <span className="desc">{products.products[id-1].description}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>

                        <button 
                            className="add-to-cart-button" 
                            onClick={() => {
                                handleAddToCart(products.products[id-1], quantity);
                                setQuantity(1);
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default SingleProduct;