import React, { useState } from "react";
import "./slider.css"

export function Slider(props) {

    return(
        <div class="slidecontainer">
            <input 
            type="range" 
            min="1" 
            max="100" 
            value={props.value} 
            className="slider"         
            onChange={(event) => props.onChange(parseInt(event.target.value))}
            onMouseUp={props.onAfterChange}
            onTouchEnd={props.onAfterChange}>
            </input>
        </div>
    );
};