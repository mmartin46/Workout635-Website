import { useState, useEffect } from 'react';

const IntroductionLayout = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = () => {
            $.ajax({
                url: "https://localhost:44314/Employee",
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
        <>
            <div>
                <h1>Who We Are</h1>
                <h6>Here at Workout365, we are determined to make sure that our customers
                    receive the equipment they need in order to become successful with their
                    fitness goals. Our goal is to make sure that you are getting the best out of
                    your gym options for a reasonable financial investment.</h6>
            </div>
            <div className="text-center">
                <div>
                    <h1 className="display-4">Our Employees</h1>
                </div>

                <div className="row">
   
                    {employees && employees.map((employee) => (
                        <div className="col serv-div" key={employee.id}>
                            <img src={employee.headshot} />
                            <div>
                                <h2>{employee.firstName} {employee.lastName}</h2>
                                <h4>{employee.position}</h4>
                                <h5>Personal Trainer</h5>
                                <h5>{employee.phoneNumber}</h5>
                                <h5>{employee.email}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IntroductionLayout;