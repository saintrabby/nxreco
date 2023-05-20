import React from 'react';
import { atom, useRecoilState } from 'recoil';

const counterState = atom({
  key: 'counterState',
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
