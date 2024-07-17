// John 3:5
import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import './YogaClassLayout.scss';

const YogaClassLayout = () => {
    const [yogaClasses, setYogaClasses] = useState(null);

    useEffect(() => {
        const getData = () => {
            $.ajax({
                url: "https://localhost:44314/Yoga",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setYogaClasses(res);
                    console.log(yogaClasses);
                }
            });
        };

        getData();
    }, [yogaClasses]);

    return (
        <div>
            <Topic
                title="Yoga Classes"
                caption="The fence was confused about whether it was supposed to keep things in or keep things out." />


            <div>
                <div className="row">
                    {yogaClasses && yogaClasses.map((yoga) => (
                        <div className="col serv-div" key={yoga.id}>
                            <img src={yoga.image} />
                            <div>
                                <h2>{yoga.name}</h2>
                                <h5>{yoga.description}</h5>
                                <h5>Duration: {yoga.duration}</h5>
                                <h5>Intensity: {yoga.intensity}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 

export default YogaClassLayout;