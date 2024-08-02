import './Header.scss';
import PlainLink from '../buttons/PlainLink';
const Header = () => {
    return (
        <div className="f-horizontal-ul">
            <ul className="f-nav-bar">
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
                <li>
                    <PlainLink
                    to="/contact"
                    fontColor="white">
                    Contact
                    </PlainLink>
                </li>
            </ul>
        </div>
    )
};

export default Header;