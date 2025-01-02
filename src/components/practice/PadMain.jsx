import React, { useState } from "react";
import Pad from "./Pad.jsx";
import padsData from "../../assets/data/padsData.js";

export default function PadMain() {
    const [pads, setPads] = useState(padsData);

    function handleToggle(id) {
    setPads(prevPads => prevPads.map(prevPad => {
        return prevPad.id === id ? {...prevPad, on: !prevPad.on} : prevPad
    }))
    }

    const padButtons = pads.map(pad => (
    <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        toggle={handleToggle}
    />
    ))

    return (
        <main>
            <div className="pad-container">
                {padButtons}
            </div>
        </main>
    )
}