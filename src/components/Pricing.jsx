import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h1 className="pricing-title">Цены</h1>
      <h2 className="pricing-subtitle">
        Большинство календарей предназначены для команд. <br /> Slate создан для фрилансеров
      </h2>
      <div className="pricing-grid">
        <div className="pricing-grid-item">
          <h2 className="pricing-grid-item-title">БЕСПЛАТНЫЙ</h2>
          <p className="pricing-grid-item-paragraph">Организуйте все приложения вручную</p>
          <div className="pricing-grid-item-price-wrapper">
            <span className="pricing-grid-item-price">0</span>
            <div className="pricing-grid-item-price-child-wrapper">
              <span className="pricing-grid-item-price-child-dollar-sign">$</span>
              <span className="pricing-grid-item-price-child-span-text">В месяц</span>
            </div>
          </div>
          <ul className="pricing-grid-item-ul">
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
          </ul>
          <button className="pricing-grid-item-button">Заказать Сейчас</button>
        </div>

        <div className="pricing-grid-item-middle">
          <h2 className="pricing-grid-item-title-middle">СТАНДАРТНЫЙ</h2>
          <p className="pricing-grid-item-paragraph-middle">Организуйте все приложения вручную</p>
          <div className="pricing-grid-item-price-wrapper-middle">
            <span className="pricing-grid-item-price-middle">0</span>
            <div className="pricing-grid-item-price-child-wrapper-middle">
              <span className="pricing-grid-item-price-child-dollar-sign-middle">$</span>
              <span className="pricing-grid-item-price-child-span-text-middle">В месяц</span>
            </div>
          </div>
          <ul className="pricing-grid-item-ul-middle">
            <li className="pricing-grid-item-li-middle">Ценообразование</li>
            <li className="pricing-grid-item-li-middle">Ценообразование</li>
            <li className="pricing-grid-item-li-middle">Ценообразование</li>
            <li className="pricing-grid-item-li-middle">Ценообразование</li>
            <li className="pricing-grid-item-li-middle">Ценообразование</li>
          </ul>
          <button className="pricing-grid-item-button-middle">Заказать Сейчас</button>
        </div>

        <div className="pricing-grid-item">
          <h2 className="pricing-grid-item-title">БИЗНЕС</h2>
          <p className="pricing-grid-item-paragraph">Организуйте все приложения вручную</p>
          <div className="pricing-grid-item-price-wrapper">
            <span className="pricing-grid-item-price">99</span>
            <div className="pricing-grid-item-price-child-wrapper">
              <span className="pricing-grid-item-price-child-dollar-sign">$</span>
              <span className="pricing-grid-item-price-child-span-text">В месяц</span>
            </div>
          </div>
          <ul className="pricing-grid-item-ul">
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
            <li className="pricing-grid-item-li">Ценообразование</li>
          </ul>
          <button className="pricing-grid-item-button">Заказать Сейчас</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
