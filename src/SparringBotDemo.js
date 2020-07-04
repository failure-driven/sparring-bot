import React from "react";
import { Canvas } from "react-three-fiber";
import CustomControls from "./controls/CustomControls";
import Ring from "./3d/Ring";

function SparringBotDemo(props) {
  return (
    <Canvas camera={{ position: [6, 6, 6] }}>
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-20, -20, -20]} />
      <fog attach="fog" args={["#041830", 5, 30]} />
      <Ring />
      <gridHelper args={[30, 30]} />
      <CustomControls />
    </Canvas>
  );
}

export default SparringBotDemo;
