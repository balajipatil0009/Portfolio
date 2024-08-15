import { Scroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Robo } from "./Robo";

const RoboCanvas = () => {
  return (
    <Scroll style={{ pointerEvents: "none", position: "absolute", zIndex: 10 }}>
      <Robo />
    </Scroll>
  );
};

export default RoboCanvas;
