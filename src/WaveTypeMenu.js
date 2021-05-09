import React, { useState, useCallback } from "react";
import WaveTypeMenuItem from "./WaveTypeMenuItem.js";
import "./WaveTypeMenu.css";

const WaveTypeMenu = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const getMenuItems = useCallback(() => {
    let waveTypesArr = [
      "bars",
      "bars blocks",
      "big bars",
      "cubes",
      "dualbars",
      "dualbars blocks",
      "fireworks",
      "flower",
      "flower blocks",
      "orbs",
      "ring",
      "rings",
      "round wave",
      "shine",
      "shine rings",
      "shockwave",
      "star",
      "static",
      "stitches",
      "web",
      "wave",
    ];
    return waveTypesArr.map((it, idx) => {
      return (
        <WaveTypeMenuItem key={idx} type={it} setWaveType={props.setWaveType} />
      );
    });
  }, [props.setWaveType]);

  const toggleMenu = useCallback(() => {
    setMenuVisible(!menuVisible);
  }, [menuVisible]);

  return (
    <div id="waveTypeMenuContainer">
      <div
        id="waveTypeMenu"
        style={{ display: menuVisible ? "block" : "none" }}
      >
        {getMenuItems()}
      </div>
      <div id="waveTypeMenuButton" onClick={toggleMenu}>
        Visualizer Type
      </div>
    </div>
  );
};

export default WaveTypeMenu;
