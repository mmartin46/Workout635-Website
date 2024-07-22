import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageCarousel from '../general/PageCarousel';

import Highlights from '../general/Highlight';
import './Card.scss';
import '../general/Session.scss';
class Topic {
    constructor(caption, smallerCaption, src) {
        this.caption = caption;
        this.smallerCaption = smallerCaption;
        this.src = src;
    }
}

class Highlight {
    constructor(url, title, caption, redirect) {
        this.url = url;
        this.title = title;
        this.caption = caption;
        this.redirect = redirect;
    }
}

const MainLayout = () => {
    const topics = [
        new Topic("Starts With You", "$14.99 a month", "/mi.png"),
        new Topic("Starts With You", "$14.99 a month", "/mi.png")
    ];

    const highlights = [
        new Highlight("url('/public/metal_0.png')", "Personal Training", "Starting at $90.00", "/training"),
        new Highlight("url('/public/yoga.jpg')", "Yoga Classes", "Starting at $30.00", "/yoga"),
        new Highlight("url('/public/smith.jpg')", "Bootcamps", "Starting at $40.00", "/bootcamp")
    ];


    return (
        <>
            <PageCarousel topics={topics} />
            <div className="top-pad">
                <Highlights highlights={highlights} />
            </div>
            <div className="next-section" style={{}}>
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

export default MainLayout;