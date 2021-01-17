import React, { useState, useEffect, useRef, useCallback } from "react";
import Wave from "@foobar404/wave";
import recorder from "react-canvas-recorder";
import { time as uniqidtime } from "uniqid";
import "./AudioPlayer.css";

import song2 from "./media/song2.mp3";

const AudioPlayer = () => {
  const [wave] = useState(new Wave());

  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = 0.5;

    wave.fromElement("audio", "canvas", {
      type: "dualbars",
      colors: ["crimson", "orange", "yellow", "lawngreen", "mediumturquoise", "dodgerblue", "mediumpurple"],
      stroke: 5
    });
  }, [wave]);

  const startRecording = useCallback(() => {
    audioRef.current.load();
    recorder.createStream(canvasRef.current);
    recorder.start();
    audioRef.current.play();
  }, [canvasRef]);

  const stopRecording = useCallback(() => {
    audioRef.current.pause();
    recorder.stop();
    let file = recorder.save();
    if(file){
      let url = window.URL.createObjectURL(file);
      downloadRef.current.href = url;
      downloadRef.current.setAttribute("download", `${uniqidtime("visuals-")}.mp4`);
      downloadRef.current.click();
    }
  }, []);

  return(
    <div id="audioPlayerContainer">
      <canvas id="canvas" ref={canvasRef} height="720px" width="1280px" />
      <audio controls id="audio" src={song2} ref={audioRef} crossOrigin="anonymous" />
      <button id="startRecordingButton" type="button" onClick={startRecording}>
        Start Recording
      </button>
      <button id="stopRecordingButton" type="button" onClick={stopRecording}>
        Stop Recording
      </button>
      <a href="#" ref={downloadRef} />
    </div>
  );
}

export default AudioPlayer;
