import './Header.scss';
import PlainLink from '../buttons/PlainLink';
const Header = () => {
    return (
        <div className="horizontal-ul">
            <ul className="nav-bar">
                <li><a>Products</a></li>
                <li>
                    <PlainLink
                    to="/"
                    fontColor="white">
                    About Us
                    </PlainLink>
                </li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
};

export default Header;