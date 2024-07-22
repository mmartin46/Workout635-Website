import './Topic.scss';
import 'bootstrap/dist/css/bootstrap.css';



const Topic = ({ title, caption, className }) => {
    const clsName = `header ${className}`;

    return (
        <div className={clsName}>
            <h1 className="text-center">{title}</h1>
            <h6>{caption}</h6>
        </div>
    )
};

export default Topic;