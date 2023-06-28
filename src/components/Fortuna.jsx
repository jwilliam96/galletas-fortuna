import React, { useState } from "react";
import Button from "./Button";

const Fortuna = ({ data }) => {
  const [position, setPosition] = useState(0);
  const [back, setBack] = useState(1);

  const changePosition = () => {
    const random = Math.floor(Math.random() * data.length);
    setPosition(random);
    const backRandom = Math.floor(Math.random() * (5 - 1) + 1);
    setBack(backRandom);
  };

  return (
    <section
      className="container"
      style={{ backgroundImage: `url(/fondo${back}.png)` }}
    >
      <h1>GALLETA DE LA FORTUNA</h1>
      <div className="content-div-img">
        <p className="text">{data[position].phrase}</p>
        <p className="text-footer">{data[position].author}</p>
      </div>
      <Button changePosition={changePosition} />
    </section>
  );
};

export default Fortuna;
