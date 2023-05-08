import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CartItem from '../cart-item/CartItem';
import { SidebarContext } from '../../contexts/SidebarContext';
import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import Product from '../product/Product';

const Sidebar = ()=>{
  const{isOpen,handleClose} = useContext(SidebarContext)
  const {cart,itemAmount,totalPrice} = useContext(CartContext); 
  return(
        <div id={isOpen ?'sidebar':''}>
            {isOpen&&<FontAwesomeIcon icon={faArrowRight} size='2xl' onClick={handleClose}/>}
            {isOpen && (
                <div className='cart-items'>
                    {cart.map((item) => {
                        return <CartItem item={item} key={item.id} />;
                    })}
                </div>)}
            {isOpen && (
                <div className='total'>
                    <p>
                        {`Total amount of items is:${itemAmount}`}
                    </p>
                    <p>
                        {`Total price is: $ ${totalPrice}`}
                    </p>
                </div>
            )}
        </div>
        
    );
};
export default Sidebar;