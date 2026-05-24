import { useState, useEffect } from 'react';
import './index.css';

const user = {
  name: 'Ucup',
  age: 21,
};

const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    async function fetchDataUser() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await data.json();
        setUsers(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchDataUser();
  }, []);

  // 3. If Rendering
  if (isLoading) return <span class="loader"></span>;

  return (
    <div>
      <h1>Materi 4 - Conditional Rendering</h1>
      <button onClick={() => setIsLogin((login) => !login)}>
        {isLogin ? 'Logout' : 'Login'}
      </button>

      {/* 1. Ternary */}
      {isLogin ? <h1>Welcome, {user.name}</h1> : <h1>Please Login...</h1>}

      {/* 2. Logical AND (&&) */}
      {isLogin && (
        <ul>
          <li>Nama : {user.name}</li>
          <li>Umur : {user.age}</li>
        </ul>
      )}
      {isLogin && (
        <ul
          style={{
            display: 'grid',
            flexDirection: 'column',
            gap: 10,
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                backgroundColor: 'yellow',
                color: 'black',
                padding: '10px',
                listStyle: 'none',
              }}
            >
              {user.name} | {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionalRendering;
