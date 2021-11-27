import React from 'react';
import { PhoneFilled } from '@ant-design/icons';
import resImg from './banner_img.png';
import 'typeface-playfair-display';
import './style.css';

const ContactUs = () => (
  <>
    <div className="reservation">
      <div className="reservation__box">
        <p className="res_paragraph">We Are Here For Your Care</p>
        <h2 className="res_heder">Best Care & Better Doctor</h2>
        <p className="detail__paragraph">
          Our services are open for you 24*7, Be safe, and stay
          at your home. Get your queries regarding your health solved online without stepping outside.
        </p>
        <p className="res__phone">
          <PhoneFilled /> 0100-292-200
        </p>
        <p>
          contact@digihealth.com
        </p>
      </div>
      <div className="reservation__view">
        <img className="reservation__img" src={resImg} alt="banner" />
      </div>
    </div>
  </>
);

export default ContactUs;