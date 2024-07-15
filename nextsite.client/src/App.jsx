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
    return (
        <div>
        </div>
    )
}

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
            <div className="header">
                <h1 className="text-center">Personal Trainers</h1>
                <h6>He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him.</h6>
            </div>
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