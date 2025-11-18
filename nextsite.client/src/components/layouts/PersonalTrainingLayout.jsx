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
                url: `${import.meta.env.VITE_API_URL}/Trainers`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',

                success: function (res) {
                    setTrainers(res);
                    console.log('Trainers-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching trainers:', error);
                }
            });
        };

        getTrainers();
    }, []);


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
                            <div className="col serv-div" key={trainer.Id || trainer.id || trainer._id}>
                                <img src={trainer.Headshot || trainer.headshot} alt={`${trainer.FirstName || trainer.firstName} ${trainer.LastName || trainer.lastName}`} />
                                <div>
                                    <h2>{trainer.FirstName || trainer.firstName} {trainer.LastName || trainer.lastName}</h2>
                                    <h5>Personal Trainer</h5>
                                    <h5>{trainer.PhoneNumber || trainer.phoneNumber}</h5>
                                    <h5>{trainer.Email || trainer.email}</h5>
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