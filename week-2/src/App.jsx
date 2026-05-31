import {
  JSXRules,
  ExpressionComponent,
  UserList,
  ConditionalRendering,
} from "./components/1-jsx-rules";
import { Dashboard, Bio } from "./components/2-component";
import { Counter, Profile } from "./components/3-state";
import { Posts } from "./components/4-side-effect";
import { CountRef, InputFocus } from "./components/5-referensi";
import { TodoList } from "./components/6-reducer";

const App = () => {
  return (
    <div style={{ height: "2000dvh" }}>
      <h1>Belajar React</h1>

      {/* Materi 1 - JSX Rules */}
      <JSXRules />
      <ExpressionComponent />
      <UserList />
      <ConditionalRendering />

      {/* Materi 2 - Component */}
      <Dashboard />
      <Bio nama={"Dicky"} tanggalLahir={"12 September 2000"}>
        <strong>Hello saya children</strong>
      </Bio>

      {/* Materi 3 - State */}
      <Counter />
      <Profile />

      {/* Materi 4 - Side Effect */}
      <Posts />

      {/* Materi 5 - Referensi */}
      <CountRef />
      <InputFocus />

      {/* Materi 6 - Reducer */}
      <TodoList />
    </div>
  );
};

export default App;
