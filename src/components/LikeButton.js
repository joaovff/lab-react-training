import { useState } from 'react';

const LikeButton = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const bg = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function rand(items) {
    return items[(items.length * Math.random()) | 0];
  }

  function count1() {
    setCounter(counter + 1);
  }
  function count2() {
    setCounter2(counter2 + 1);
  }

  return (
    <div>
      <button onClick={count1} style={{ backgroundColor: `${rand(bg)}` }}>
        {counter} Likes
      </button>
      <button onClick={count2} style={{ backgroundColor: `${rand(bg)}` }}>{counter2} Likes</button>
    </div>
  );
};

export default LikeButton;
