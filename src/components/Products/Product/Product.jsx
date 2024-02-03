import { useNavigate } from "react-router-dom";

import "./Product.css";

const Product = ({id, title, description, image, amount, rating}) => {
    const navigate = useNavigate();
    return (
        <div 
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail"> 
                <img 
                    src = {image} 
                    alt="product" 
                />
            </div>
            <div className="product-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{amount}</span><br/>
                <span className="rating">{rating}</span>
            </div>
        </div>
    )
};

export default Product;
