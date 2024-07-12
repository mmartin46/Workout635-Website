
import './Icon.scss';
import './Session.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Highlights = ({ highlights }) => {


    return(
        <div id="choices" className="row justify-content-center align-items-center">
            {highlights.map((highlight, index) => (
                <div key={index} className="col icon tint" style={{ background: `${highlight.url}` }}>
                    <h3>{highlight.title}</h3>
                    <h6>{highlight.caption}</h6>
                </div>
            ))}
        </div>
    );
};

export default Highlights;