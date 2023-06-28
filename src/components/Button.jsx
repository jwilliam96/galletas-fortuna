import React from "react";

const Button = ({ changePosition }) => {
  return (
    <button className="content-button" onClick={changePosition}>
      Prueba tu suerte
    </button>
  );
};

export default Button;
