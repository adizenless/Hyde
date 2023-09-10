import React, { useState } from "react";
import "../styles/Header.css";
import Menu from "../assets/images/menu.png";
import Logo from "../assets/images/logo.png";
import Twitter from "../assets/images/twitter-white.png";
import Facebook from "../assets/images/facebook-white.png";
import Linkedin from "../assets/images/linkedin-white.png";
import Close from "../assets/images/close.png";
import { motion } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="header">
      <div className="header-menu-img-wrapper">
        <img
          src={Menu}
          alt="Menu изображение"
          className="header-menu-img"
          onClick={() => setToggleMenu(true)}
        />
      </div>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>Главная</li>
          <li>Продукты</li>
          <li>Цены</li>
          <li>О нас</li>
        </ul>
      </nav>
      <div>
        <img src={Logo} alt="Logo изображения сайта" className="header-logo" />
      </div>
      <div className="header-icons">
        <img src={Twitter} alt="Twitter изображение иконки" />
        <img src={Facebook} alt="Facebook изображение иконки" />
        <img src={Linkedin} alt="Linkedin изображение иконки" />
      </div>
      {toggleMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.3 }}
          className="header-mobile"
        >
          <div>
            <img
              src={Close}
              alt="Close иконка изображение"
              className="header-mobile-close-img"
              onClick={() => setToggleMenu(false)}
            />
          </div>
          <nav>
            <ul className="header-mobile-ul">
              <li>Главная</li>
              <li>Продукты</li>
              <li>Цены</li>
              <li>О нас</li>
            </ul>
          </nav>
          <div className="header-mobile-icons">
            <img src={Twitter} alt="Twitter изображение иконки" />
            <img src={Facebook} alt="Facebook изображение иконки" />
            <img src={Linkedin} alt="Linkedin изображение иконки" />
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
