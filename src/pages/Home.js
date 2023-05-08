import React,{useContext} from "react";
import './Home.css';
import {ProductContext} from '../contexts/ProductContext';
import Container from 'react-bootstrap/Container';
import Product from "../components/product/Product";
import Hero from '../components/hero/Hero';
import LatestCollection from "../components/latest-collection/LatestCollection";
import Review from "../components/review/Review";
const Home = (props)=>{

    const {products} = useContext(ProductContext);

    const filteredProducts = products.filter((item)=>{
        return item.category === "men's clothing" || item.category === "women's clothing"
    })
    console.log(filteredProducts);
    return(
        <>
            <Hero/>
            <LatestCollection/>
            <section id="products">

                <Container>
                    <h1 className="products-header">Products</h1>
                    <div className="products-list">
                        {filteredProducts.map((product)=>{
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </Container>
            </section>
            <Review/>
        </>
    );
};
export default Home;