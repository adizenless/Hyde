import React from "react";
import "../styles/Prototyping.css";
import PrototypingImg from "../assets/images/prototyping.png";

const Prototyping = () => {
  return (
    <section className="prototyping">
      <div className="prototyping-item">
        <img
          src={PrototypingImg}
          alt="Prototyping изображение"
          className="prototyping-img"
        />
      </div>
      <div className="prototyping-item">
        <p className="prototyping-paragraph-1">У вас под рукой</p>
        <h1 className="prototyping-title">Молниеносное прототипирование</h1>
        <p className="prototyping-paragraph-2">
          Подписывайтесь на нашу новостную рассылку
        </p>
        <p className="prototyping-paragraph-3">Доступен эксклюзив на HYDE</p>
        <div className="prototyping-input-wrapper">
          <input placeholder="Ваш email" className="prototyping-input" />
          <button className="prototyping-button">Подписаться</button>
        </div>
      </div>
    </section>
  );
};

export default Prototyping;
