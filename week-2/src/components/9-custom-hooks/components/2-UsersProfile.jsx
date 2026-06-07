import { useFetch } from '../hooks/useFetch';

const UserProfile = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Users List Profile</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
