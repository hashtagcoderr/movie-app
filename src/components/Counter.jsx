import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter - 1 >= 0) {
        setCounter(counter - 1);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    setName(value);
  };

  return (
    <React.Fragment>
      <h2>Counter Value: {counter} </h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <hr />

      <p>
        1. My name is <b> {name} </b>
      </p>
      <p>
        2. My name is <b> {name} </b>
      </p>
      <br />
      <input type="text" onChange={handleInputChange} />
    </React.Fragment>
  );
};
