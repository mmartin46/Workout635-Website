import './HighestHeader.scss';
import PlainLink from '../buttons/PlainLink';

const HighestHeader = () => {
    return (
        <div className="f-horizontal-ul">
            <ul className="f-nav-bar">
                <li>
                    <PlainLink
                        to="/login"
                        fontColor="white">Login
                    </PlainLink>
                </li>
                <li>
                    <PlainLink
                        to="/create"
                        fontColor="white">
                        Register
                    </PlainLink>
                </li>

            </ul>
        </div>
    )
};

export default HighestHeader;