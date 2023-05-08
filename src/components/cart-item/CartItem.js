import React, { useContext } from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({item})=>{
    const {id,title,image,price,amount} = item;
    const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
    return(
        <div className='cart-item' key={id}>
            <Link to={`/product/${id}`}>
                <img src={image} alt="" className='cart-item-image'/>
            </Link>
                <div className='cart-item-desc'>
                    <h3>{title}</h3>
                    <div className='price'>
                    <div className='amount'> 
                        <FontAwesomeIcon icon={faPlus} size='2xl' className='icon' onClick={()=>increaseAmount(id,item)}/>
                        <p>{amount}</p>
                        <FontAwesomeIcon icon={faMinus} size='2xl' className='icon' onClick={()=>decreaseAmount(id,item)}/>
                    </div>
                        <p className='total-price'>{`$ ${(price * amount).toFixed(2)}`}</p>
                    </div>
                    
                </div>
                <div className='cart-icons'>
                    <FontAwesomeIcon icon={faXmark} size='2xl' onClick={()=>removeFromCart(id)}/>
                    
                </div>
        </div>
    );
};
export default CartItem;