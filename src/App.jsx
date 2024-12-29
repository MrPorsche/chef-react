import React from 'react';
import './components/style/App.css';
import Header from './components/Header';
import Form from './components/Form';
// import jokes from "./jokes.js";
// import Joke from './components/Joke';

function App() {
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

  return (
    <>
      <Header />
      <Form />
      {/* Practice
      <div>
        {jokeEl}
        <h1>{notifyMessage}</h1>
      </div> */}
    </>
  );
}

export default App;