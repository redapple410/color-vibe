import React, { useRef } from "react";
import AudioVisualizer from "./AudioVisualizer.js";
import AudioController from "./AudioController.js";
import RecordButton from "./RecordButton.js";
import "./App.css";
import "./font.css";

const App = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  return (
    <div>
      <div id="buttonContainer">
        <AudioController ref={audioRef} />
        <RecordButton canvasRef={canvasRef} audioRef={audioRef} />
      </div>
      <AudioVisualizer ref={canvasRef} />
    </div>
  );
};

export default App;
