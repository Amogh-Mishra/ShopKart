import Product from "./Product/Product";
import products from '../../db.json';

import "./Products.css";

const Products = () => {
    return (
        <div className="products-container">
            <div className="products">
                {products?.products?.map(item => (
                    <Product 
                        key={item.id} 
                        id={item.id} 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        amount={item.amount}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;