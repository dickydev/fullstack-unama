import {
  JSXRules,
  ExpressionComponent,
  UserList,
  ConditionalRendering,
} from './components/1-jsx-rules';
import { Dashboard, Bio } from './components/2-component';
import { Counter, Profile } from './components/3-state';
import { Posts } from './components/4-side-effect';
import { CountRef, InputFocus } from './components/5-referensi';
import { TodoList } from './components/6-reducer';
import { ThemeToggle } from './components/7-context';

import { useContext } from 'react';
import { ThemeContext } from './components/7-context/context/ThemeContext';
import {
  ExpensiveCalculation,
  ExpensiveCalculationMemo,
  LoadButton,
  LoadButtonMemo,
} from './components/8-optimisasi';
import { CounterByCustom, UserProfile } from './components/9-custom-hooks';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/10-router/components/Navbar';
import {
  Home,
  Settings,
  UserProfileNav,
  NotFound,
} from './components/10-router';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: '5000dvh',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <Navbar />
      <h1>Belajar React</h1>

      {/* Materi 1 - JSX Rules */}
      <JSXRules />
      <ExpressionComponent />
      <UserList />
      <ConditionalRendering />

      {/* Materi 2 - Component */}
      <Dashboard />
      <Bio nama={'Dicky'} tanggalLahir={'12 September 2000'}>
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

      {/* Materi 7 - Context */}
      <ThemeToggle />

      {/* Materi 8 - Optimisasi */}
      <ExpensiveCalculation />
      <ExpensiveCalculationMemo />
      <LoadButton />
      <LoadButtonMemo />

      {/* Materi 9 - Custom Hooks */}
      <CounterByCustom />
      <UserProfile />

      {/* Materi 10 - Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfileNav />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
