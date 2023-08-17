import { useState } from "react";

const useFetch = (data) => {
  const [position, setPosition] = useState(0);
  const [back, setBack] = useState(1);

  const changePosition = () => {
    const random = Math.floor(Math.random() * data.length);
    setPosition(random);
    const backRandom = Math.floor(Math.random() * (5 - 1) + 1);
    setBack(backRandom);
  };

  return [position, back, changePosition];
};

export default useFetch;
