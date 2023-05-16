import React from "react";
import "./slider.css";

export function Slider(props) {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={props.value}
        className="slider"
        onChange={(event) =>
          props.onChange && props.onChange(parseInt(event.target.value))
        }
        onMouseUp={props.onAfterChange}
        onTouchEnd={props.onAfterChange}
      ></input>
    </div>
  );
}
