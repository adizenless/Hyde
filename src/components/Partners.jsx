import React from "react";
import "../styles/Partners.css";
import Partners1 from "../assets/images/partners-1.png";
import Partners2 from "../assets/images/partners-2.png";

const Partners = () => {
  return (
    <section className="partners">
      <h1>Партнёры</h1>
      <h2>
        Большинство каледарей предназначены для команд. <br /> Slate создан для
        фрилансеров
      </h2>
      <div className="partners-img-wrapper">
        <img src={Partners1} alt="Partners изображение" />
        <img src={Partners2} alt="Partners изображение" />
      </div>
    </section>
  );
};

export default Partners;
