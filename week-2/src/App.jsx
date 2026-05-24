import {
  JSXRules,
  ExpressionComponent,
  UserList,
  ConditionalRendering,
} from './components/1-jsx-rules';

const App = () => {
  return (
    <div>
      <h1>Belajar React</h1>

      {/* Materi 1 - JSX Rules */}
      <JSXRules />
      <ExpressionComponent />
      <UserList />
      <ConditionalRendering />
    </div>
  );
};

export default App;
