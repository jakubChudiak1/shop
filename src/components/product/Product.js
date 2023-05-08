import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../contexts/CartContext';

const Product = ({product})=>{
    const{addToCart} = useContext(CartContext);
    const {id,image,category,title,price} = product;
    return(
        <div className='product'>
            <div className='icons'>
                <button onClick={()=>addToCart(product,id)}> <FontAwesomeIcon icon={faPlus} size='2xl'color='white'/></button>
                <Link to={`/product/${id}`} className='link'>
                <FontAwesomeIcon icon={faEye} size='2xl' />
                </Link>
            </div>
            <img src={image} alt={id} className='product-image' />
            <div className='products-description'>
                <span>{category}</span>
                <h3>{title}</h3>
                <p className='price'>{`$ ${price}`}</p>
            </div>
        </div>
    );
};
export default Product;