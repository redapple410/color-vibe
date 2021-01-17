import React, { useState, useEffect, useRef } from "react";
import AudioController from "./AudioController.js";
import RecordButton from "./RecordButton.js";
import WaveTypeMenu from "./WaveTypeMenu.js";
import Wave from "@foobar404/wave";
import "./AudioVisualizer.css";

const AudioVisualizer = () => {
  const [wave] = useState(new Wave());
  const [waveType, setWaveType] = useState("dualbars");

  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    wave.fromElement("audioPlayer", "canvas", {
      type: waveType,
      colors: ["crimson", "orange", "yellow", "lawngreen", "mediumturquoise", "dodgerblue", "mediumpurple"],
      stroke: 4
    });
  }, [waveType, audioRef, wave]);

  return(
    <div id="audioVisualizerContainer">
      <canvas id="canvas" ref={canvasRef} height="720px" width="1280px" />
      <div id="buttonContainer">
        <AudioController ref={audioRef} />
        <RecordButton canvasRef={canvasRef} audioRef={audioRef} />
      </div>
      <WaveTypeMenu setWaveType={setWaveType} />
    </div>
  );
}

export default AudioVisualizer;
