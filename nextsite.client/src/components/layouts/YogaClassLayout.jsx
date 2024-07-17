// John 3:5
import { useEffect, useState } from 'react';
import Topic from '../general/Topic';

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
                <div>
                    {yogaClasses && yogaClasses.map((yoga) => (
                        <div key={yoga.id}>
                            <h3>{yoga.name}</h3>
                            <h3>{yoga.duration}</h3>
                            <h3>{yoga.intensity}</h3>
                            <img src={yoga.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 

export default YogaClassLayout;