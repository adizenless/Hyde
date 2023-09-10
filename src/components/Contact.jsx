import React from "react";
import "../styles/Contact.css";
import MapBlue from "../assets/images/map-blue.png";
import PhoneBlue from "../assets/images/phone-blue.png";
import MailBlue from "../assets/images/mail-blue.png";
import TwitterBlue from "../assets/images/twitter-blue.png";
import FacebookBlue from "../assets/images/facebook-blue.png";
import LinkedinBlue from "../assets/images/linkedin-blue.png";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Связаться с нами</h1>
      <h2 className="contact-subtitle">
        Большинство календарей предназначены для команд. Slate создан для
        фрилансеров
      </h2>
      <div className="contact-grid">
        <form className="contact-grid-item-form">
          <h2 className="contact-form-title">Напиши нам</h2>
          <input placeholder="Ваше Имя" className="contact-form-input" />
          <input placeholder="Ваш Email" className="contact-form-input" />
          <textarea
            placeholder="Вашe Сообщение"
            className="contact-form-textarea"
          />
          <button className="contact-form-button">Send</button>
        </form>
        <div className="contact-grid-item">
          <div className="contact-row-1">
            <div className="contact-row-1-child">
              <img
                src={MapBlue}
                alt="MapBlue изображение"
                className="contact-row-1-child-img"
              />
              <p className="contact-row-1-child-paragraph">
                One Apple Park Way, Cuperito, <br /> CA 95014, United States
              </p>
            </div>
            <div className="contact-row-1-child">
              <img
                src={PhoneBlue}
                alt="MapBlue изображение"
                className="contact-row-1-child-img"
              />
              <p className="contact-row-1-child-paragraph">(843) 555-0130</p>
            </div>
            <div className="contact-row-1-child">
              <img
                src={MailBlue}
                alt="MapBlue изображение"
                className="contact-row-1-child-img"
              />
              <p className="contact-row-1-child-paragraph">
                example@example.com
              </p>
            </div>
          </div>
          <div className="contact-row-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3319992906904!2d-122.01154692495018!3d37.3346480373924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2skg!4v1694278707157!5m2!1sen!2skg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-row-2-iframe"
            ></iframe>
          </div>
          <div className="contact-social-media-icons">
            <img
              src={TwitterBlue}
              alt="TwitterBlue изображение"
              className="contact-social-icon-img"
            />
            <img
              src={FacebookBlue}
              alt="FacebookBlue изображение"
              className="contact-social-icon-img"
            />
            <img
              src={LinkedinBlue}
              alt="LinkedinBlue изображение"
              className="contact-social-icon-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
