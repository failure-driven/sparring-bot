import React from "react";
import SparringBot from "./SparringBot";

const Ring = () => {
  return (
    <mesh position={[0, 0.6, 0]} receiveShadow>
      <boxGeometry attach="geometry" args={[7.7, 1.2, 7.7]} />
      <meshLambertMaterial attach="material" color="red" />
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry attach="geometry" args={[7.7, 0.025, 7.7]} />
        <meshBasicMaterial attach="material" color="blue" />
      </mesh>
      <SparringBot position={[0, 0.625, 0]} />
    </mesh>
  );
};

export default Ring;
