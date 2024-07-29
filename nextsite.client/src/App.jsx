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
import PersonalTrainingLayout from './components/layouts/PersonalTrainingLayout';
import MembershipLayout from './components/layouts/MembershipLayout';
import Topic from './components/general/Topic';
import YogaClassLayout from './components/layouts/YogaClassLayout';
import BootCampLayout from './components/layouts/BootcampLayout';
import ContactLayout from './components/layouts/ContactLayout';
import IntroductionLayout from './components/layouts/IntroductionLayout'; 
import CreateAccountLayout from './components/layouts/CreateAccountLayout';

const ScreenRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/training" element={<PersonalTrainingLayout />} />
            <Route path="/memberships" element={<MembershipLayout />} />
            <Route path="/yoga" element={<YogaClassLayout />} />
            <Route path="/bootcamp" element={<BootCampLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
            <Route path="/intro" element={<IntroductionLayout />} />
            <Route path='/create' element={<CreateAccountLayout/> }/>
        </Routes>
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