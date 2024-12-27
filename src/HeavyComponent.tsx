import React from "react";
const HeavyComponent: React.FC = () => {
  for (let index = 0; index < 10000; index++) {
    console.log(index);
  }
  return <div>This is a heavy component!</div>;
};

export default HeavyComponent;
