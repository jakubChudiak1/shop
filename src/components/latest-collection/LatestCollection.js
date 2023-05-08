import './LatestCollection.css';
import Container from 'react-bootstrap/esm/Container';
import Item1 from '../../assets/images/poster-1.png';
import Item2 from '../../assets/images/poster-2.png';
import Item3 from '../../assets/images/poster-3.png';

const LatestCollection = ()=>{

    return(
        <section id='latest-collection'>
            <Container>
                <h1 className='collection-header'>Latest Collection</h1>
                <div className='collection-content'>
                    <div className='item item-1'>
                        <img src={Item1}alt="" />
                        <div className='item-content'>
                            <span>Trend 2021</span>
                            <h2>Women's skirt</h2>
                        </div>
                    </div>
                    <div className='item item-2'>
                        <img src={Item2}alt="" />
                        <div className='item-content'>
                            <span>Trend 2021</span>
                            <h2>Women's skirt</h2>
                        </div>
                    </div>
                    <div className='item item-3'>
                        <img src={Item3}alt="" />  
                        <div className='item-content'>
                            <span>Trend 2021</span>
                            <h2>Women's skirt</h2>
                        </div> 
                    </div>
                    
                   
                </div>
            </Container>
            
        </section>
    )

}
export default LatestCollection;