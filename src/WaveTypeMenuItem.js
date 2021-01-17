import React from "react";
import "./WaveTypeMenu.css";

const WaveTypeMenuItem = (props) => {
  const handleClick = () => {
    props.setWaveType(props.type);
  };

  return(
    <div className="waveTypeMenuItem" onClick={handleClick} >
      {props.type}
    </div>
  );
}

export default WaveTypeMenuItem;
