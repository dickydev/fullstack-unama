import {
  JSXRules,
  ExpressionComponent,
  UserList,
  ConditionalRendering,
} from './components/1-jsx-rules';
import { Counter, Profile } from './components/2-state';

const App = () => {
  return (
    <div style={{ height: '200dvh' }}>
      <h1>Belajar React</h1>

      {/* Materi 1 - JSX Rules */}
      <JSXRules />
      <ExpressionComponent />
      <UserList />
      <ConditionalRendering />

      {/* Materi 2 - State */}
      <Counter />
      <Profile />
    </div>
  );
};

export default App;
