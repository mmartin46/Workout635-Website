import Topic from "../general/Topic";
import './ContactLayout.scss';
const ContactLayout = () => {
    return (
        <div>
            <Topic title="Contact Us"
                caption="Have any questions about our products?" />

            <div className="contact-form">
                <div className="row">
                    <div className="col">
                        <h4>Name</h4>
                        <input type="text" />
                    </div>
                    <div className="col">
                        <h4>Email</h4>
                        <input type="email" />
                    </div>
                </div>
                <div className="padded">
                    <div className="row">
                        <h4>Header</h4>
                        <input type="text" />
                    </div>
                    <div className="row">
                        <h4 >Message</h4>
                        <textarea className="msg"/>
                    </div>
                    <div className="row">
                        <button className="contact-btn" type="submit">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactLayout;