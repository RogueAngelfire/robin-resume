
import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../media/phone.svg';
import email from '../media/emailme.svg';
import location from '../media/location.svg';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+44 07966013124'} text2={'+44 634 251302'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'info@robincollins.co.uk'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Rochester, Kent'} text2={'United Kingdom'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;