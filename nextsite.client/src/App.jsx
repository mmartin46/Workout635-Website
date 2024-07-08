// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <ul>
                        <li><h4>Products</h4></li>
                        <li>Weights</li>
                        <li>Boot-Camps</li>
                        <li>Workout Routines</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li><h4>About Us</h4></li>
                        <li>Introduction</li>
                        <li>Location</li>
                        <li>Our Work</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li><h4>Contact Us</h4></li>
                        <li>Contact</li>
                        <li>(Fake)</li>
                        <li>(Fake)</li>
                    </ul>
                </div>
            </div>
            <div className="horizontal-ul">
                <ul>
                    <li><a><img src="/facebook.png" /></a></li>
                    <li><a><img src="/twitter.png" /></a></li>
                    <li><a><img src="/google.png" /></a></li>
                </ul>
            </div>

            <p className="text-center">@Copyright 2024 Mitchell Martin</p>
        </div>
    );
};


function App() {
    return (
        <>
            <div className="horizontal-ul">
                <ul className="nav-bar">
                    <li><a>Products</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div>
                <PageCarousel/>
            </div>
            <Footer/>
        </>
    );
}

export default App;