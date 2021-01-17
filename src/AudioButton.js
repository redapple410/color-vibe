import React, { useState, useRef, useCallback } from "react";
import tempsong from "./media/tempsong.mp3";

const AudioButton = React.forwardRef((props, ref) => {
  const [song, setSong] = useState(tempsong);

  const audioFileRef = useRef(null);

  const loadSong = useCallback((e) => {
    e.preventDefault();
    if(audioFileRef.current.files.length === 0){
      return false;
    }
    let reader = new FileReader();
    reader.onload = (e) => {
      setSong(e.target.result);
    }
    reader.readAsDataURL(audioFileRef.current.files[0]);
  }, [audioFileRef]);

  return(
    <div id="audioButtonContainer">
      <audio controls id="audio" src={song} ref={ref} crossOrigin="anonymous" />
      <form onSubmit={loadSong}>
        <label>Select an audio file: </label>
        <input id="audioFile" ref={audioFileRef} type="file" accept="audio/*" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
});

export default AudioButton;
