import { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const incrementBy1 = () => {
    if (count >= 10) {
      setMessage("You can’t increase value above 10");
      return;
    }

    setCount(count + 1);
    setMessage("");
  };

  const decrementBy1 = () => {
    if (count <= 0) {
      setMessage("You can’t decrease value below 0 ( zero )");
      return;
    }

    setCount(count - 1);
    setMessage("");
  };

  const incrementBy2 = () => {
    if (count + 2 > 10) {
      setMessage("You can’t increase value above 10");
      return;
    }

    setCount(count + 2);
    setMessage("");
  };

  const decrementBy2 = () => {
    if (count - 2 < 0) {
      setMessage("You can’t decrease value below 0 ( zero )");
      return;
    }

    setCount(count - 2);
    setMessage("");
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="counter-box">
      <h2 className="text-primary">
        Counter (useState Hook) = {count}
      </h2>

      <hr />

      <button
        className="btn btn-outline-primary"
        onClick={incrementBy1}
      >
        Increment By 1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={decrementBy1}
      >
        Decrement By 1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={incrementBy2}
      >
        Increment By 2
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={decrementBy2}
      >
        Decrement By 2
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={reset}
      >
        Reset
      </button>

      {message && (
        <p className="text-danger mt-2">
          {message}
        </p>
      )}
    </div>
  );
}

export default UseStateCounter;