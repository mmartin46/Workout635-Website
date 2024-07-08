// John 3:5
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageCarousel from './components/general/PageCarousel';
import Footer from './components/general/Footer';

const MainLayout = () => {
    return (
        <>
            <PageCarousel />
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