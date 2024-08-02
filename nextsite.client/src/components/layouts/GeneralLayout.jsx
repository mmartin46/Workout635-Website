// Mark 16:16
import './GeneralLayout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const GeneralLayout = ({ title, caption }) => {
    return (
        <div className="centered-div display-4">
            <h1>{title}</h1>
            <h6>{caption}</h6>
        </div>
    );
};

export default GeneralLayout;