import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Arm = ({ position, armLength, armDiameter, left }) => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y = left
      ? (Math.PI / 2) * (1 + Math.sin(clock.getElapsedTime() * 5))
      : (Math.PI / 2) * (2 - (1 + Math.sin(clock.getElapsedTime() * 5)));
  });

  return (
    <mesh ref={mesh}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
        <cylinderGeometry
          attach="geometry"
          args={[armDiameter, armDiameter, armLength, 32]}
        />
        <meshLambertMaterial attach="material" color="red" />
        {/* <axesHelper /> */}
      </mesh>
    </mesh>
  );
};

const Bag = () => {
  const bagHeight = 1.8;
  const headHeight = 1.8;
  const beltHeight = 1.4;
  const kneeHeight = 1.0;
  const bagWidth = 0.3;
  const armLength = 0.8;
  const armDiameter = 0.1;
  const offset = bagHeight / 2; // as everything is drawn at 0, 0, 0 ?
  const armOffset = offset + armDiameter / 2;

  // not sure where this height comes from ? the ring
  return (
    <mesh position={[0, 1.225, 0]}>
      <cylinderGeometry
        attach="geometry"
        args={[bagWidth, bagWidth, bagHeight, 32]}
      />
      <meshLambertMaterial attach="material" color="navy" />
      <Arm
        position={[0, headHeight - armOffset, 0.7]}
        left={true}
        armLength={armLength}
        armDiameter={armDiameter}
      />
      <Arm
        position={[0, headHeight - armOffset, -0.7]}
        armLength={armLength}
        armDiameter={armDiameter}
      />
      <Arm
        position={[0, beltHeight - armOffset, 0.7]}
        left={true}
        armLength={armLength}
        armDiameter={armDiameter}
      />
      <Arm
        position={[0, beltHeight - armOffset, -0.7]}
        armLength={armLength}
        armDiameter={armDiameter}
      />
      <Arm
        position={[0, kneeHeight - armOffset, 0.7]}
        left={true}
        armLength={armLength}
        armDiameter={armDiameter}
      />
      <Arm
        position={[0, kneeHeight - armOffset, -0.7]}
        armLength={armLength}
        armDiameter={armDiameter}
      />
    </mesh>
  );
};

const SparringBot = () => {
  return <Bag />;
};

export default SparringBot;
