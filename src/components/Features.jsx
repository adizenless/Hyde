import React from "react";
import "../styles/Features.css";
import FeaturesIcon1 from "../assets/images/features-icon-1.png";
import FeaturesIcon2 from "../assets/images/features-icon-2.png";
import FeaturesIcon3 from "../assets/images/features-icon-3.png";
import Meetings from "../assets/images/meetings.jpg";

const Features = () => {
  return (
    <section className="features">
      <h1 className="features-title">Функции</h1>
      <h2 className="features-subtitle">
        Большинство календарей предназначен для команд. Slate создан для
        фрилансеров
      </h2>
      <div className="features-grid">
        <div className="features-grid-item">
          <img src={FeaturesIcon1} alt="Изображение иконки Features" />
          <h2 className="features-grid-item-title">
            Возможности OpenType Переменный шрифты
          </h2>
          <p className="features-grid-item-paragraph">
            Slate поможет вам увидеть, как еще много дней тебе нужно работать,
            чтобы достичь своего финансового целя.
          </p>
        </div>
        <div className="features-grid-item">
          <img src={FeaturesIcon2} alt="Изображение иконки Features" />
          <h2 className="features-grid-item-title">
            Проектируй с реальными данными
          </h2>
          <p className="features-grid-item-paragraph">
            Slate поможет вам увидеть, как еще много дней тебе нужно работать,
            чтобы достичь своего финансового целя.
          </p>
        </div>
        <div className="features-grid-item">
          <img src={FeaturesIcon3} alt="Изображение иконки Features" />
          <h2 className="features-grid-item-title">
            Самый быстрый способ действовать
          </h2>
          <p className="features-grid-item-paragraph">
            Slate поможет вам увидеть, как еще много дней тебе нужно работать,
            чтобы достичь своего финансового целя.
          </p>
        </div>
      </div>
      <div className="features-meetings-img-wrapper">
        <img
          src={Meetings}
          alt="Изображение собрание людей в конференц зале"
          className="features-meetings-img"
        />
      </div>
    </section>
  );
};

export default Features;
