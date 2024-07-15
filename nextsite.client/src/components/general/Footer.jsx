import './Footer.scss';
import PlainLink from '../buttons/PlainLink';

const Footer = () => {
    return (
        <div className="footer">
            <div id="footer-contents" className="row">
                <div className="col">
                    <ul>
                        <li><h4>Products</h4></li>
                        <li>Memberships</li>
                        <li><PlainLink
                            to="/training"
                            fontColor="white">
                            Personal Training</PlainLink></li>
                        <li>Yoga Classes</li>
                        <li>Bootcamps</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li><h4>About Us</h4></li>
                        <li><PlainLink
                            to="/"
                            fontColor="white">Home</PlainLink></li>
                        <li>Introduction</li>
                        <li>Location</li>
                        <li>Our Work</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li><h4>Contact Us</h4></li>
                        <li>Contact</li>
                        <li>Careers</li>
                        <li>(Fake)</li>
                    </ul>
                </div>
            </div>
            <div id="social-media" className="horizontal-ul">
                <ul>
                    <li><a><img src="/facebook.png" /></a></li>
                    <li><a><img src="/twitter.png" /></a></li>
                    <li><a><img src="/google.png" /></a></li>
                </ul>
            </div>

            <p className="text-center">@Copyright 2024 Mitchell Martin</p>
        </div>
    );
};

export default Footer;