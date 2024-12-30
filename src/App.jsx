import React from 'react';
import './components/style/App.css';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
// import Count from './components/Count.jsx';
// import padsData from './padsData.js';
// import Pad from './components/Pad.jsx';
// import jokes from "./jokes.js";
// import Joke from './components/Joke';

function App() {

//   Addition and subtraction practice
//   const [count, setCount] = React.useState(0)

// function subtract() {
//   setCount(prevCount => prevCount - 1)
// }

// function add() {
//   setCount(prevCount => prevCount + 1)
// }

  // Conditional rendering practice
  // const jokeEl = jokes.map(joke => {
  //   return (
  //     <Joke
  //         key={joke.id}
  //         setup={joke.setup}
  //         punchline={joke.punchline}
  //     />
  //   );
  // });


  {/* Conditional rendering practice 2 */}
  // const [message, setMessage] = React.useState([1, 2, 3, 4, 5, 6]);

  // const notifyMessage = message.length === 0
  //   ? "You're all caught up!"
  //   : message.length === 1
  //   ? `You have ${message.length} unread message.`
  //   : `You have ${message.length} unread messages.`

  // // Pad buttons challenge
  // const [pads, setPads] = React.useState(padsData);

  // function handleToggle(id) {
  //   setPads(prevPads => prevPads.map(prevPad => {
  //     return prevPad.id === id ? {...prevPad, on: !prevPad.on} : prevPad
  //   }))
  // }

  // const padButtons = pads.map(pad => (
  //   <Pad
  //     key={pad.id}
  //     id={pad.id}
  //     color={pad.color}
  //     on={pad.on}
  //     toggle={handleToggle}
  //   />
  // ))

  return (
    <>
      <Header />
      <Form />
      {/* Addition and subtraction practice
      <button onClick={subtract}>-</button>
      <Count count={count}/>
      <button onClick={add}>+</button> */}
      {/* Practice
      <div>
        {jokeEl}
        <h1>{notifyMessage}</h1>
      </div> */}
{/* 
// Pad buttons challenge
      <main>
        <div className="pad-container">
          {padButtons}
        </div>
      </main> */}

    </>
  );
}

export default App;