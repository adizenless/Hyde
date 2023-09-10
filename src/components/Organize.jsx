import React from "react";
import "../styles/Organize.css";
import Mockup from "../assets/images/mockup.png";

const Organize = () => {
  return (
    <section className="organize">
      <div>
        <h1 className="organize-title">Самый быстрый способ организовать</h1>
        <h2 className="organize-subtitle">
          Большинство календарей предназначены <br /> для команд. Slate создан
          для фрилансеров
        </h2>
      </div>
      <div>
        <img src={Mockup} alt="Mockup изображение" className="organize-img" />
      </div>
    </section>
  );
};

export default Organize;
