import { useState, useCallback } from 'react';
import Button from './2-Button';

export default function LoadButtonMemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Klik');
  }, [count]);

  return <Button onClick={handleClick} />;
}
