import './Header.scss';

const Header = () => {
    return (
        <div className="horizontal-ul">
            <ul className="nav-bar">
                <li><a>Products</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
};

export default Header;