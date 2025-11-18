import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../IntroductionLayout.scss';

const EmployComponent = () => {
    const [opportunities, setOpportunities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOpportunities = () => {
            $.ajax({
                url: `${import.meta.env.VITE_API_URL}/Opportunities`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setOpportunities(res);
                    console.log('Opportunities-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching opportunities:', error);
                }
            });
        };

        fetchOpportunities();
    }, []);




    const navigateToContact = () => {
        setTimeout(() => {
            navigate("/contact");
        }, 300);
    };

    return (
        <div className="">
            <a href="#careers"></a>
            <div className="text-center">
                <h1 className="display-4">Looking For Oppurtunities</h1>
                <h6>Are you looking for employment oppurtunies. Feel free
                    to check out our available roles.</h6>
            </div>
            <div className="center-div">
                <div className="row spacing-50">
                    {opportunities && opportunities.map((opportunity) => (
                        <div key={opportunity.Id || opportunity.id || opportunity._id} className="col-sm-5 member-card">
                            <div>
                                <h3>{opportunity.Position || opportunity.position}</h3>
                                <h6>Hourly Rate: {opportunity.Salary || opportunity.salary}</h6>
                                <h6>YOE: {opportunity.YearsOfExperience || opportunity.yearsOfExperience}</h6>
                                <h6>Education: {opportunity.Requirements || opportunity.requirements}</h6>
                                <h6>Plus: {opportunity.Pluses || opportunity.pluses}</h6>
                            </div>
                            <div onClick={navigateToContact} className="click-more">

                                <h4>Contact Us</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default EmployComponent;