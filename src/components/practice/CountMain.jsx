import React, { useState } from "react";
import Count from "./Count.jsx";

export default function CountMain() {
      const [count, setCount] = useState(0)

    function subtract() {
      setCount(prevCount => prevCount - 1)
    }

    function add() {
      setCount(prevCount => prevCount + 1)
    }
    return (
        <main>
            <button onClick={subtract}>-</button>
            <Count count={count} />
            <button onClick={add}>+</button>
        </main>
    )
}