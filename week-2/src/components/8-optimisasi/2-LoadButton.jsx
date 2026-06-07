import { useState } from 'react';
import Button from './2-Button';

export default function LoadButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Klik');
  };

  return <Button onClick={handleClick} />;
}
