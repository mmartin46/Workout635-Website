// John 3:5
import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import './MemberCard.scss';
import { useNavigate } from "react-router-dom";


const MembershipLayout = () => {
    const [memberships, setMemberships] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMemberTypes = () => {
            $.ajax({
                url: `${import.meta.env.VITE_API_URL}/Memberships`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setMemberships(res);
                    console.log('Membership Types-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching membership types:', error);
                }
            });
        };

        getMemberTypes();
    }, []);

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
                    <h6>Not sure what to look for? Check out all our memberships below!</h6>
                </div>
                <br/>
                {memberships &&
                    memberships.map((membership) => {
                        const price = membership.Price || membership.price;
                        const joinerFee = membership.JoinerFee || membership.joinerFee;
                        const allowGuest = membership.AllowGuest !== undefined ? membership.AllowGuest : membership.allowGuest;
                        
                        return (
                            <div className="col member-card" key={membership.Id || membership.id || membership._id}>
                                <h3>{membership.Type || membership.type}</h3>
                                <div>
                                    <h5><b>${price ? price.toFixed(2) : '0.00'}</b> / per month</h5>
                                    <div>
                                        <h5>Plan Includes:</h5>
                                        <h6>Joiners Fee: ${joinerFee ? joinerFee.toFixed(2) : '0.00'}</h6>
                                        <h6>Allow Guest: {allowGuest ? "Yes" : "No"}</h6>
                                    </div>
                                    <div onClick={navigateToContact} className="click-more">
                                        <h4>Contact Us</h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}

export default MembershipLayout;