
import './Icon.scss';
import './Session.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlainLink from '../buttons/PlainLink';

const Highlights = ({ highlights }) => {


    return(
        <div id="choices" className="row justify-content-center align-items-center">
            {highlights.map((highlight, index) => (
                <div key={index} className="col icon tint" style={{ background: `${highlight.url}` }}>
                    <PlainLink
                        to={highlight.redirect}
                        fontColor="white"
                    >
                        <h3>{highlight.title}</h3>
                        <h6>{highlight.caption}</h6>
                    </PlainLink>
                </div>
            ))}
        </div>
    );
};

export default Highlights;