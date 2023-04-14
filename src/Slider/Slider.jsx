import React, { useState } from "react";
import "./slider.css"

export function Slider(props) {

    const [value, setValue] = useState(props.value)

    return(
        <div class="slidecontainer">
            <input type="range" min="1" max="100" value={value} className="slider" id="myRange"></input>
        </div>
    );
};