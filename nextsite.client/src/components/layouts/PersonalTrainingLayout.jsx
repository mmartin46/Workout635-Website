import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import Highlights from '../general/Highlight';
import './Card.scss';
import '../general/Session.scss';
import './YogaClassLayout.scss';



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
            <div className="main-padding ">
                <div className="gray text-center">
                    <div className="text-center">
                        <h1 className="display-4">Meet Our Trainers</h1>
                        <h6>At Workout365, we ensure that our employees are available
                            during business hours to be able to take care of your workout
                            needs.</h6>
                    </div>
                    <div className="row">
                        {trainers && trainers.map((trainer) => (
                            <div className="col serv-div" key={trainer.id}>
                                <img src={trainer.headshot} />
                                <div>
                                    <h2>{trainer.firstName} {trainer.lastName}</h2>
                                    <h5>Personal Trainer</h5>
                                    <h5>{trainer.phoneNumber}</h5>
                                    <h5>{trainer.email}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PersonalTrainingLayout;