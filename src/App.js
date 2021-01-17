import React, { useRef } from "react";
import AudioVisualizer from "./AudioVisualizer.js";
import AudioController from "./AudioController.js";
import RecordButton from "./RecordButton.js";
import WaveTypeMenu from "./WaveTypeMenu.js";
import "./App.css";

const App = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  return(
    <div>
      <AudioVisualizer ref={canvasRef} />
      <div id="buttonContainer">
        <AudioController ref={audioRef} />
        <RecordButton canvasRef={canvasRef} audioRef={audioRef} />
      </div>
    </div>
  );
}

export default App;
