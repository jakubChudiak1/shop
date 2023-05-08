import './Review.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
const Review = ()=>{

    return(
        <section id='review'>
            <Container>
                <h1>Review</h1>

                <form action="" className='review-form'>
                    <div className='form-inputs'>
                        <Col lg="6" md="6" sm="6" xs="12" className='inputs'>
                            <label htmlFor="name">Your Name</label>
                            <input id='name' type="text" required />
                        </Col>
                        <Col lg="6"  md="6" sm="6" xs="12" className='inputs'>
                            <label htmlFor="email">Your Email</label>
                            <input id='email' type="email" required />
                        </Col>
                    </div>
                    <div className='form-inputs'>
                        <Col lg="6"  md="6" sm="6" xs="12" className='inputs'>
                            <label htmlFor="age">Your Age</label>
                            <input id='age' type="number" min={15} max={105} required />
                        </Col>
                        <Col lg="6"  md="6" sm="6" xs="12" className='inputs'>
                            <label htmlFor="email">Your Phone Number</label>
                            <input id='phone' type="phone" required />
                        </Col>
                    </div>
                    
                    <div className='form-inputs'>
                        <Col lg="12"  md="12" sm="12" xs="12" className='inputs'>
                            <label htmlFor="review-text">Your Review</label>
                            <textarea name="review" id="review-text"  rows="10" required></textarea>
                        </Col>
                    </div>
                    <button id='review-btn'>Submit Your Review</button>
                </form>

            </Container>
        </section>
    );

};
export default Review;