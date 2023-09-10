import React from "react";
import "../styles/Footer.css";
import MapWhite from "../assets/images/map-white.png";
import PhoneWhite from "../assets/images/phone-white.png";
import TwitterWhite from "../assets/images/twitter-white.png";
import FacebookWhite from "../assets/images/facebook-white.png";
import LinkedinWhite from "../assets/images/linkedin-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-ul">
        <li className="footer-li">Страницы</li>
        <li className="footer-li">Главная</li>
        <li className="footer-li">Продукты</li>
        <li className="footer-li">Цены</li>
        <li className="footer-li">О нас</li>
        <li className="footer-li">Контакты</li>
      </ul>
      <ul className="footer-ul">
        <li className="footer-li">Tomothy</li>
        <li className="footer-li">Eleanor Edwards</li>
        <li className="footer-li">Ted Robertson</li>
        <li className="footer-li">Jennie Mckinney</li>
        <li className="footer-li">Gloria Richards</li>
        <li className="footer-li">Annete Russill</li>
      </ul>
      <ul className="footer-ul">
        <li className="footer-li">Jane Black</li>
        <li className="footer-li">Eleanor Edwards</li>
        <li className="footer-li">Ted Robertson</li>
        <li className="footer-li">Jennie Mckinney</li>
        <li className="footer-li">Gloria Richards</li>
        <li className="footer-li">Annete Russill</li>
      </ul>
      <div className="footer-aside">
        <div className="footer-icon-wrapper">
          <img src={MapWhite} alt="MapWhite изображение" />
          <p>7480 Mockingbird Hill GA</p>
        </div>
        <div className="footer-icon-wrapper">
          <img src={PhoneWhite} alt="PhoneWhite изображение" />
          <p>(239) 555-0108</p>
        </div>
        <div className="footer-social-icons">
          <img src={TwitterWhite} alt='TwitterWhite изображение' />
          <img src={FacebookWhite} alt='FacebookWhite изображение' />
          <img src={LinkedinWhite} alt='LinkedinWhite изображение' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
