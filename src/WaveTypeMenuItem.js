import React, { useCallback } from "react";
import "./WaveTypeMenu.css";

const WaveTypeMenuItem = (props) => {


  const handleClick = useCallback(() => {
    props.setWaveType(props.type);
  }, [props.type, props.setWaveType]);

  return(
    <div className="waveTypeMenuItem" onClick={handleClick} >
      {props.type}
    </div>
  );
}

export default WaveTypeMenuItem;
