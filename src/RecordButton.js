import React, { useRef, useEffect, useCallback } from "react";
import recorder from "react-canvas-recorder";
import { time as uniqidtime } from "uniqid";
import "./RecordButton.css";

const RecordButton = (props) => {
  const downloadRef = useRef(null);
  const startButtonBeginningRef = useRef(null);
  const startButtonCurrentRef = useRef(null);
  const stopButtonRef = useRef(null);

  useEffect(() => {
    startButtonBeginningRef.current.disabled = false;
    startButtonCurrentRef.current.disabled = false;
    stopButtonRef.current.disabled = true;
  });

  const startRecording = useCallback(
    (e, s) => {
      if (s === "beginning") {
        props.audioRef.current.load();
      }

      startButtonBeginningRef.current.disabled = true;
      startButtonCurrentRef.current.disabled = true;
      stopButtonRef.current.disabled = false;

      recorder.createStream(props.canvasRef.current);
      recorder.start();

      if (s === "beginning") {
        props.audioRef.current.play();
      }
    },
    [props.audioRef, props.canvasRef]
  );

  const stopRecording = useCallback(() => {
    props.audioRef.current.pause();
    recorder.stop();

    startButtonBeginningRef.current.disabled = false;
    startButtonCurrentRef.current.disabled = false;
    stopButtonRef.current.disabled = true;

    let file = recorder.save();
    if (file) {
      let url = window.URL.createObjectURL(file);
      downloadRef.current.href = url;
      downloadRef.current.setAttribute(
        "download",
        `${uniqidtime("visuals-")}.webm`
      );
      downloadRef.current.click();
    }
  }, [props.audioRef]);

  return (
    <div id="recordButtonContainer">
      <button
        className="button recordingButton"
        ref={startButtonBeginningRef}
        type="button"
        onClick={(e) => {
          startRecording(e, "beginning");
        }}
      >
        Start Recording From Beginning
      </button>
      <button
        className="button recordingButton"
        ref={startButtonCurrentRef}
        type="button"
        onClick={(e) => {
          startRecording(e, "current");
        }}
      >
        Start Recording From Current State
      </button>
      <button
        className="button recordingButton"
        ref={stopButtonRef}
        type="button"
        onClick={stopRecording}
      >
        Stop Recording
      </button>
      {/*eslint-disable-next-line*/}
      <a hidden href="#" ref={downloadRef} />
    </div>
  );
};

export default RecordButton;
