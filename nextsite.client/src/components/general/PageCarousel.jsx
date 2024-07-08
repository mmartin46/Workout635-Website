import Carousel from 'react-bootstrap/Carousel';
import LinkButton from '../buttons/LinkButton.jsx';
import './PageCarousel.scss'


const PageCarousel = () => {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item interval={20000000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="/mi.png"
                    />
                    <Carousel.Caption>
                        <div className="gym-cap">
                            <h2 className="display-3">Starts With You</h2>
                            <h4 className="display-6">$14.99 a month</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={20000000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="/mi.png"
                    />
                    <Carousel.Caption>
                        <div className="gym-cap">
                            <h2 className="display-3">Starts With You</h2>
                            <h4 className="display-6">$14.99 a month</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default PageCarousel;