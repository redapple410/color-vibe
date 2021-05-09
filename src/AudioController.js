import React, { useState, useRef, useCallback } from "react";
import moonsong from "./assets/moonsong.mp3";
import "./AudioController.css";

const AudioController = React.forwardRef((props, ref) => {
  const [song, setSong] = useState(moonsong);

  const audioFileRef = useRef(null);

  const loadSong = useCallback(
    (e) => {
      e.preventDefault();
      if (audioFileRef.current.files.length === 0) {
        return false;
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        setSong(e.target.result);
      };
      reader.readAsDataURL(audioFileRef.current.files[0]);
    },
    [audioFileRef]
  );

  return (
    <div id="audioControllerContainer">
      <audio
        controls
        id="audioPlayer"
        src={song}
        ref={ref}
        crossOrigin="anonymous"
      />
      <form id="audioForm" onSubmit={loadSong}>
        <input id="audioFile" ref={audioFileRef} type="file" accept="audio/*" />
        <input className="button" id="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
});

export default AudioController;
