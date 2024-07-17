import './Header.scss';
import PlainLink from '../buttons/PlainLink';
const Header = () => {
    return (
        <div className="horizontal-ul">
            <ul className="nav-bar">
                <li>
                    <PlainLink
                    to="/memberships"
                    fontColor="white">Products
                    </PlainLink>
                </li>
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