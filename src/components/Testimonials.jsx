import React from "react";
import "../styles/Testimonials.css";
import IBMLogo from "../assets/images/ibm-logo.png";
import Avatar from "../assets/images/avatar.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="testimonials-title">Отзывы о нас</h1>
      <div className="testimonials-img-ibm-logo-wrapper">
        <img
          src={IBMLogo}
          alt="IBMLogo изображение"
          className="testimonials-img-ibm-logo"
        />
      </div>
      <h2 className="testimonials-subtitle">
        Большинство календарей предназначены для команд. Slate создан для
        фрилансеров
      </h2>
      <div className="testimonials-avatar-wrapper">
        <img
          src={Avatar}
          alt="Avatar изображение"
          className="testimonials-avatar-img"
        />
        <div className="testimonials-child-wrapper">
          <h2 className="testimonials-child-subtitle">Организатор</h2>
          <p className="testimonials-child-paragraph">UI Designer</p>
        </div>
      </div>
      <div className="testimonials-button-wrapper">
        <button className="testimonials-button">Больше отзывов</button>
      </div>
    </section>
  );
};

export default Testimonials;
