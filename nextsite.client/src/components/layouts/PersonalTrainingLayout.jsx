import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import Highlights from '../general/Highlight';
import './Card.scss';
import '../general/Session.scss';



const PersonalTrainingLayout = () => {
    const [trainers, setTrainers] = useState(null);

    useEffect(() => {
        const getTrainers = () => {

            $.ajax({
                url: "https://localhost:44314/Trainers",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',

                success: function (res) {
                    setTrainers(res);
                    console.log('Trainers-> ', trainers);
                }
            });
        };

        getTrainers();
    }, [trainers]);


    return (
        <div className="card-container">

            <Topic
                title="Personal Trainers"
                caption="It would have been a better night if the guys next to us weren't in the splash zone."
            />
            <div className="fadeUp">
                <div id="trainers" className="row">
                    {trainers && trainers.map((trainer) => (
                        <div className="mycard col" key={trainer.id}>
                            <h3>{trainer.firstName} {trainer.lastName}</h3>
                            <img src={trainer.headshot} />
                            <h5 style={{ opacity: 0.7 }}>Personal Trainer</h5>
                            <h6>{trainer.phoneNumber}</h6>
                            <h6>{trainer.email}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default PersonalTrainingLayout;