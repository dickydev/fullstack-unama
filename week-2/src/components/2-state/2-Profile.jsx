import { useState } from 'react';

const Profile = () => {
  const [nama, setNama] = useState('');

  return (
    <div>
      <h1>Nama : {nama}</h1>

      <input
        type="text"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
      />
    </div>
  );
};

export default Profile;
