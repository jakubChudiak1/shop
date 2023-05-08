import './Hero.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import WomanInCart from '../../assets/images/woman-in-cart.png'
const Hero = ()=>{

    return(
        <Container>
            <section id='hero'>
            <div className="hero-content">
            <h4>Limited Only For Winter</h4>
            <h1>Fashion</h1>
               
                <button className="hero-btn">Explore Now</button>
            </div>

            <div className="hero-cart">
                <img src={WomanInCart} alt="Woman-in-Cart" />
            </div>

            </section>
        </Container>
    );
};
export default Hero;