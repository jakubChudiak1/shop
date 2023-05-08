import React,{useContext} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../contexts/SidebarContext';
import { CartContext } from '../../contexts/CartContext';
import Logo from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';
const Header = (props)=>{
    const {isOpen,setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);
    return(
        <header id='header'>
            <Link to={'/'}>
                <img src={Logo} alt="logo" className='logo' />
            </Link>
            <div className='header-right'>
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='cart' onClick={()=>setIsOpen(!isOpen)}/>
                <p>{itemAmount}</p>
            </div>
        </header>
    );
};
export default Header;