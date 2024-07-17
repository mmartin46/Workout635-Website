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


const ScreenRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/training" element={<PersonalTrainingLayout />} />
            <Route path="/memberships" element={<MembershipLayout />} />
            <Route path="/yoga" element={<YogaClassLayout/> } />
        </Routes>
    );
}

const YogaClassLayout = () => {
    const [yogaClasses, setYogaClasses] = useState(null);

    useEffect(() => {
        const getData = () => {
            $.ajax({
                url: "https://localhost:44314/Yoga",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setYogaClasses(res);
                    console.log(yogaClasses);
                }
            });
        };

        getData();
    }, [yogaClasses]);

    return (
        <div>
            <Topic
                title="Yoga Classes"
                caption="The fence was confused about whether it was supposed to keep things in or keep things out."/>
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