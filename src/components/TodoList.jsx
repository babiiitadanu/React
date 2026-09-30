import { useReducer, useState } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Learn HTML CSS and JavaScript",
    completed: true,
  },
  {
    id: 2,
    text: "Learn React",
    completed: false,
  },
  {
    id: 3,
    text: "Create Projects",
    completed: false,
  },
  {
    id: 4,
    text: "Upload on Github",
    completed: false,
  },
  {
    id: 5,
    text: "Create Portfolio Website",
    completed: false,
  },
  {
    id: 6,
    text: "Create Resume",
    completed: false,
  },
  {
    id: 7,
    text: "Apply for Job",
    completed: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    case "REMOVE":
      return state.filter(
        (todo) => todo.id !== action.id
      );

    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(
    todoReducer,
    initialTodos
  );

  const [text, setText] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 2000);
  };

  const addTodo = () => {
    if (!text.trim()) {
      showMessage(
        "Please enter a todo item.",
        "warning"
      );
      return;
    }

    dispatch({
      type: "ADD",
      text: text.trim(),
    });

    setText("");

    showMessage(
      "Todo successfully added!",
      "success"
    );
  };

  const toggleTodo = (todo) => {
    dispatch({
      type: "TOGGLE",
      id: todo.id,
    });

    if (!todo.completed) {
      showMessage(
        "Todo successfully completed!",
        "success"
      );
    } else {
      showMessage(
        "Todo marked as pending!",
        "info"
      );
    }
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });

    showMessage(
      "Todo successfully removed!",
      "danger"
    );
  };

  return (
    <div className="todo-box">

      <h4>Todo List</h4>

      {/* SUCCESS / ERROR MESSAGE */}

      {message && (
        <div
          className={`alert alert-${messageType} py-2`}
          role="alert"
        >
          {message}
        </div>
      )}

      {/* INPUT */}

      <div className="input-group mb-3">

        <input
          type="text"
          className="form-control"
          placeholder="Enter list item name"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button
          className="btn btn-outline-secondary"
          onClick={addTodo}
        >
          Add Todo Item
        </button>

      </div>

      {/* TODO LIST */}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="todo-item d-flex justify-content-between align-items-center"
        >

          <div
            className="todo-text"
            onClick={() => toggleTodo(todo)}
          >

            <span className="me-2">
              {todo.completed ? "✓" : "○"}
            </span>

            <span
              className={
                todo.completed
                  ? "text-decoration-line-through"
                  : ""
              }
            >
              {todo.text}
            </span>

          </div>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeTodo(todo.id)}
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  );
}

export default TodoList;