// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import Footer from './components/general/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/general/Header';
import MainLayout from './components/layouts/MainLayout';
import Topic from './components/general/Topic';
import './MemberCard.scss';
import PersonalTrainingLayout from './components/layouts/PersonalTrainingLayout';

const ScreenRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/training" element={<PersonalTrainingLayout />} />
            <Route path="/memberships" element={<MembershipLayout/> }/>
        </Routes>
    );
}

const MembershipLayout = () => {
    const [memberships, setMemberships] = useState(null);

    useEffect(() => {
        const getMemberTypes = () => {
            $.ajax({
                url: "https://localhost:44314/Memberships",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setMemberships(res);
                    console.log('Memberships-> ', memberships);
                }
            });
        };

        getMemberTypes();
    }, [memberships]);


    return (
        <div>
            <Topic
                title="Membership Information"
                caption="They improved dramatically once the lead singer left." />
                <div className="member-container row">
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
                                    <div className="click-more">
                                        <h4>Contact Us</h4>
                                    </div>
                                </div>
                             </div>
                    ))}
                </div>
        </div>
    )
}


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <ScreenRoutes />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;