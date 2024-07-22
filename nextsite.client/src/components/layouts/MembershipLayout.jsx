// John 3:5
import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import './MemberCard.scss';
import { useNavigate } from "react-router-dom";
import LinkButton from '../buttons/LinkButton';


const MembershipLayout = () => {
    const [memberships, setMemberships] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMemberTypes = () => {
            $.ajax({
                url: "https://localhost:44314/Memberships",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setMemberships(res);
                }
            });
        };

        getMemberTypes();
    }, [memberships]);

    const navigateToContact = () => {
        setTimeout(() => {
            navigate("/contact");
        }, 300);
    };


    return (
        <div >
            <Topic
                title="Membership Information"
                caption="They improved dramatically once the lead singer left." />
            <div className="main-padding member-container row" style={{ backgroundColor: "rgba(230,230,230,1)", padding: "30px" }}>
                <div className="text-center">
                    <h1 className="display-4">Our Membership Deals</h1>
                    <h6>At Workout365, we ensure that our employees are available
                        during business hours to be able to take care of your workout
                        needs.</h6>
                </div>
                {memberships &&
                    memberships.map((membership) => (
                        <div className="col member-card" key={membership.id}>
                            <h3>{membership.type}</h3>
                            <div>
                                <h5><b>${membership.price.toFixed(2)}</b> / per month</h5>
                                <div>
                                    <h5>Plan Includes:</h5>
                                    <h6>Joiners Fee: ${membership.joinerFee.toFixed(2)}</h6>
                                    <h6>Allow Guest: {membership.allowGuest ? "Yes" : "No"}</h6>
                                </div>
                                <div onClick={navigateToContact} className="click-more">

                                    <h4>Contact Us</h4>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default MembershipLayout;