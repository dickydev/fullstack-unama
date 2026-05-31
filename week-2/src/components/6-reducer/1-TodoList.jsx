import { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE":
      return {};

    default:
      return state;
  }
}

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div>
      <h1>TodoList App</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={addTodo}>Tambah Todo</button>

      <ul>
        {state.todos.map((todo, index) => (
          <li
            key={index}
            style={{ display: "flex", gap: 10, listStyle: "outside" }}
          >
            {todo}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
