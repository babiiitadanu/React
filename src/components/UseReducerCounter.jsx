import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_1":
      return state < 10 ? state + 1 : state;

    case "DECREMENT_1":
      return state > 0 ? state - 1 : state;

    case "INCREMENT_2":
      return state + 2 <= 10 ? state + 2 : state;

    case "DECREMENT_2":
      return state - 2 >= 0 ? state - 2 : state;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function UseReducerCounter() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="counter-box">
      <h2 className="text-danger">
        Counter (useReducer Hook) = {count}
      </h2>

      <hr />

      <button
        className="btn btn-outline-danger"
        onClick={() =>
          dispatch({ type: "INCREMENT_1" })
        }
      >
        Increment By 1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() =>
          dispatch({ type: "DECREMENT_1" })
        }
      >
        Decrement By 1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() =>
          dispatch({ type: "INCREMENT_2" })
        }
      >
        Increment By 2
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() =>
          dispatch({ type: "DECREMENT_2" })
        }
      >
        Decrement By 2
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        Reset
      </button>

      {count === 10 && (
        <p className="text-danger mt-2">
          You can’t increase value above 10
        </p>
      )}

      {count === 0 && (
        <p className="text-danger mt-2">
          You can’t decrease value below 0 ( zero )
        </p>
      )}
    </div>
  );
}

export default UseReducerCounter;