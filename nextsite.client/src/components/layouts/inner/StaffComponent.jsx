import { useState, useEffect } from 'react';
import '../IntroductionLayout.scss';


const StaffComponent = ({ className, controller }) => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = () => {
            $.ajax({
                url: `https://localhost:44314/${controller}`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setEmployees(res);
                }
            });
        };
        fetchEmployees();
    }, [employees]);

    return (
        <div className={className}>
            <div>
                <h1 className="display-4">Meet Our Team</h1>
                <h6>At Workout365, we ensure that our employees are available
                    during business hours to be able to take care of your workout
                    needs.</h6>
            </div>

            <div className="row">

                {employees && employees.map((employee) => (
                    <div className="col serv-div" key={employee.id}>
                        <img src={employee.headshot} />
                        <div>
                            <h4>{employee.firstName} {employee.lastName}</h4>
                            <h5>{employee.position}</h5>

                            <h6>{employee.phoneNumber}</h6>
                            <h6>{employee.email}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffComponent;