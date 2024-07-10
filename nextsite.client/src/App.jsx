// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import Footer from './components/general/Footer';

import './Icon.scss';

const MainLayout = () => {

    return (
        <>
            <PageCarousel />
            <div id="choices" className="row justify-content-center align-items-center">
                <div className="col icon tint" style={{ background: "url('/public/metal_0.png')"}}>
                    <h3>Weights</h3>
                    <h6>Starting at $10.00</h6>
                </div>
                <div className="col icon tint" style={{ background: "url('/public/yoga.jpg')" }}>
                    <h3>Bootcamps</h3>
                    <h6>Starting at $30.00</h6>
                </div>
                <div className="col icon tint" style={{ background: "url('/public/smith.jpg')" }}>
                    <h3>Smith Machines</h3>
                    <h6>Starting at $300.00</h6>
                </div>
            </div>

        </>
    );
}

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
            <MainLayout />
            <Footer/>
        </>
    );
}

export default App;