// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import Footer from './components/general/Footer';
import './Session.scss'
import './Icon.scss';
import Header from './components/general/Header';

class Topic {
    constructor(caption, smallerCaption, src) {
        this.caption = caption;
        this.smallerCaption = smallerCaption;
        this.src = src;
    }
}


const MainLayout = () => {
    const topics = [
        new Topic("Starts With You", "$14.99 a month", "/mi.png"),
        new Topic("Starts With You", "$14.99 a month", "/mi.png")
    ];


    return (
        <>
            <PageCarousel />
            <div id="choices" className="row justify-content-center align-items-center">
                <div className="col icon tint" style={{ background: "url('/public/metal_0.png')"}}>
                    <h3>Personal Training</h3>
                    <h6>Starting at $90.00</h6>
                </div>
                <div className="col icon tint" style={{ background: "url('/public/yoga.jpg')" }}>
                    <h3>Yoga Classes</h3>
                    <h6>Starting at $30.00</h6>
                </div>
                <div className="col icon tint" style={{ background: "url('/public/smith.jpg')" }}>
                    <h3>Bootcamps</h3>
                    <h6>Starting at $40.00</h6>
                </div>
            </div>

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
        <>
            <Header/>
            <MainLayout />
            <Footer/>
        </>
    );
}

export default App;