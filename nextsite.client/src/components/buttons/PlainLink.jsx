// John 3:5
import { Link } from 'react-router-dom';

const PlainLink = (props) => {

    const { to , fontColor, children, className } = props;

    const styledDelay = () => {
        setTimeout(() => { }, 300);
    };

    return (
        <Link to={to} style={{ textDecoration: 'none', color: fontColor }} onClick={styledDelay}>
            <span className={className}>
                {children}
            </span>
        </Link>
    );
};

export default PlainLink;

