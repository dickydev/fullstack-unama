const users = [
  { id: 1, name: 'Ucup' },
  { id: 2, name: 'Tia' },
  { id: 3, name: 'Aisyah' },
  { id: 4, name: 'Rifqi' },
  { id: 5, name: 'Viki' },
];

const UserList = () => {
  return (
    <div>
      <h1>3 - List Rendering</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
