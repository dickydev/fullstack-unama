import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Mode : {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}
