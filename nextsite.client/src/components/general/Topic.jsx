import './Topic.scss';
import 'bootstrap/dist/css/bootstrap.css';



const Topic = ({ title, caption }) => {

    return (
        <div className="header">
            <h1 className="text-center">{title}</h1>
            <h6>{caption}</h6>
        </div>
    )
};

export default Topic;