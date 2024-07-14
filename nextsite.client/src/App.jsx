// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import Footer from './components/general/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/general/Header';
import Highlights from './components/general/Highlight';

class Topic {
    constructor(caption, smallerCaption, src) {
        this.caption = caption;
        this.smallerCaption = smallerCaption;
        this.src = src;
    }
}

class Highlight {
    constructor(url, title, caption) {
        this.url = url;
        this.title = title;
        this.caption = caption;
    }
}

const ScreenRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/training" element={<PersonalTrainingLayout/> }/>
        </Routes>
    );
}

const PersonalTrainingLayout = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const getTrainers = () => {

            $.ajax({
                url: "https://localhost:44314/Trainers",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',

                success: function (res) {
                    setTrainers(res);
                    console.log(trainers);
                }
            });
        };

        getTrainers();
    }, [trainers]);


    return (
        <div>
            <h2 style={{ color: 'black' }}>Hello World</h2>
            <div className="row"> 
                {trainers.map((index, trainer) => (
                    <div className="col" key={index}>
                        <h1>{trainer.firstName} {trainer.lastName}</h1>
                        <img src={trainer.headshot} />
                        <h6>{trainer.phoneNumber}</h6>
                        <h6>{trainer.email}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

const MainLayout = () => {
    const topics = [
        new Topic("Starts With You", "$14.99 a month", "/mi.png"),
        new Topic("Starts With You", "$14.99 a month", "/mi.png")
    ];

    const highlights = [
        new Highlight("url('/public/metal_0.png')", "Personal Training", "Starting at $90.00"),
        new Highlight("url('/public/yoga.jpg')", "Yoga Classes", "Starting at $30.00"),
        new Highlight("url('/public/smith.jpg')", "Bootcamps","Starting at $40.00")
    ];


    return (
        <>
            <PageCarousel topics={topics} />
            <Highlights highlights={highlights} />
            <div className="next-section" style={{ }}>
                <div>
                    <div className="row">
                        <h1>No Commitment, No Problem!</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className="topic-img" src="/public/handshake.png" />
                        </div>
                        <div className="col">
                            <ul>
                                <li><h4>Three day free guest pass</h4></li>
                                <li><h4>Memberships Start At $14.99</h4></li>
                                <li><h4>Membership Cancellation Anytime</h4></li>
                                <li><h4>No Hidden Fees</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
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