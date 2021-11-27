import React from 'react';
import './style.css';
import aboutUsIMg from './aboutUs.png';

const AboutUs = () => (
  <div className="about__us">
    <div className="about__left">
      <img src={aboutUsIMg} alt="about-us" />
    </div>
    <div className="about__right">
      <h1 className="about__header">About us</h1>
      <p className="about__paragraph">
        This application created to help people how cant went to the clinic,
        start reservation online by one of our clinic by choosing the doctor you
        want from the clinic beside that you can add the appointment to our
        database and our back office well call you soon.
      </p>
    </div>
  </div>
);
export default AboutUs;