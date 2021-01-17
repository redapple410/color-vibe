import React, { useState, useEffect, useRef } from "react";
import AudioController from "./AudioController.js";
import RecordButton from "./RecordButton.js"
import Wave from "@foobar404/wave";
import "./AudioVisualizer.css";

const AudioVisualizer = () => {
  const [wave] = useState(new Wave());

  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    wave.fromElement("audioPlayer", "canvas", {
      type: "dualbars",
      colors: ["crimson", "orange", "yellow", "lawngreen", "mediumturquoise", "dodgerblue", "mediumpurple"],
      stroke: 5
    });
  }, [audioRef, wave]);

  return(
    <div id="audioVisualizerContainer">
      <canvas id="canvas" ref={canvasRef} height="720px" width="1280px" />
      <div id="buttonContainer">
        <AudioController ref={audioRef} />
        <RecordButton canvasRef={canvasRef} audioRef={audioRef} />
      </div>
    </div>
  );
}

export default AudioVisualizer;
