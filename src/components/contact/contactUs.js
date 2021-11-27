import React from 'react';
import { Link } from 'react-router-dom';
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
          Our clinics open for you 24/24 and 7 days in week, Be save, and stay
          at home. get your online reservation in any doctor or any clinic what
          ever where you are.
        </p>
        <p className="res__phone">
          <PhoneFilled /> 0100.292.200.00
        </p>
        <p>
          codewithakki@gmail.com
        </p>
      </div>
      <div className="reservation__view">
        <img className="reservation__img" src={resImg} alt="banner" />
      </div>
    </div>
  </>
);

export default ContactUs;