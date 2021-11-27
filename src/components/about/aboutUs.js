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
        We at DigiHealth targets to reach as many as possible people around the globe and our main objective is to decrease spread of Covid 19 and reduce Social Gathering and providing Virtual help to everyone.The idea is to provide transformational medical technologies and services to meet the demand for increased access, enhanced quality, and more affordable healthcare for everyone. We transform physical touchpoints into touchless, seamless but still personal and trustworthy digital healthcare experiences.
      </p>
    </div>
  </div>
);
export default AboutUs;