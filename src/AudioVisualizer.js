import React, { useState, useEffect, useRef } from "react";
import WaveTypeMenu from "./WaveTypeMenu.js";
import Wave from "@foobar404/wave";
import "./AudioVisualizer.css";

const AudioVisualizer = React.forwardRef((props, canvasRef) => {
  const [wave] = useState(new Wave());
  const [waveType, setWaveType] = useState("dualbars");

  useEffect(() => {
    wave.fromElement("audioPlayer", "canvas", {
      type: waveType,
      colors: ["crimson", "orange", "yellow", "lawngreen", "mediumturquoise", "dodgerblue", "mediumpurple"],
      stroke: 4
    });
  }, [waveType, wave]);

  return(
    <div>
      <canvas id="canvas" ref={canvasRef} height="720px" width="1280px" />
      <WaveTypeMenu setWaveType={setWaveType} />
    </div>
  );
});

export default AudioVisualizer;
