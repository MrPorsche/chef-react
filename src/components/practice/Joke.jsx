import React from "react";
export default function Joke(props) {
    let [isShown, setIsShown] = React.useState(false);

    function handleToggle() {
        setIsShown(prevState => !prevState);
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={handleToggle}>{isShown ? "Hide" : "Show"} Punchline</button>
            {/* <button onClick={handleToggle}>Punchline</button> */}
            <hr />
        </div>
    );
}