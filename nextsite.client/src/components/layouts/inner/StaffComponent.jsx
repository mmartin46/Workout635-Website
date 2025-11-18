import { useState, useEffect } from 'react';
import '../IntroductionLayout.scss';


const StaffComponent = ({ className, controller }) => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = () => {
            $.ajax({
                url: `${import.meta.env.VITE_API_URL}/${controller}`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setEmployees(res);
                    console.log('Employees-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching employees:', error);
                }
            });
        };
        fetchEmployees();
    }, [controller]);

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
                    <div className="col serv-div" key={employee.Id || employee.id || employee._id}>
                        <img src={employee.Headshot || employee.headshot} alt={`${employee.FirstName || employee.firstName} ${employee.LastName || employee.lastName}`} />
                        <div>
                            <h4>{employee.FirstName || employee.firstName} {employee.LastName || employee.lastName}</h4>
                            <h5>{employee.Position || employee.position}</h5>

                            <h6>{employee.PhoneNumber || employee.phoneNumber}</h6>
                            <h6>{employee.Email || employee.email}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffComponent;