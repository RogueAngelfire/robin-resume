
import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../media/phone.svg';
import email from '../media/emailme.svg';
import location from '../media/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.092822052942!2d0.5666973362347096!3d51.45474789022751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d1df3c052123%3A0x68bc74eb360e0f12!2s6%20Marsh%20Cres%2C%20High%20Halstow%2C%20Rochester%20ME3%208TJ!5e0!3m2!1sen!2suk!4v1628001369556!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+44 07966013124'} text2={'+44 634 251302'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'info@robincollins.co.uk'} text2={'rogueangelimages@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Rochester, Kent'} text2={'United Kingdom'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;