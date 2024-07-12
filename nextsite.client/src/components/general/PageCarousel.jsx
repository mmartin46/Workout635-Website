import Carousel from 'react-bootstrap/Carousel';
import LinkButton from '../buttons/LinkButton.jsx';
import './PageCarousel.scss'




const PageCarousel = ({ topics }) => {
    return (
        <div className="carousel">
            <Carousel>
                
                {topics.map((topic, index) => (
                    <Carousel.Item interval={20000000} key={index}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={topic.src}
                        />
                        <Carousel.Caption>
                            <div className="gym-cap">
                                <h2 className="display-3">{topic.caption}</h2>
                                <h6 className="display-6">{topic.smallerCaption}</h6>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
};

export default PageCarousel;