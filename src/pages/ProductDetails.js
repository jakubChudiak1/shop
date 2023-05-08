import React,{useContext} from "react";
import './ProductDetails.css'
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Container from "react-bootstrap/esm/Container";
const ProductDetails = ()=>{
    const {id} = useParams();
    const {products} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);

    const product = products.find((item)=>{
        return item.id ===parseInt(id);
    })
    if(!product){
        return( 
        <section id="lazy-load">Loading...</section>
        );
    };
    const {title,price,description,image} = product;
    return(
        <section id="product">
            <Container>
               <div className="about-product">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="about-product-desc">
                        <h3>{title}</h3>
                        <span className="product-price">{price}$</span>
                        <p>{description}</p>
                        <button className="product-btn" onClick={()=>addToCart(product,product.id)}>Add to cart</button>
                    </div>
               </div>
            </Container>
            
        </section>
    );
};
export default ProductDetails;